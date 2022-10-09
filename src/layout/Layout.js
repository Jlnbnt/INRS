import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
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
      <div className="h-full w-full bg-light dark:bg-dark p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;