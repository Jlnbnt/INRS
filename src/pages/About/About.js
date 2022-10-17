import React from "react";

import { useQuery } from "@apollo/client";
import { GET_TEAM } from "../../graphql/Queries";

import TeamCard from "../../components/Team/TeamCard";

import { CircularProgress } from "@mui/material";

const About = () => {
  const { loading, error, data } = useQuery(GET_TEAM);

  if (loading) return <CircularProgress className="m-8" />;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="text-light dark:text-dark">
      <h1>L'EQUIPE</h1>
      <div className="bg-red-500 flex w-full flex-wrap align-center justify-center">
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
  );
};

export default About;
