import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import Home from "../screen/Home";
import About from "../screen/About";
import ContactUs from "../screen/ContactUs";
import Login from "../screen/Login";
import Signup from "../screen/Register";

export const App = () => {
  return (
    <BrowserRouter>
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
