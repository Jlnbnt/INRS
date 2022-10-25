import React from "react";

import { useQuery } from "@apollo/client";

import { GET_ABOUT_SERVICES } from "../../graphql/Queries";
import { CircularProgress } from "@mui/material";

import { ServicesIcon } from "../Links/About/AboutComponents";
import { Link } from "react-router-dom";

const HomepageServices = () => {
  const { loading, error, data } = useQuery(GET_ABOUT_SERVICES);

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const acf = data?.layouts?.nodes[0]?.miseEnPage?.apropos?.services;

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
          icon={acf.gridServices.service1.icone.sourceUrl}
          alt={acf.gridServices.service1.icone.altText}
          title={acf.gridServices.service1.titre}
          text={acf.gridServices.service1.texte}
        />
        <ServicesIcon
          icon={acf.gridServices.service2.icone.sourceUrl}
          alt={acf.gridServices.service2.icone.altText}
          title={acf.gridServices.service2.titre}
          text={acf.gridServices.service2.texte}
        />
        <ServicesIcon
          icon={acf.gridServices.service3.icone.sourceUrl}
          alt={acf.gridServices.service3.icone.altText}
          title={acf.gridServices.service3.titre}
          text={acf.gridServices.service3.texte}
        />
        <ServicesIcon
          icon={acf.gridServices.service4.icone.sourceUrl}
          alt={acf.gridServices.service4.icone.altText}
          title={acf.gridServices.service4.titre}
          text={acf.gridServices.service4.texte}
        />
        <ServicesIcon
          icon={acf.gridServices.service4.icone.sourceUrl}
          alt={acf.gridServices.service4.icone.altText}
          title={acf.gridServices.service4.titre}
          text={acf.gridServices.service4.texte}
        />
        <ServicesIcon
          icon={acf.gridServices.service4.icone.sourceUrl}
          alt={acf.gridServices.service4.icone.altText}
          title={acf.gridServices.service4.titre}
          text={acf.gridServices.service4.texte}
        />
      </div>
    </div>
  );
};

export default HomepageServices;
