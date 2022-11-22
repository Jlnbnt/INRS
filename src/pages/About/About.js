import React from "react";

import { useQuery } from "@apollo/client";
import { GET_TEAM } from "../../graphql/Queries";

import TeamCard from "../../components/Team/TeamCard";

import { CircularProgress } from "@mui/material";

import AboutFooter from "../../components/About/AboutFooter";
import AboutNewsletter from "../../components/About/AboutNewsletter";
import AboutHeader from "../../components/About/AboutHeader";
import AboutServices from "../../components/About/AboutServices";

const About = () => {
  const { loading, error, data } = useQuery(GET_TEAM);

  if (loading)
    return (
      <div className="bg-light dark:bg-dark h-screen w-full flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <div className="p-0 m-0 flex justify-center items-center flex-col bg-gray-100 dark:bg-black/60">
      <AboutHeader />
      <div className="relative top-[-50px] w-[90%] md:w-[97%] ">
        <AboutServices />
        <div className="relative text-light dark:text-dark bg-transparent p-8 ">
          <h1>L'ÉQUIPE</h1>
          <h2 className="text-lg text-gray-400 dark:text-gray-403">
            "Se réunir est un début, rester ensemble est un progrès, travailler
            ensemble est la réussite."
          </h2>
          <div className="flex w-full flex-wrap align-center justify-center">
            {data && data?.equipes?.nodes?.length ? (
              <>
                {data?.equipes?.nodes?.map((person) => (
                  <TeamCard key={person.id} props={person} />
                ))}
              </>
            ) : (
              <h1>Rien à afficher</h1>
            )}
          </div>
        </div>
        {
          <div
            className="p-8 justify-around items-center bg-gray-200 dark:bg-dark flex  text-light dark:text-dark flex-wrap
         rounded-b-xl w-full"
          >
            <AboutFooter />
            <AboutNewsletter />
          </div>
        }
      </div>
    </div>
  );
};

export default About;
