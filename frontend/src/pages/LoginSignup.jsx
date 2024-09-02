import styles from "./styles/LoginSignup.module.css";

export const LoginSignup = () => {
  return (
    <div className={styles.loginSignup}>
      <div className={styles.loginSignupContainer}>
        <h1>Sign Up</h1>
        <div className={styles.loginSignupFields}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button>Continue</button>
        <p className={styles.loginSignupLogin}>
          Already have an account? <span>Login</span>
        </p>
        <div className={styles.loginSignupAgree}>
          <input type="checkbox" name="agree" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
