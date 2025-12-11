import food from "./assets/food.jpg"; // Relative path to the image file
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <img src={food} className={styles.image} alt="food image " />
      <div className={styles.content}>
        <span className={styles.title}>Mood2Food!</span>
        <p>
          Discover the best restaurants, according to mood, location, price and
          more!
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.set1}>
        <span className={styles.emoji}>🥰</span>
        <span className={styles.emoji}>😭</span>
      </div>
      <div className={styles.set2}>
        <span className={styles.emoji}>🤬</span>
        <span className={styles.emoji}>🙂</span>
      </div>
    </div>
  );
};

export default LandingPage;
