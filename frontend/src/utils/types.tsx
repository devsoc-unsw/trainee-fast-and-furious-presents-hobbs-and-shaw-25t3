export interface SelectorPageProps {
  question: string;
  field: string;
  emojis: Map<string, string>;
  to: string;
}

/*
Default preferences:

{
  mood: '',
  group: '',
  price: 0,
  distance: 5000
}
*/
export interface Preferences {
  mood: string;
  group: string;
  price: number;
  distance: number;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface ResultsCardProps {
  restaurantName: string;
  address: string;
  priceRange: string;
  website: string; // URL
  starRating: number;
  onNext?: () => void;
  confirmed?: boolean;
}


export interface ResultsPageProps {
  restaurants: ResultsCardProps[];
}
