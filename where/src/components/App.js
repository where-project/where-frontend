import React, { Component } from "react";
import "./App.css";
import "../css/style.css";
import LoginRegister from "../pages/Login-Register/LoginRegister";
import Error from "../pages/Error/Error";
import Listing from "../pages/Listing/Listing";
import Contact from "../pages/Contact/Contact";
import MainPage from "../pages/MainPage/MainPage";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/Dashboard/content.css";
import PlaceDetail from "../pages/Place/PlaceDetail/PlaceDetail";
const App = () => {
  const [isLogout, setIsLogout] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:placeId" element={<PlaceDetail />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/listing/search/:categoryId" element={<Listing />} />
        <Route path="/listing/search/:cityId" element={<Listing />} />
        <Route
          path="/listing/search/:cityId/:categoryId"
          element={<Listing />}
        />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </>
  );
};

export default App;
