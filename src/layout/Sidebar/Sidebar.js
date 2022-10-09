import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";
import SwitchMode from "./SwitchMode";
export default function Sidebar({ open, toggleDrawer }) {
  /* NavLink props : name, link, children */
  const NavLink = ({ ...props }) => {
    return (
      <>
        <Link to={props.link}>
          <ListItem
            className="hover:bg-white dark:hover:bg-gray-700"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <ListItemButton
              disableRipple
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <ListItemText disableTypography>{props.name}</ListItemText>
              {props.children}
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
      </>
    );
  };
  /* NavAction props : name, children */
  const NavAction = ({ ...props }) => {
    return (
      <>
        <ListItem className="hover:bg-white dark:hover:bg-gray-700">
          <ListItemButton
            disableRipple
            sx={{
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            <ListItemText disableTypography>{props.name}</ListItemText>
            {props.children}
          </ListItemButton>
        </ListItem>
      </>
    );
  };
  /* A AJOUTER : CLOSE WHEN CLIK OUTSIDE */
  return (
    /* Panneau Sidebar */
    <>
      {open && (
        <div
          className="fixed left-0 top-0 right-0 bottom-0 bg-black opacity-70 z-[1101]"
          onClick={toggleDrawer(false)}
        />
      )}
      <Drawer
        variant="persistent"
        transitionDuration={500}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          className:
            "bg-light dark:bg-dark w-[300px] text-light dark:text-dark font-semibold",
        }}
      >
        <List disablePadding>
          <NavAction name="ENGLISH">
            <ListItemIcon
              className="items-center text-light dark:text-dark"
              onClick={toggleDrawer(false)}
            >
              <ListItemText disableTypography className="mr-3">
                Close
              </ListItemText>
              <CloseIcon />
            </ListItemIcon>
          </NavAction>
          <Divider />
        </List>
        <List disablePadding>
          <NavLink name="HOME" link="/" />
          <NavLink name="ABOUT" link="about" />
          <NavLink name="BLOG" link="blog" />
        </List>
        <List className="text-gray-400" disablePadding>
          <NavAction name="DARKMODE">{<SwitchMode />}</NavAction>
        </List>
      </Drawer>
      <div
        className={`z-20 top-0 left-0 opacity-10 ${open ? "flex" : "hidden"}`}
        onClick={toggleDrawer(false)}
      />
    </>
  );
}
