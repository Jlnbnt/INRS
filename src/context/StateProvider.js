import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [awayFromTop, setAwayfromTop] = useState();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setAwayfromTop(false);
    } else {
      setAwayfromTop(true);
    }
  };
  return (
    <StateContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchActive,
        setSearchActive,
        open,
        setOpen,
        toggleDrawer,
        listenToScroll,
        awayFromTop,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
