import { useEffect, useState } from "react";
import styles from "./ListProducts.module.css";
import cross_icon from "../../assets/cross_icon.png";

const ListProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove product");
      }

      await fetchInfo();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className={styles.listProduct}>
      <h1>All Products</h1>
      <div className={styles.formatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className={styles.allProducts}>
        <hr />
        {allProducts.map((product, index) => (
          <div key={index}>
            <div className={`${styles.format} ${styles.formatMain}`}>
              <img
                className={styles.productIcon}
                src={product.image}
                alt={product.name}
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                src={cross_icon}
                alt="Cross Icon"
                className={styles.removeIcon}
                onClick={() => removeProduct(product.id)}
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
