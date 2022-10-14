import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useStateContext } from "../../context/StateProvider";
const Searchbar = ({ setSearchActive }) => {
  const { setSearchQuery } = useStateContext();
  return (
    <div
      id="searchbar"
      className="text-light dark:text-dark w-full flex justify-between items-center h-full bg-light dark:bg-dark"
    >
      <input
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Recherchez une actualité, un événement..."
        className="ml-4 sm:ml-0 w-full outline-none bg-transparent caret-light dark:caret-dark placeholder:opacity-60"
      />

      <button
        onClick={() => {
          setSearchActive(false);
          setSearchQuery("");
        }}
      >
        <CloseIcon className="hover:text-gray-400 duration-300 " />
      </button>
    </div>
  );
};

export default Searchbar;
