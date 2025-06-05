import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-255px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
