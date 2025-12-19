import { useNavigate } from "react-router-dom";
import food from "./assets/food2.png"; // Relative path to the image file
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img src={food} className={styles.image} alt="food image " />
      <div className={styles.content}>
        <span className={styles.title}>Mood2Food!</span>
        <span className={styles.paragraph}>
          Discover the best restaurants, according to mood, location, price and
          more!
        </span>
        <button className={styles.button} onClick={() => navigate('/mood')}>Get Started</button>
      </div>
      <div className={styles.emojiContainer}>
        <span className={styles.set1}>
          <span className={`${styles.emoji} ${styles.e1} `}>🥰</span>
          <span className={styles.emoji}>😭</span>
        </span>
        <span className={styles.set2}>
          <span className={`${styles.emoji} ${styles.e2}`}>🙂</span>
          <span className={styles.emoji}>🤬</span>
        </span>
      </div>
      <div className={styles.colourColumn}></div>
    </div>
  );
};

export { LandingPage };
