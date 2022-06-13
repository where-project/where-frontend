import React, { Component, useEffect, useState } from "react";
import "./App.css";
import "../css/style.css";
import LoginRegister from "../pages/Login-Register/LoginRegister";
import Error from "../pages/Error/Error";
import Listing from "../pages/Listing/Listing";
import Contact from "../pages/Contact/Contact";
import MainPage from "../pages/MainPage/MainPage";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import "../css/Dashboard/content.css";
import PlaceDetail from "../pages/Place/PlaceDetail/PlaceDetail";
import jwt from "jwt-decode";
import LocalStorageService from "../services/LocalStorageService";

const App = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    let localStorageService = new LocalStorageService();
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLogin(true);
      var decoded = jwt(localStorageService.getLocalStorage("accessToken"));
      setUser({ username: decoded.sub, role: decoded.roles[0] });
      console.log(user);
    }
  }, [isLogin]);

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:placeId" element={<PlaceDetail />} />
        <Route path="/login" element={<LoginRegister setIsLogin={setIsLogin} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/listing/search/category/:categoryId"
          element={<Listing />}
        />
        <Route path="/listing/search/city/:cityId" element={<Listing />} />
        <Route
          path="/listing/search/:cityId/:categoryId"
          element={<Listing />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
