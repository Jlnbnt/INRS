import * as React from "react";

import { useThemeContext } from "../../context/ThemeProvider";

import { useStateContext } from "../../context/StateProvider";

import Switch from "@mui/material/Switch";

import { styled } from "@mui/material/styles";

export default function CustomizedSwitches() {
  const { themeChoice, setThemeChoice } = useThemeContext();
  const { toggleDrawer } = useStateContext();
  const IOSSwitch = styled((props) => (
    <Switch
      {...props}
      onClick={toggleDrawer(false)}
      checked={themeChoice === "dark"}
      onChange={() =>
        themeChoice == `light`
          ? setThemeChoice(`dark`)
          : setThemeChoice(`light`)
      }
    />
  ))(({}) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#49C5B6",
          opacity: 1,
          border: 0,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#36454F",
      opacity: 1,
    },
  }));

  return <IOSSwitch sx={{ m: 1 }} />;
}
