import { useState } from "react";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import type { ResultsPageProps } from "../../utils/types";
import styles from './ResultsPage.module.css'

export default function ResultsPage(props: ResultsPageProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const handleShowNext = () => {
    if (currentIdx < props.restaurants.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // loop back to first (for now)
      setCurrentIdx(0);
    }
  };

  const current = props.restaurants[currentIdx];

  return (
    <>
      <div className={styles.page}>
        <ResultsCard
          restaurantName={current.restaurantName}
          address={current.address}
          priceRange={current.priceRange}
          website={current.website}
          starRating={current.starRating}
          onNext={handleShowNext}
          confirmed={confirmed}
        />
      </div >
    </>
  );
}
