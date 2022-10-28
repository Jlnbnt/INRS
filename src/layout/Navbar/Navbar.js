import React, { useEffect, useState } from "react";

import { useStateContext } from "../../context/StateProvider";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import Searchbar from "./Searchbar";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";

import { SocialLink } from "../../components/Links/Navbar/NavbarComponents";

import { ReactComponent as INRSLOGO } from "../../components/Assets/INRSLOGO.svg";
import { ReactComponent as INRSISO } from "../../components/Assets/INRSISO.svg";

export default function Navbar() {
  const {
    searchActive,
    setSearchActive,
    toggleDrawer,
    awayFromTop,
    listenToScroll,
    handleContactOpen,
  } = useStateContext();

  const path = useLocation().pathname;

  useEffect(() => {
    setSearchActive(false);
  }, [path]);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  useEffect(() => {
    if (searchActive === true) {
      const executeScroll = () =>
        document.getElementById("anchorCards")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      executeScroll();
    }
  }, [searchActive]);

  return (
    <>
      <AppBar position="sticky" className="bg-light dark:bg-dark border-none">
        <Toolbar>
          <Box className="absolute w-full h-full left-0 flex justify-between items-center px-6">
            <button
              size="large"
              edge="start"
              aria-label="menu"
              className="z-10 hover:bg-transparent gap-3 flex items-center"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon className="text-light dark:text-dark" />

              <span className="hidden sm:block text-sm font-semibold text-light dark:text-dark">
                MENU
              </span>
            </button>

            <div className="hidden sm:flex h-full w-[1px] bg-dark dark:bg-light opacity-30 mx-6" />
            {searchActive ? (
              <Searchbar setSearchActive={setSearchActive} />
            ) : (
              <div className="flex w-full justify-between">
                <div className="invisible sm:visible flex">
                  <button
                    className="text-light dark:text-dark hover:text-gray-400 duration-300 dark:hover:text-gray-400"
                    onClick={() => setSearchActive(true)}
                  >
                    <SearchIcon />
                  </button>
                </div>
                <Link to="/">
                  <Button className="text-light font-semibold dark:text-dark text-lg hover:bg-transparent lg:mr-14 mr-6 sm:mr-0 ">
                    {awayFromTop ? (
                      <INRSLOGO className="fill-light dark:fill-dark mr-3 h-8" />
                    ) : (
                      <INRSISO className="fill-light dark:fill-dark mr-3 h-10 rotate-90" />
                    )}
                  </Button>
                </Link>
                <div className="hidden sm:flex gap-3">
                  <SocialLink
                    icon={<LinkedInIcon fontSize="small" />}
                    link="https://www.linkedin.com"
                  />
                  <SocialLink
                    icon={<FacebookIcon fontSize="small" />}
                    link="https://www.facebook.com"
                  />
                  <SocialLink
                    icon={<EmailIcon fontSize="small" />}
                    customFunc={handleContactOpen}
                  />
                </div>
                <div className="flex sm:hidden">
                  <button
                    className="text-light dark:text-dark hover:text-gray-400 duration-300 dark:hover:text-gray-400"
                    onClick={() => setSearchActive(true)}
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
