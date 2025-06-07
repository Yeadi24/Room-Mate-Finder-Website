import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ThemeProvider } from "../Contexts/ThemeContext";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <ThemeProvider>
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-255px)]">
          <Outlet></Outlet>
        </div>
      </ThemeProvider>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
