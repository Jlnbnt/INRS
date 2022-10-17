import React from "react";

import { useStateContext } from "../../context/StateProvider";

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

export default function Sidebar({ open, toggleDrawer }) {
  const { setSearchActive, setSearchQuery } = useStateContext();

  const NavLink = (props) => {
    return (
      <>
        <Link to={props.link}>
          <ListItem
            className="hover:bg-white dark:hover:bg-gray-700 duration-300"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <ListItemButton className="hover:bg-transparent " disableRipple>
              <ListItemText disableTypography>{props.name}</ListItemText>
              {props.children}
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
      </>
    );
  };

  const NavAction = (props) => {
    return (
      <>
        <ListItem className="p-5 hover:bg-white dark:hover:bg-gray-700 flex justify-between duration-300">
          <div>
            <Link to={props.link} onClick={props.clear}>
              <div onClick={props.reset}>
                <ListItemText onClick={props.customFunc} disableTypography>
                  {props.name}
                </ListItemText>
              </div>
            </Link>
          </div>
          <div>{props.children}</div>
        </ListItem>
      </>
    );
  };

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
        <List disablePadding className="text-xs">
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
        <List disablePadding>
          <NavLink name="HOME" link="/" />
          <NavLink name="ABOUT" link="about" />
          <NavLink name="BLOG" link="blog" />
        </List>
        <List className="text-gray-400" disablePadding>
          <NavAction name="DARKMODE">
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
