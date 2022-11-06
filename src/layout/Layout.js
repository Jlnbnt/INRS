import React, { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar/Sidebar";
import ModalForm from "../components/Form/ModalForm";
import { useStateContext } from "../context/StateProvider";

const Layout = () => {
  const { handleContactClose, handleJobClose, setClicked, setSearchQuery } =
    useStateContext();
  const path = useLocation().pathname;

  useEffect(() => {
    handleContactClose();
    handleJobClose();
    setClicked(false);
    setSearchQuery("");
  }, [path]);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="h-full w-full bg-light dark:bg-dark">
        <Outlet />
      </div>
      <Footer />
      <ModalForm />
    </>
  );
};

export default Layout;
