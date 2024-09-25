import { useContext, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import dropdown from "../assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    e.target.classList.toggle(styles.open);
    menuRef.current.classList.toggle(styles.navMenuVisible);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="e-com logo" />
        <p>Shopper</p>
      </div>

      <img
        className={styles.navDropdown}
        src={dropdown}
        onClick={dropdown_toggle}
        alt="dropdown image"
      />

      <ul
        ref={menuRef}
        className={`${styles.navMenu} ${styles.navMenuVisible}`}
      >
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="men">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="women">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={styles.navLoginCart}>
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className={styles.navCartCount}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
