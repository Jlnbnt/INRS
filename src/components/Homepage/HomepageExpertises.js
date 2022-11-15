import React from "react";
import DOMPurify from "dompurify";
import { useQuery } from "@apollo/client";

import { GET_HOMEPAGE_EXPERTISES } from "../../graphql/Queries";
import { CircularProgress } from "@mui/material";

import { ExpertisesIcons } from "../Links/Homepage/HomepageComponents";

const HomepageExpertises = () => {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_EXPERTISES);

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const acf = data?.layouts?.nodes[0]?.miseEnPage?.accueil?.expertises;

  return (
    <div
      className="p-8 justify-around items-center bg-gray-200 dark:bg-dark flex gap-16 flex-wrap  text-light dark:text-dark
         rounded-t-xl w-full"
    >
      <div className="text-start flex-1 w-full p-2 flex-col h-full gap-8 flex justify-between items-start ">
        <span className="self-center font-semibold text-3xl sm:text-5xl pb-4">
          {acf.carte.sousTitre}
        </span>
        <div className="flex flex-col gap-4 sm:max-w-xl">
          <p
            className="text-lg text-left"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(acf?.carte?.texte),
            }}
          ></p>
        </div>
      </div>
      <div className="w-full h-[0.25px] bg-dark dark:bg-light lg:w-[0.25px] lg:h-[400px]"></div>
      <div className="w-[100%] lg:w-[50%] justify-center items-center  min-w-[300px] grid grid-cols-1 sm:grid-cols-2 gap-10">
        <ExpertisesIcons
          icon={acf?.gridServices?.expertise1?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise1?.icone?.altText}
          title={acf?.gridServices?.expertise1?.titre}
          text={acf?.gridServices?.expertise1?.texte}
        />
        <ExpertisesIcons
          icon={acf?.gridServices?.expertise2?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise2?.icone?.altText}
          title={acf?.gridServices?.expertise2?.titre}
          text={acf?.gridServices?.expertise2?.texte}
        />
        <ExpertisesIcons
          icon={acf?.gridServices?.expertise3?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise3?.icone?.altText}
          title={acf?.gridServices?.expertise3?.titre}
          text={acf?.gridServices?.expertise3?.texte}
        />
        <ExpertisesIcons
          icon={acf?.gridServices?.expertise4?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise4?.icone?.altText}
          title={acf?.gridServices?.expertise4?.titre}
          text={acf?.gridServices?.expertise4?.texte}
        />
      </div>
    </div>
  );
};

export default HomepageExpertises;
