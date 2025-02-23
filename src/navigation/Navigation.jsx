import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Login from "../pages/login/Login";
import User from "../pages/user/User";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/userActions";

const Navigation = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if(tokenFromStorage) {
      getProfile(tokenFromStorage, dispatch)
    }
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={token ? <Navigate replace to="/user" /> : <Login />}
        />
        <Route
          path="/user"
          element={!token ? <Navigate replace to="/login" /> : <User />}
        />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;