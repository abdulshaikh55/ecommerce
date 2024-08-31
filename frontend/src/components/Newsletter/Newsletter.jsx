import styles from "./Newsletter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" name="email" id="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
