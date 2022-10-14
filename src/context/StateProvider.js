import React from "react";
import { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StateContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
