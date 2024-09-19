import { useContext } from "react";
import styles from "./ProductDisplay.module.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className={styles.productDisplay}>
      <div className={styles.productDisplayLeft}>
        <div className={styles.productDisplayImgList}>
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className={styles.productDisplayImg}>
          <img
            className={styles.productDisplayMainImg}
            src={product.image}
            alt={`${product.name}`}
          />
        </div>
      </div>
      <div className={styles.productDisplayRight}>
        <h1>{product.name}</h1>
        <div className={styles.productDisplayRightStars}>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className={styles.productDisplayRightPrices}>
          <div className={styles.productDisplayRightPriceOld}>
            ${product.old_price}
          </div>
          <div className={styles.productDisplayRightPriceNew}>
            ${product.new_price}
          </div>
        </div>

        <div className={styles.productDisplayRightDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          mollitia sequi dolorem? Libero ipsam magnam fuga, odio perspiciatis
          perferendis, nulla nam temporibus ut dicta quos fugit molestias quis
          nisi, debitis amet tenetur! Beatae, ipsa nemo.
        </div>

        <div className={styles.productDisplayRightSize}>
          <h1>Select Size</h1>
          <div className={styles.productDisplayRightSizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className={styles.productDisplayRightCategory}>
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className={styles.productDisplayRightCategory}>
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
