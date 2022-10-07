import React, { useState } from "react";
import Switch from "@mui/material/Switch";

import { useThemeContext } from "../../context/ThemeProvider";

export default function SwitchMode() {
  const { theme, setTheme } = useThemeContext();
  return (
    <Switch
      checked={theme === "dark"}
      onChange={() => (theme == `light` ? setTheme(`dark`) : setTheme(`light`))}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
