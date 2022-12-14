import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import QuoteCards from "../../components/Quotes/QuoteCards";
import { Link } from "react-router-dom";
import AboutNewsletter from "../../components/About/AboutNewsletter";

import HomepageFooter from "../../components/Homepage/HomepageFooter";

import HomepageExpertises from "../../components/Homepage/HomepageExpertises";
import HomepageOthers from "../../components/Homepage/HomepageOthers";
import { GET_VIDEO } from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";

import SEO from "../../seo/SEO";

const Homepage = () => {
  const { setSearchQuery, setSearchActive, handleContactOpen } =
    useStateContext();

  useEffect(() => {
    setSearchQuery("");
    setSearchActive(false);
    // eslint-disable-next-line
  }, []);

  const { loading, error, data } = useQuery(GET_VIDEO);

  if (loading)
    return (
      <div className="h-full w-full min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <SEO
        title="Accueil"
        description="INRS - It is not Rocket Science est un site d'information et de vulgarisation scientifique. Retrouvez les actualités, les événements, les offres d'emplois du réseau INRS."
      />
      <div className="text-white dark:bg-black/60 bg-gray-100  flex flex-col justify-center items-center ">
        <div className="h-screen mb-16 ">
          <video
            loop
            autoPlay
            muted
            className="sm:w-full absolute z-10 w-full h-full object-cover top-0 left-0 right-0 ml-auto mr-auto max-w-[2000px]"
            src={
              data?.layouts?.edges[0]?.node?.miseEnPage?.accueil?.video
                ?.mediaItemUrl
            }
          />
          <div className="bg-dark h-full w-full absolute left-0 top-0 z-20  opacity-80" />

          <div className="bg-red-500/0 w-full h-[calc(100%-56px)] sm:h-[calc(100%-64px)] absolute top-0 left-0 z-20 mt-[56px] sm:mt-[64px] p-4 flex items-center">
            <div className="w-full h-3/4 bg-green-500/0 p-8  text-dark font-semibold text-7xl flex flex-col justify-between items-center">
              <div className=" text-center flex flex-col items-center gap-4">
                <h1 className="text-8xl sm:text-9xl font-black">INRS</h1>
                <h2 className="text-5xl sm:text-5xl italic">
                  "It is Not Rocket Science..."
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="about"
                  className="text-center min-w-[117px] border-[0.5px] border-dark p-2 rounded-sm text-xl hover:bg-light/30 duration-300"
                >
                  Découvrir
                </Link>
                <button
                  onClick={handleContactOpen}
                  className="min-w-[117px] border-[0.5px] border-dark p-2 rounded-sm text-xl hover:bg-light/30 duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-[-65px] w-[90%] md:w-[97%]">
          <HomepageExpertises />
          <br />
          <HomepageOthers />
          <br />
          <div
            className="p-8 justify-around items-center bg-gray-200 dark:bg-dark flex   text-light dark:text-dark flex-wrap
          w-full"
          >
            <HomepageFooter />
          </div>
          <QuoteCards />
          <AboutNewsletter />
        </div>
      </div>
    </>
  );
};

export default Homepage;
