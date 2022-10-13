import React from "react";

import CloseIcon from "@mui/icons-material/Close";

const Searchbar = ({ setSearchActive }) => {
  return (
    <div
      id="searchbar"
      className="text-light dark:text-dark w-full flex justify-between items-center absolute h-full bg-light dark:bg-dark left-0 p-6"
    >
      <input
        type="text"
        placeholder="Recherchez une actualité, un événement..."
        className=" w-full outline-none bg-transparent caret-light dark:caret-dark placeholder:opacity-60"
      />

      <button onClick={() => setSearchActive(false)}>
        <CloseIcon className="hover:text-gray-400 duration-300" />
      </button>
    </div>
  );
};

export default Searchbar;
