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

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="p-0 m-0 flex justify-center items-center flex-col bg-gray-100 dark:bg-black/60">
      <AboutHeader />
      <div className="relative top-[-50px] w-[90%] md:w-[97%] ">
        <AboutServices />
        <div className="relative text-light dark:text-dark bg-transparent p-8 ">
          <h1>L'EQUIPE</h1>
          <h2 className="text-lg text-gray-400 dark:text-gray-403">
            "There's nothing I really wanted to do in life that I wasn't able to
            get good at. That's my skill."
          </h2>
          <div className="flex w-full flex-wrap align-center justify-center">
            {data && data?.equipes?.nodes?.length ? (
              <>
                {data?.equipes?.nodes?.map((person) => (
                  <TeamCard key={person.id} props={person} />
                ))}
              </>
            ) : (
              <h1>Nothing</h1>
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
