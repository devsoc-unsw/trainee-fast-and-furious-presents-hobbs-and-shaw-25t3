import { SelectorPage } from './pages/SelectorPage/SelectorPage'
import type { ResultsPageProps } from './utils/types'
import './App.css'
// import { SliderDemo } from "./components/SliderDemo";
import { Routes, Route } from "react-router-dom";
import ResultsPage from './pages/ResultsPage/ResultsPage';
import { LandingPage } from './pages/LandingPage/LandPage';
import { PreferenceProvider } from "./context/PreferenceContext";
import { SelectorPageData } from './pages/SelectorPage/SelectorPageData';

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
      <PreferenceProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {SelectorPageData.map((page, index) => {
            const isLast = index === SelectorPageData.length - 1;
            const nextPath = isLast ? "/results" : `/${SelectorPageData[index + 1].field}`;

            return (
              <Route
                key={page.field}
                path={`/${page.field}`}
                element={
                  <SelectorPage
                    question={page.question}
                    field={page.field}
                    emojis={page.emojis}
                    to={nextPath}
                  />
                }
              />
            );
          })}
          <Route path='/results' element={
            <ResultsPage
              restaurants={dummyResults.restaurants}
            />}
          />
        </Routes >
      </PreferenceProvider>
    </>
  );
}

export default App;
