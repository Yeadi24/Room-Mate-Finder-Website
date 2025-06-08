import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className=" mx-auto min-h-[calc(100vh-255px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
