import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="h-full w-full bg-light dark:bg-dark">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
