import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import ListItem from "@mui/material/ListItem";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar({ toggleDrawer }) {
  const SocialLink = (props) => {
    return (
      <ListItem
        disablePadding
        className="text-light dark:text-dark hover:text-gray-400 dark:hover:text-gray-400 hover:bg-transparent"
      >
        <Link to={props.link}>{props.icon}</Link>
      </ListItem>
    );
  };
  return (
    <>
      <AppBar position="sticky" className="bg-light dark:bg-dark border-none">
        <Toolbar>
          <Box className="absolute w-full left-0 flex justify-between items-center px-6">
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
            <Link to="/">
              <Button className="text-light font-semibold dark:text-dark text-lg hover:bg-transparent">
                TravelCompany
              </Button>
            </Link>
            <div className="hidden sm:flex gap-3">
              <SocialLink
                icon={<InstagramIcon fontSize="small" />}
                link="/about"
              />
              <SocialLink
                icon={<TwitterIcon fontSize="small" />}
                link="/about"
              />
              <SocialLink
                icon={<FacebookIcon fontSize="small" />}
                link="/about"
              />
            </div>
            <div className="flex sm:hidden">
              <SocialLink icon={<SearchIcon />} link="/about" />
              {/* To impletement */}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
