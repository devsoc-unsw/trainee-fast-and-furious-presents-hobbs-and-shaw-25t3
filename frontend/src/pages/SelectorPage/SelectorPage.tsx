import { Selector } from "../../components/Selector/Selector";
import { Button } from "../../components/Button/Button";
import type { SelectorPageProps } from "../../utils/types";
import styles from "./SelectorPage.module.css";
import { useNavigate } from "react-router-dom";
import { updateField } from "../../api/updateField";

const SelectorPage = (props: SelectorPageProps) => {
  const navigate = useNavigate();

  const handleEmojiSelected = async (value: string) => {
    try {
      //await updateField(props.stage.field, value);
      props.handleStageChange(props.stage.to);
      // navigate(props.stage.to);
    } catch (err) {
      console.error("Failed to update field", err);
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>{props.stage.question}</h1>

      <Selector emojis={props.stage.emojis} onSelect={handleEmojiSelected} />

      <div className={styles.navButtons}>
        <Button text="Back" onClick={() => navigate(-1)} />
        <Button
          text="Let Us Decide!"
          onClick={() => navigate(props.stage.to)}
        />
      </div>
    </div>
  );
};

export { SelectorPage };
