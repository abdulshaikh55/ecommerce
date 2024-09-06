import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} onClick={window.scrollTo(0, 0)} alt="" />
      </Link>

      <p>{props.name}</p>
      <div className={styles.itemPrices}>
        <div className={styles.itemPriceNew}>${props.new_price}</div>
        <div className={styles.itemPriceOld}>${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
