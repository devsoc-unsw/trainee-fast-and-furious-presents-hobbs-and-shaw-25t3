import ResultsCard from "../../components/ResultsCard/ResultsCard";
import type { ResultsCardProps } from "../../utils/types";

export default function ResultsPage(props: ResultsCardProps) {
  return (
    <ResultsCard restaurantName={props.restaurantName} address={props.address} priceRange={props.priceRange} website={props.website} starRating={props.starRating} />
  );
}
