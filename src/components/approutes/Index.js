import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../login/Login";
import Register from "../register/Register";
import Orders from "../pages/Orders";
import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers";
// import AppWrapper from '../../AppWrapper';

const AppRoutes = () => {
  const location = useLocation();
  const isLogin = localStorage.getItem("isLoginSucess");

  return (
    <>
      <Routes>
        {/* <Route
          element={
            isLogin ? (
              <Navigate to={"/dashboard"} />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        /> */}
        <Route path="/" element={<Dashboard />}></Route>
        {/* <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route> */}
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
