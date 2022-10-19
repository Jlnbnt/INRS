import React from "react";

import { useStateContext } from "../../context/StateProvider";
import { useThemeContext } from "../../context/ThemeProvider";

import { Link } from "react-router-dom";

import SwitchMode from "./SwitchMode";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import CloseIcon from "@mui/icons-material/Close";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

import {
  NavLink,
  NavAction,
} from "../../components/Links/Sidebar/SidebarComponents";

export default function Sidebar() {
  const { setSearchActive, setSearchQuery, toggleDrawer, open } =
    useStateContext();
  const { themeChoice } = useThemeContext();

  return (
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
        <List className="p-0 text-xs">
          <NavAction
            name={<AirplaneTicketIcon />}
            link="/"
            customFunc={toggleDrawer(false)}
            reset={() => setSearchActive(false)}
            clear={() => setSearchQuery("")}
          >
            <button
              onClick={toggleDrawer(false)}
              className="text-light dark:text-dark flex items-center justify-end gap-1 p-0 m-0"
            >
              <span className="customHover dark:before:bg-light">CLOSE</span>
              <CloseIcon fontSize="small" />
            </button>
          </NavAction>
          <Divider />
        </List>
        <List className="p-0">
          <NavLink name="HOME" link="/" />
          <NavLink name="ABOUT" link="about" />
          <NavLink name="ACTUALITES" link="actualites" />
          <NavLink name="EVENEMENTS" link="evenements" />
        </List>
        <List className="text-gray-400 p-0">
          <NavAction name={themeChoice === "dark" ? "LIGHTMODE" : "DARKMODE"}>
            {
              <button onClick={toggleDrawer(false)}>
                <SwitchMode />
              </button>
            }
          </NavAction>
        </List>
      </Drawer>
    </>
  );
}
