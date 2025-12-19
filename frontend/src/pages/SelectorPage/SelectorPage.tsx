import { Selector } from "../../components/Selector/Selector";
import { Button } from "../../components/Button/Button";
import type { SelectorPageProps } from "../../utils/types";
import styles from "./SelectorPage.module.css";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "../../context/PreferenceContext";

const SelectorPage = (props: SelectorPageProps) => {
  const navigate = useNavigate();
  const { updatePreferences } = usePreferences();
  const handleEmojiSelected = (value: string) => {
      updatePreferences(props.field, value);
      navigate(props.to);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>{props.question}</h1>

      <Selector emojis={props.emojis} onSelect={handleEmojiSelected} />

      <div className={styles.navButtons}>
        <Button text="Back" onClick={() => navigate(-1)} />
        <Button text="Let Us Decide!" onClick={() => navigate(props.to)} />
      </div>
    </div>
  );
};

export { SelectorPage };
