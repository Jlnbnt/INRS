import React from "react";

import { useStateContext } from "../context/StateProvider";

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  const { open, toggleDrawer } = useStateContext();

  return (
    <>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Navbar toggleDrawer={toggleDrawer} />
      <div className="h-full w-full bg-light dark:bg-dark p-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
