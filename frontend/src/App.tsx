
import { SelectorPage } from './pages/SelectorPage/SelectorPage'
import type { ResultsPageProps, SelectorPageProps } from './utils/types'
import './App.css'
import { SliderDemo } from "./components/SliderDemo";
import { Routes, Route } from "react-router-dom";
import ResultsPage from './pages/ResultsPage/ResultsPage';
import { LandingPage } from './pages/LandingPage/LandPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';

const dummyData: SelectorPageProps = {
  question: "My Question",
  field: "mood",
  emojis: new Map([
    ['🥳', 'excited'],
    ['🥰', 'loved'],
    ['😭', 'sad'],
    ['🙂', 'okay'],
    ['😴', 'tired'],
    ['😡', 'angry'],
  ]),
  to: '/next'
}

const dummyResults: ResultsPageProps = {
  restaurants: [
    {
      restaurantName: 'Gelatissimo',
      address: '33 Martin Rd, Darling Square',
      priceRange: '$-$$',
      website: 'https://www.gelatissimo.com.au/',
      starRating: 5,
    },
    {
      restaurantName: 'Restaurant 2',
      address: 'Address 2',
      priceRange: '$-$$',
      website: 'https://www.github.com',
      starRating: 4,
    },
    {
      restaurantName: 'Resto 3',
      address: 'Address 3',
      priceRange: '$$-$$$',
      website: 'https://www.youtube.com',
      starRating: 3,
    }
  ]
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/' element={<SelectorPage question={dummyData.question} field={dummyData.field} emojis={dummyData.emojis} to={dummyData.to} />}/> */}
        <Route path='/results' element={
          <ResultsPage
            restaurants={dummyResults.restaurants}
          />}
        />
        <Route path='/confirmation' element={
          <ConfirmationPage />
        } />
      </Routes >
    </>
  );
}

export default App;
