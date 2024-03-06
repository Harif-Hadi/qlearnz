import Image from "next/image";

import classes from "./Auth.module.css";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className={classes.auth_container}>
        <div className={classes.logo}>
          <Image
            src="/images/site/logo.svg"
            alt="qlearnz logo"
            width={40}
            height={40}
          />
        </div>
        <h1 className={classes.auth_title}>{isLogin ? "Login" : "Sign Up"}</h1>
        <form>
          {!isLogin && (
            <div className={classes.control}>
              <label htmlFor="username">Username</label>
              <input placeholder="Your Username" type="text" id="username" />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input placeholder="Your Email Address" type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input placeholder="Your Password" type="password" id="password" />
            <p className="text-center">Forgot Password?</p>
          </div>
          <div className={classes.form_button}>
            <button> {isLogin ? "Login" : "Sign Up"} </button>
            {!isLogin && <button>Sign In With Google</button>}
          </div>
          <p
            className={classes.login_instead}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign up" : "Login instead"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
