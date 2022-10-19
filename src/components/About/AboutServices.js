import React from "react";

import { useQuery } from "@apollo/client";

import { GET_ABOUT_SERVICES } from "../../graphql/Queries";
import { CircularProgress } from "@mui/material";

import { ServicesIcon } from "../Links/About/AboutComponents";

const AboutServices = () => {
  const { loading, error, data } = useQuery(GET_ABOUT_SERVICES);

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const acf = data?.layouts?.nodes[0]?.miseEnPage?.apropos?.services;

  return (
    <div
      className="p-8 justify-around items-center bg-gray-200 dark:bg-dark flex gap-16 flex-wrap
         rounded-t-xl w-full"
    >
      <div className="w-[50%] justify-center items-center  min-w-[300px] grid grid-cols-2 gap-6 text-light dark:text-dark">
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
      </div>
      <div className="flex-1 max-w-[400px] min-w-[300px] min-h-[400px] shadow-lg bg-alabaster dark:bg-pewter/30 text-light dark:text-dark rounded-lg p-2 flex-col h-[250px] w-[200px] gap-2 flex justify-between items-center">
        <div
          style={{
            backgroundImage: `url(${acf?.carte?.image?.sourceUrl})`,
          }}
          className="self-start h-2/3 w-full rounded bg-cover shadow-lg"
        />
        <div className=" flex flex-col w-full h-1/3 break-words text-center justify-center items-center">
          <h4 className="pb-2">{acf.carte.sousTitre}</h4>
          <p className="text-sm w-[70%]">{acf?.carte?.texte}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
