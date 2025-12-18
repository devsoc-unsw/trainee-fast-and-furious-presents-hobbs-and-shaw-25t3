import { SelectorPage } from './pages/SelectorPage/SelectorPage'
import { LandingPage } from './pages/LandingPage/LandPage';
import type { SelectorPageProps } from './utils/types'
import './App.css'
import { Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        {/* <Route path='/' element={<SelectorPage question={dummyData.question} field={dummyData.field} emojis={dummyData.emojis} to={dummyData.to} />}/> */}
      </Routes>
    </>
  );
}

export default App;
