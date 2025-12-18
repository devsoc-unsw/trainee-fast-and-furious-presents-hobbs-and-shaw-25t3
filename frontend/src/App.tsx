import { SelectorPage } from './pages/SelectorPage/SelectorPage'
import { LandingPage } from './pages/LandingPage/LandPage';
import type { SelectorPageProps } from './utils/types'
import './App.css'
import { Routes, Route } from "react-router-dom";

const dummyData: SelectorPageProps[] = [
  {
    question: "What are you feeling right now?",
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
  },
]

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<LandingPage/>}/> */}
      <Route path='/' element={<SelectorPage question={dummyData[0].question} field={dummyData[0].field} emojis={dummyData[0].emojis} to={dummyData[0].to} />}/>
      </Routes>
    </>
  );
}

export default App;
