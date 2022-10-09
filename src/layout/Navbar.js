import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar({ toggleDrawer }) {
  return (
    <>
      <AppBar position="sticky" className="bg-light dark:bg-dark">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            className="z-10 hover:bg-transparent"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon className="text-light dark:text-dark" />
          </IconButton>
          <Box className="absolute w-full left-0 flex justify-center">
            <Link to="/">
              <Button className="text-light dark:text-dark text-lg hover:bg-transparent">
                TravelCompany
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
