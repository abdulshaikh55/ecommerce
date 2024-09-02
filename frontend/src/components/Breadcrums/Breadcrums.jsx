import styles from "./Breadcrums.module.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className={styles.breadcrums}>
      HOME <img src={arrow_icon} alt="arrow icon" /> SHOP{" "}
      <img src={arrow_icon} alt="arrow icon" /> {product.category}{" "}
      <img src={arrow_icon} alt="arrow icon" /> {product.name}
    </div>
  );
};

export default Breadcrums;
