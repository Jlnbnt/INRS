import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";
import { useThemeContext } from "../../context/ThemeProvider";

import { useLocation } from "react-router-dom";

import SwitchMode from "./SwitchMode";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as INRSLOGO } from "../../components/Assets/INRSLOGO.svg";

import {
  NavLink,
  NavAction,
} from "../../components/Links/Sidebar/SidebarComponents";

export default function Sidebar() {
  const { setSearchActive, setSearchQuery, toggleDrawer, open } =
    useStateContext();
  const { themeChoice } = useThemeContext();
  const path = useLocation().pathname;

  useEffect(() => {
    toggleDrawer(false);
    // eslint-disable-next-line
  }, [path]);
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
            "bg-light dark:bg-dark w-[300px] text-light dark:text-dark font-semibold justify-between",
        }}
      >
        <div>
          <List className="p-0 text-xs">
            <NavAction
              name={<INRSLOGO className="w-[80px] fill-light dark:fill-dark" />}
              link="/"
              customFunc={toggleDrawer(false)}
              reset={() => setSearchActive(false)}
              clear={() => setSearchQuery("")}
            >
              <button
                onClick={toggleDrawer(false)}
                className="text-light dark:text-dark flex items-center justify-end gap-1 p-0 m-0"
              >
                <span className="customHover dark:before:bg-light mt-0.5">
                  CLOSE
                </span>
                <CloseIcon fontSize="small" />
              </button>
            </NavAction>
            <Divider />
          </List>
          <List className="p-0">
            <NavLink name="HOME" link="/" />
            <NavLink name="ACTUALITES" link="actualites" />
            <NavLink name="EVENEMENTS" link="evenements" />
            <NavLink name="BLOG" link="blogs" />
            <NavLink name="JOBS" link="jobs" />
            <NavLink name="ABOUT" link="about" />
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
        </div>
        <div className="m-5 font-light text-xs text-gray-500 dark:text-gray-400">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://alpha.inrscience.com/wp-login.php?action=register"
            className="customHover dark:before:bg-light"
          >
            Register
          </a>{" "}
          /{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://alpha.inrscience.com/wp-login.php"
            className="customHover dark:before:bg-light"
          >
            Login
          </a>
        </div>
      </Drawer>
    </>
  );
}
