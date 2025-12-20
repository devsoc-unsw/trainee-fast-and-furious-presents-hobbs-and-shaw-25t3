import { Selector } from "../../components/Selector/Selector";
import { Button } from "../../components/Button/Button";
import type { SelectorPageProps } from "../../utils/types";
import styles from "./SelectorPage.module.css";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "../../context/PreferenceContext";
import { Slider } from "../../components/Slider/Slider";
import { useState } from "react";

const SelectorPage = (props: SelectorPageProps) => {
  const navigate = useNavigate();
  const { updatePreferences } = usePreferences();
  const isDistance = props.field === 'distance';

  const handleSelected = (value: string | number) => {
      updatePreferences(props.field, String(value));
      navigate(props.to);
  };

  const [distance, setDistance] = useState<number>(5);

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>{props.question}</h1>

      {isDistance ? <Slider value={distance} onChange={setDistance}/>
      : <Selector emojis={props.emojis} onSelect={handleSelected} />}

      <div className={styles.navButtons}>
        <Button text="Back" onClick={() => navigate(-1)} />
        {isDistance ? <Button text="Continue" onClick={() => handleSelected(distance)} />
        : <Button text="Let Us Decide!" onClick={() => navigate(props.to)} />}
      </div>
    </div>
  );
};

export { SelectorPage };
