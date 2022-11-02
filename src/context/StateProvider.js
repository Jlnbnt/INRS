import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [open, setOpen] = useState(false);

  /* Sidebar Opener */
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
    if (open === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  /* Navbar logo transform */
  const [awayFromTop, setAwayfromTop] = useState(false);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 200) {
      setAwayfromTop(true);
    } else {
      setAwayfromTop(false);
    }
  };

  /* Forms Contact & Job */
  const initialContactState = {
    firstName: "",
    lastName: "",
    message: "",
    phone: "",
    email: "",
  };
  const [contactOpen, setContactOpen] = useState(false);
  const [formState, setFormState] = useState(initialContactState);
  const [jobState, setJobState] = useState(initialContactState);
  const [jobId, setJobId] = useState("");
  const [clicked, setClicked] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobOpen, setJobOpen] = useState(false);

  const handleContactOpen = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };
  const handleJobOpen = () => {
    setJobOpen(true);
  };

  const handleJobClose = () => {
    setJobOpen(false);
  };

  function handleChange(e) {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  }

  function handleJobChange(e) {
    const value = e.target.value;
    setJobState({
      ...jobState,
      [e.target.name]: value,
    });
  }

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
        contactOpen,
        setContactOpen,
        handleContactClose,
        handleContactOpen,
        formState,
        setFormState,
        handleChange,
        jobId,
        setJobId,
        clicked,
        jobState,
        handleJobChange,
        setJobState,
        setClicked,
        jobTitle,
        setJobTitle,
        handleJobOpen,
        handleJobClose,
        jobOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
