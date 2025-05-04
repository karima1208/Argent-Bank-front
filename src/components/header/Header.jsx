import React from "react";
import Logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);
  const onLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {token ? (
            <div className="headerButtons">
              <Link className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                {user.firstName}
              </Link>
              <div className="main-nav-item"  onClick={onLogout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </div>
            </div>
          ) : (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;