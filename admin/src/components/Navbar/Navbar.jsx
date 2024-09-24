import styles from "./Navbar.module.css";
import nav_logo from "../../assets/nav-logo.svg";
import nav_profile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={nav_logo} alt="nav logo" className={styles.navLogo} />
      <img src={nav_profile} alt="nav profile" className={styles.navProfile} />
    </div>
  );
};

export default Navbar;
