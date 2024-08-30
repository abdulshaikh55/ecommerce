import styles from "./Hero.module.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h2>New Arrivals</h2>
        <div>
          <div className={styles.heroHandIcon}>
            <p>new</p>
            <img src={hand_icon} alt="Hand Icon" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles.latestButton}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>

      <div className={styles.heroRight}>
        <img src={hero_image} alt="Main image" />
      </div>
    </div>
  );
};
