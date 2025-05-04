import React, { useState } from "react";
import "./styles.scss";
import { loginUser } from "../../redux/userActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { userLoading, errorMessage } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginUser = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    loginUser(body, dispatch);
  };
  return (
    <main className="main bg-dark login-container">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onLoginUser}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          <button
            className={
              userLoading ? "sign-in-button-disable" : "sign-in-button"
            }
            type="submit"
            disabled={userLoading}
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;