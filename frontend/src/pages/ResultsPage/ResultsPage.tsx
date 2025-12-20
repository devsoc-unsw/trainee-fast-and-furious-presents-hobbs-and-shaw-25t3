import { useState, useEffect } from "react";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import type { ResultsPageProps } from "../../utils/types";
import styles from './ResultsPage.module.css'
import { getRestaurants } from "../../api/getRestaurants";
import { usePreferences } from "../../context/PreferenceContext";

type Restaurant = {
  id: number;
  name?: string;
  lat: number;
  lng: number;
  tags?: Record<string, string>;
};

export default function ResultsPage(props: ResultsPageProps) {
  const { preferences } = usePreferences();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);


  useEffect(() => {
    async function fetchRestaurants() {
      const data = await getRestaurants({
        cuisines: preferences.mood,
        priceRange: preferences.price.toString(),
        partySize: preferences.group,
        radiusKm: preferences.distance
      });
      if (data) {
        setRestaurants(data);
      }
    }
    fetchRestaurants();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (restaurants.length === 0) {
    return (
      <div className={styles.page}>
        <p>Loading…</p>
      </div>
    );
  }

  const handleShowNext = () => {
    if (currentIdx < restaurants.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // loop back to first (for now)
      setCurrentIdx(0);
    }
  };

  function buildAddress(
    tags?: Record<string, string>
  ): string | undefined {
    if (!tags) return undefined;

    const house = tags["addr:housenumber"];
    const street = tags["addr:street"];

    if (!street) return undefined;

    const line1 = house ? `${house} ${street}` : street;

    const suburb =
      tags["addr:suburb"] ||
      tags["addr:city"] ||
      tags["addr:town"];

    const state = tags["addr:state"];
    const postcode = tags["addr:postcode"];

    const line2 = [suburb, state, postcode]
      .filter(Boolean)
      .join(" ");

    return line2 ? `${line1}, ${line2}` : line1;
  }

  const current = restaurants[currentIdx];
  const address = buildAddress(current.tags);
  console.log(restaurants);
  return (
    <>
      <div className={styles.page}>
        <ResultsCard
          restaurantName={current.tags?.name}
          address={address}
          priceRange={current.tags?.priceRange}
          website={current.tags?.website}
          starRating={5}
          onNext={handleShowNext}
          confirmed={confirmed}
        />
      </div >
    </>
  );
}
