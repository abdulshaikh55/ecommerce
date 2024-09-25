import styles from "./NewCollections.module.css";
import Item from "../Item/Item";
import { useEffect, useState } from "react";

const NevCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <div className={styles.newCollections}>
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className={styles.collections}>
        {new_collection.map((item, i) => {
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

export default NevCollections;
