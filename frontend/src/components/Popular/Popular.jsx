import styles from "./Popular.module.css";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className={styles.popularItem}>
        {popularProducts.map((item, i) => {
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
