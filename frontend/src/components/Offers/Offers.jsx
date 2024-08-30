import styles from "./Offers.module.css";
import exclusive_image from "./../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offersLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Out</button>
      </div>
      <div className={styles.offersRight}>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
