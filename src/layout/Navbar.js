import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CookieIcon from "@mui/icons-material/Cookie";
import Sidebar from "./Sidebar/Sidebar";

export default function Navbar() {
  /* Drawer open / close function */
  const [open, setopen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setopen(open);
    console.log(open);
  };
  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, zIndex: "1" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              position: "absolute",
              height: "100%",
              width: "100% !important",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              left: "0",
              top: "0",
            }}
          >
            <Button onClick={() => console.log("lol")}>
              <span style={{ color: "#ffffff", fontSize: "20px" }}>
                TravelCompany
              </span>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
