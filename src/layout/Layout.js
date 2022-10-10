import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Navbar toggleDrawer={toggleDrawer} />
      <div className="h-screen w-screen bg-light dark:bg-dark p-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
