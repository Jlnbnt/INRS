import React from "react";

import { useQuery } from "@apollo/client";

import { GET_ABOUT_HEADER } from "../../graphql/Queries";
import { CircularProgress } from "@mui/material";

import { useThemeContext } from "../../context/ThemeProvider";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AboutIcon } from "../Links/About/AboutComponents";
const AboutHeader = () => {
  const { themeChoice } = useThemeContext();
  const { loading, error, data } = useQuery(GET_ABOUT_HEADER);

  if (loading)
    return (
      <div className="bg-light dark:bg-dark h-screen w-full flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );
  if (error) return `Error! ${error.message}`;

  const acf = data?.layouts?.nodes[0]?.miseEnPage?.apropos?.header;

  return (
    <div
      className={`w-full h-[70vh] bg-cover bg-center bg-white`}
      style={{
        backgroundImage: `url(${
          themeChoice === "dark"
            ? acf?.backgroundDark.sourceUrl
            : acf?.backgroundLight.sourceUrl
        })`,
      }}
    >
      <div className="w-full h-full bg-white/[0.09] flex items-center justify-center text-light dark:text-dark flex-col gap-6 text-center">
        <h1 className="font-semibold text-5xl lg:text-7xl">
          {acf.baselineGras}
        </h1>
        <h2 className="text-lg dark:text-gray-200 max-w-[80%] md:max-w-[50%] text-center">
          {acf.baselineLight}
        </h2>
        <div>
          <h2 className="font-semibold mb-2">{acf.titreLiens}</h2>
          <ul className="flex gap-4">
            <AboutIcon link={acf.liens.github} icon={<FacebookIcon />} />
            <AboutIcon link={acf.liens.instagram} icon={<InstagramIcon />} />
            <AboutIcon link={acf.liens.twitter} icon={<TwitterIcon />} />
            <AboutIcon link={acf.liens.facebook} icon={<LinkedInIcon />} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
