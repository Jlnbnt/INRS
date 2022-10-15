import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useStateContext } from "../../context/StateProvider";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ setSearchActive }) => {
  const navigate = useNavigate();
  const { setSearchQuery, searchQuery } = useStateContext();
  const testFunc = (e) => {
    e.preventDefault();
    console.log("sumbitted");
    navigate("/search");
    setSearchQuery(searchQuery);
  };

  return (
    <form
      onSubmit={(e) => testFunc(e)}
      className="text-light dark:text-dark w-full flex justify-between items-center h-full bg-light dark:bg-dark"
    >
      <input
        autoFocus
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Recherchez une actualité, un événement..."
        className="ml-4 sm:ml-0 w-full outline-none bg-transparent caret-light dark:caret-dark placeholder:opacity-60"
      />
      <button type="submit" className="hidden">
        Sumbit search
      </button>
      <button
        onClick={() => {
          setSearchActive(false);
          setSearchQuery("");
        }}
      >
        <CloseIcon className="hover:text-gray-400 duration-300 " />
      </button>
    </form>
  );
};

export default Searchbar;
