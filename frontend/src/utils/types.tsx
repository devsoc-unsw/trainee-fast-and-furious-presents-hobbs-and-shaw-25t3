export interface SelectorPageProps {
  question: string;
  field: string;
  emojis: Map<string, string>;
  to: string;
}

export interface ResultsCardProps {
  restaurantName: string;
  address: string;
  priceRange: string;
  website: string; // URL
  starRating: number;
  onNext?: () => void;
}


export interface ResultsPageProps {
  restaurants: ResultsCardProps[];
}
