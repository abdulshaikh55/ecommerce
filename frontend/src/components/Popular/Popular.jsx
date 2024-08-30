import styles from "./Popular.module.css";
import data_product from "../assets/data";
import Item from "../Item/Item";
const Popular = () => {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className={styles.popularItem}>
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
