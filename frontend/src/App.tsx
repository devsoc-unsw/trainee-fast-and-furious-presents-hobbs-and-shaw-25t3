import { SelectorPage } from './pages/SelectorPage/SelectorPage'
import './App.css'
// import { SliderDemo } from "./components/SliderDemo";
import { Routes, Route } from "react-router-dom";
import ResultsPage from './pages/ResultsPage/ResultsPage';
import { LandingPage } from './pages/LandingPage/LandPage';
import { PreferenceProvider } from "./context/PreferenceContext";
import { SelectorPageData } from './pages/SelectorPage/SelectorPageData';
import "maplibre-gl/dist/maplibre-gl.css";

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
            <ResultsPage/>}
          />
        </Routes >
      </PreferenceProvider>
    </>
  );
}

export default App;
