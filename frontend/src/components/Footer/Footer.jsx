import styles from "./Footer.module.css";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from '../assets/instagram_icon.png';
import pinterest_icon from '../assets/pinterest_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={footer_logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className={styles.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className={styles.footerSocialIcon}>
        <div className={styles.footerIconsContainer}>
            <img src={instagram_icon} alt="instagram icon" />
        </div>
        <div className={styles.footerIconsContainer}>
            <img src={pinterest_icon} alt="pinterest icon" />
        </div>
        <div className={styles.footerIconsContainer}>
            <img src={whatsapp_icon} alt="whatsapp icon" />
        </div>
        </div>
        <div className={styles.footerCopyright}>
            <hr />
            <p>Copyright @ 2023 - All rights reserved</p>
        </div>

    </div>
  );
};

export default Footer;
