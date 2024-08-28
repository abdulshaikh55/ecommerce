import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="ecom logo" />
        <p>Shopper</p>
      </div>
      <ul className={styles.navMenu}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          Men {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          Women {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={styles.navLoginCart}>
        <button>Login</button>
        <img src={cart_icon} alt="cart" />
        <div className={styles.navCartCount}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
