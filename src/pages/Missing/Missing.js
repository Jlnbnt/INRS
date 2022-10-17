import React from "react";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

const Missing = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-light dark:bg-dark text-light dark:text-dark">
      <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">404</h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to="/">
            <Button
              className="text-light dark:text-dark border-light dark:border-dark hover:bg-gray-900 hover:bg-opacity-20"
              variant="outlined"
            >
              Go to homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Missing;
