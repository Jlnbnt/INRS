import React from "react";

import { useQuery } from "@apollo/client";

import { GET_HOMEPAGE_FOOTER } from "../../graphql/Queries";
import { CircularProgress } from "@mui/material";

import { Partner, Project } from "../Links/About/AboutComponents";
const HomepageFooter = () => {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_FOOTER);

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  console.log(data);
  const acf = data?.layouts?.nodes[0]?.miseEnPage?.accueil?.footer;

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {data &&
          Object.values(acf?.partenaires)
            .slice(1)
            .map((icon) => (
              <Partner
                key={icon.sourceUrl}
                link={icon.sourceUrl}
                alt={icon.altText}
              />
            ))}
      </div>
      <div className="px-16 p-16 grid grid-cols-1 md:grid-cols-3 w-full gap-16 lg:gap-0">
        {data &&
          Object.values(acf?.projets)
            .slice(1)
            .map((projet) => (
              <Project
                key={projet.__typename}
                nombre={projet.nombre}
                texte={projet.texte}
                titre={projet.titre}
              />
            ))}
      </div>
    </div>
  );
};

export default HomepageFooter;
