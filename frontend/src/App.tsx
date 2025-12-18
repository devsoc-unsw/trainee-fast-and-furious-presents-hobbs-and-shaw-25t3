import { SelectorPage } from "./pages/SelectorPage/SelectorPage";
import { LandingPage } from "./pages/LandingPage/LandPage";
import type { SelectorPageProps, StageProps } from "./utils/types";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const dummyData: StageProps[] = [
  {
    question: "What are you feeling right now?",
    field: "mood",
    emojis: new Map([
      ["🥳", "excited"],
      ["🥰", "loved"],
      ["😭", "sad"],
      ["🙂", "okay"],
      ["😴", "tired"],
      ["😡", "angry"],
    ]),
    to: "1",
  },
  {
    question: "How are many people",
    field: "party",
    emojis: new Map([
      ["🧍‍♂️", "1"],
      ["👬", "2"],
      ["🧍‍♂️ 🧍🏻‍♀️ 🧍🏾‍♀️ ", "3"],
    ]),
    to: "2",
  },
  {
    question: "Price Range 💰",
    field: "price",
    emojis: new Map([
      ["💵", "1"],
      ["💵💵", "2"],
      ["💵💵💵", "3"],
    ]),
    to: "3",
  },
];

function App() {
  const [currentStage, setCurrentStage] = useState(0);

  const handleStageChange = (newStage: string) => {
    setCurrentStage(parseInt(newStage));
    console.log(newStage);
  };

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<LandingPage/>}/> */}
        <Route
          path="/"
          element={
            <SelectorPage
              stage={dummyData[currentStage]}
              handleStageChange={handleStageChange}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
