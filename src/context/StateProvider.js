import React from "react";
import { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [allTags, setAllTags] = useState("");

  return (
    <StateContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchActive,
        setSearchActive,
        allTags,
        setAllTags,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
