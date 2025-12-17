import { SelectorPage } from './pages/SelectorPage/SelectorPage'
import type { ResultsCardProps, SelectorPageProps } from './utils/types'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ResultsPage from './pages/ResultsPage/ResultsPage';

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

const dummyResults: ResultsCardProps = {
  restaurantName: 'Gelatissimo',
  address: '33 Martin Rd, Darling Square',
  priceRange: '$-$$',
  website: 'https://www.gelatissimo.com.au/',
  starRating: 5
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SelectorPage question={dummyData.question} field={dummyData.field} emojis={dummyData.emojis} to={dummyData.to} />} />
        <Route path='/results' element={
          <ResultsPage
            restaurantName={dummyResults.restaurantName}
            address={dummyResults.address}
            priceRange={dummyResults.priceRange}
            website={dummyResults.website}
            starRating={dummyResults.starRating}
          />}
        />
      </Routes>
    </>
  )
}

export default App;
