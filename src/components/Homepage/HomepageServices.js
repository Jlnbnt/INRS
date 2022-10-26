import React from "react";

import { useQuery } from "@apollo/client";

import { GET_HOMEPAGE_EXPERTISES } from "../../graphql/Queries";
import { CircularProgress } from "@mui/material";

import { ServicesIcon } from "../Links/About/AboutComponents";
import { Link } from "react-router-dom";

const HomepageServices = () => {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_EXPERTISES);

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const acf = data?.layouts?.nodes[0]?.miseEnPage?.accueil?.expertises;
  console.log(data);
  return (
    <div
      className="p-8 justify-around items-center bg-gray-200 dark:bg-dark flex gap-16 flex-wrap  text-light dark:text-dark
         rounded-t-xl w-full"
    >
      <div className="text-center flex-1 w-full p-2 flex-col h-full gap-8 flex justify-between items-center ">
        <h4 className="self-center text-5xl pb-4">{acf.carte.sousTitre}</h4>
        <div className="flex flex-col gap-4 sm:max-w-xl self-center">
          <p className="text-lg">{acf?.carte?.texte}</p>
          <p>{acf?.carte?.texte}</p>
          <p>{acf?.carte?.texte}</p>
        </div>
        <Link
          to="about"
          className="self-center border-[0.5px] border-light dark:border-dark p-2 rounded-lg text-xl hover:bg-dark/10 hover:hover:bg-light/10 duration-300"
        >
          Discover
        </Link>
      </div>
      <div className="w-full h-[0.25px] bg-dark dark:bg-light lg:w-[0.25px] lg:h-[400px]"></div>
      <div className="w-[70%] lg:w-[50%] justify-center items-center  min-w-[300px] grid grid-cols-2 gap-10">
        <ServicesIcon
          icon={acf?.gridServices?.expertise1?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise1?.icone?.altText}
          title={acf?.gridServices?.expertise1?.titre}
          text={acf?.gridServices?.expertise1?.texte}
        />
        <ServicesIcon
          icon={acf?.gridServices?.expertise2?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise2?.icone?.altText}
          title={acf?.gridServices?.expertise2?.titre}
          text={acf?.gridServices?.expertise2?.texte}
        />
        <ServicesIcon
          icon={acf?.gridServices?.expertise3?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise3?.icone?.altText}
          title={acf?.gridServices?.expertise3?.titre}
          text={acf?.gridServices?.expertise3?.texte}
        />
        <ServicesIcon
          icon={acf?.gridServices?.expertise4?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise4?.icone?.altText}
          title={acf?.gridServices?.expertise4?.titre}
          text={acf?.gridServices?.expertise4?.texte}
        />
        <ServicesIcon
          icon={acf?.gridServices?.expertise5?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise5?.icone?.altText}
          title={acf?.gridServices?.expertise5?.titre}
          text={acf?.gridServices?.expertise5?.texte}
        />
        <ServicesIcon
          icon={acf?.gridServices?.expertise6?.icone?.sourceUrl}
          alt={acf?.gridServices?.expertise6?.icone?.altText}
          title={acf?.gridServices?.expertise6?.titre}
          text={acf?.gridServices?.expertise6?.texte}
        />
      </div>
    </div>
  );
};

export default HomepageServices;
