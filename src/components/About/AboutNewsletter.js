import React, { useState } from "react";

import { useQuery } from "@apollo/client";

import { GET_ABOUT_NEWSLETTER } from "../../graphql/Queries";
import { CircularProgress, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";

const AboutNewsletter = () => {
  const { loading, error, data } = useQuery(GET_ABOUT_NEWSLETTER);

  const [snack, setSnack] = useState(false);
  const [email, setEmail] = useState("");

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const acf = data?.layouts?.nodes[0]?.miseEnPage?.apropos?.newsletter;

  const handleNewsletter = (e) => {
    e.preventDefault();
    setSnack(true);
    setTimeout(() => {
      setEmail("");
      window.scrollTo({
        top: "0",
        behavior: "smooth",
      });
    }, 3000);
  };

  return (
    <div className="bg-alabaster dark:bg-pewter/30 text-light dark:text-dark rounded-lg w-full">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snack}
        onClose={() => setSnack(false)}
        message={`Merci ! Vous recevrez notre newsletter par mail : ${email} `}
        autoHideDuration={3000}
        ContentProps={{
          sx: {
            backgroundColor: "rgb(134 239 172)",
            color: "rgb(75 85 99)",
            fontWeight: "500",
            textAlign: "center",
          },
        }}
      />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 w-full">
        <div className="mx-auto  sm:text-center lg:flex justify-around items-center w-full gap-6">
          <div className="text-left sm:flex sm:flex-col sm:items-center lg:block">
            <h2 className="mx-auto lg:m-0 mb-4 max-w-2xl text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              {acf?.titre}
            </h2>
            <p className="sm:text-center lg:text-left mx-auto lg:m-0 mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-lg dark:text-gray-400">
              {acf?.texte}
            </p>
          </div>
          <form action="#" onSubmit={(e) => handleNewsletter(e)}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-lg sm:flex sm:space-y-0 justify-center">
              <div className="relative max-w-[500px] w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={acf?.input?.placeholder}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 dark:hover:bg-gray-500 w-full text-sm font-medium text-center text-light dark:text-dark rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800  dark:bg-primary-600 dark:hover:bg-primary-700 hover:bg-gray-100 duration-700"
                >
                  {acf?.input?.bouton}
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              <Link
                to="/cgu"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                {acf?.input?.texte}
              </Link>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutNewsletter;
