import { useState } from "react";
import styles from "./styles/LoginSignup.module.css";

export const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const signup = async () => {
    console.log("signup function executed", formData);

    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  return (
    <div className={styles.loginSignup}>
      <div className={styles.loginSignupContainer}>
        <h1>{state}</h1>
        <div className={styles.loginSignupFields}>
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Your Full Name"
              value={formData.username}
              onChange={changeHandler}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>

        <button
          onClick={() => {
            state === "Sign Up" ? signup() : login();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className={styles.loginSignupLogin}>
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login
            </span>
          </p>
        ) : (
          <p className={styles.loginSignupLogin}>
            Don't have an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Sign Up
            </span>
          </p>
        )}
        <div className={styles.loginSignupAgree}>
          <input type="checkbox" name="agree" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
