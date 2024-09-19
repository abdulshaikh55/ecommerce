import { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className={styles.cartItems}>
      <div className={styles.cartItemsFormatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div
                className={`${styles.cartItemsFormat} ${styles.cartItemsFormatMain}`}
              >
                <img src={e.image} className={styles.cartIconProductIcon} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.cartItemsQuantity}>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className={styles.removeIcon}
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.cartItemsDown}>
        <div className={styles.cartItemsTotal}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.cartItemsTotalItem}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartItemsTotalItem}>
              <p>Shipping charges</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.cartItemsTotalItem}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>

        <div className={styles.cartItemsPromoCode}>
          <p>Enter your Promo code here</p>
          <div className={styles.cartItemsPromoBox}>
            <input
              type="text"
              name="promo-code"
              id="promo-code"
              placeholder="Promo Code"
            />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
