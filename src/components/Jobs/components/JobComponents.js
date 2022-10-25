import React, { useEffect, useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import { useQuery } from "@apollo/client";
import { GET_JOB_PREVIEW, GET_JOB_BY_ID } from "../../../graphql/Queries";

import { useStateContext } from "../../../context/StateProvider";
import useIsMobile from "../../../context/useIsMobile";

import { CircularProgress } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const JobPreview = () => {
  const isMobile = useIsMobile().isMobile;
  const [slicer, setSlicer] = useState(3);
  const { loading, error, data } = useQuery(GET_JOB_PREVIEW);

  const { setJobId, clicked, setClicked } = useStateContext();
  const OpenIt = (job) => {
    setJobId(job.id);
    isMobile && setClicked(true);
  };
  useEffect(() => {
    setJobId(data?.jobs?.nodes[0]?.id);
  }, [loading]);

  if (loading)
    return (
      <div className=" w-full md:w-1/2 lg:w-2/5 p-2 h-[calc(100vh-110px)] sm:h-[calc(100vh-128px)]">
        <div className=" p-2 h-full flex flex-col gap-2 scrollbar-hide md:scrollbar-show overflow-y-auto items-center justify-center">
          <CircularProgress disableShrink className="m-8" />
        </div>
      </div>
    );

  if (error) return `Error! ${error.message}`;

  const diffDate = (date) => {
    const today = new Date();
    const day2 = new Date(date);
    const diff = Math.ceil(
      (today.getTime() - day2.getTime()) / (1000 * 3600 * 24)
    );

    return diff;
  };

  return (
    <>
      <div
        className=" w-full  md:w-1/2 lg:w-2/5 p-2 h-[calc(100vh-110px)] sm:h-[calc(100vh-128px)]"
        style={{
          display: isMobile && clicked ? "none" : "block",
        }}
      >
        <div className=" p-2 h-full flex flex-col gap-2 scrollbar-hide md:scrollbar-show overflow-y-auto">
          {data &&
            data?.jobs?.nodes?.slice(0, slicer).map((job) => (
              <div
                key={job.id}
                className="w-full py-4 flex gap-12 items-center relative"
              >
                <button
                  onClick={() => OpenIt(job)}
                  className="h-full w-full absolute"
                />
                <img
                  src={job?.jobs_acf?.entreprise?.logo?.sourceUrl}
                  alt={job?.jobs_acf?.entreprise?.logo?.altText}
                  className="hidden sm:block w-[60px] h-[60px] rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-semibold">
                    {job?.jobs_acf?.titre}
                  </h2>
                  <h3 className="text-lg">{job?.jobs_acf?.entreprise?.nom}</h3>
                  <p className="text-lg max-w-[90%] md:max-w-full">
                    {job?.jobs_acf?.entreprise?.lieu}{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ({job?.jobs_acf?.remote})
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {diffDate(job?.date) >= 0 && diffDate(job?.date) <= 1
                      ? "aujourd'hui"
                      : diffDate(job?.date) > 1 && diffDate(job?.date) < 31
                      ? `il y a ${diffDate(job?.date)} jours`
                      : diffDate(job?.date) > 365
                      ? `il y a plus d'un an`
                      : `il y a environs ${Math.ceil(
                          diffDate(job?.date) / 30
                        )} mois`}
                  </p>
                </div>
              </div>
            ))}{" "}
          {data && data?.jobs?.nodes?.length > slicer && (
            <div className="flex flex-col justify-content items-center w-full">
              <button
                onClick={() => setSlicer(slicer + 4)}
                className="customHover my-6 font-light text-lg text-center text-light dark:text-dark dark:before:bg-light"
              >
                Show More...
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const JobDescription = () => {
  const isMobile = useIsMobile().isMobile;
  const { jobId, clicked, setClicked, setJobTitle, handleContactOpen } =
    useStateContext();

  const closeIt = () => {
    setClicked(false);
  };

  const handlePostul = () => {
    handleContactOpen();
    setJobTitle(data?.job?.title);
  };
  const { loading, error, data } = useQuery(GET_JOB_BY_ID, {
    variables: {
      id: jobId,
    },
  });

  useEffect(() => {
    document?.querySelector("#topDiv")?.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  }, [jobId]);

  if (loading)
    return (
      <div
        className="md:w-1/2 lg:w-3/5 p-2 h-full w-full md:flex justify-center items-center sm:h-[calc(100vh-128px)]"
        style={{
          display: isMobile && clicked === false ? "none" : "flex",
        }}
      >
        <CircularProgress disableShrink className="m-8" />
      </div>
    );

  if (error)
    return (
      <div className=" md:w-1/2 lg:w-3/5 p-2 hidden md:block sm:h-[calc(100vh-128px)]">
        <div className="p-2 h-full flex flex-col gap-2 overflow-y-auto items-center justify-center">
          <CircularProgress disableShrink className="m-8" />
        </div>
      </div>
    );

  const acf = data?.job?.jobs_acf;

  const diffDate = () => {
    const today = new Date();
    const day2 = new Date(data?.job?.date);
    const diff = Math.ceil(
      (today.getTime() - day2.getTime()) / (1000 * 3600 * 24)
    );

    return diff;
  };

  return (
    <div
      className="md:w-1/2 lg:w-3/5 p-2 w-full relative  md:block h-[calc(100vh-110px)] sm:h-[calc(100vh-128px)] "
      style={{
        display: isMobile && clicked === false ? "none" : "block",
      }}
    >
      {isMobile && clicked && (
        <button className="absolute left-5 -top-2 " onClick={closeIt}>
          <ArrowBackIosNewIcon />
        </button>
      )}
      <div
        id="topDiv"
        className=" p-2 h-full flex flex-col gap-2 scrollbar-hide md:scrollbar-show overflow-y-auto"
        style={{
          marginTop: isMobile ? "20px" : 0,
        }}
      >
        <h2 className="text-5xl ">{acf?.titre}</h2>

        <p className="text-lg">
          {acf?.entreprise?.nom} · {acf?.entreprise?.lieu} ({acf?.remote})
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {diffDate() >= 0 && diffDate() <= 1
            ? "aujourd'hui"
            : diffDate() > 1 && diffDate() < 31
            ? `il y a ${diffDate()} jours`
            : diffDate() > 365
            ? `il y a plus d'un an`
            : `il y a environs ${Math.ceil(diffDate() / 30)} mois`}
        </p>

        <ul className="text-lg flex flex-col gap-4 mt-4">
          <li className="flex gap-2 items-center">
            <AcUnitIcon />
            {acf?.typeDeTravail} · {acf?.experience}
          </li>
          <li className="flex gap-2 items-center">
            <AcUnitIcon />
            {acf?.entreprise?.nombre} · {acf?.domaine}
          </li>
        </ul>
        <button
          onClick={handlePostul}
          className="flex gap-4 mt-4 text-xl bg-blue-500 w-[90px] p-2 justify-center items-center rounded-lg text-dark"
        >
          Postuler
        </button>
        <div className="my-4 flex items-center gap-4">
          <a target="_blank" href={acf?.entreprise?.editeur?.linkedin}>
            <img
              src={acf?.entreprise?.editeur?.avatar?.sourceUrl}
              alt={acf?.entreprise?.editeur?.avatar?.altText}
              className="w-[50px] h-[50px] rounded-full"
            />
          </a>
          <div>
            <a
              target="_blank"
              href={acf?.entreprise?.editeur?.linkedin}
              className="font-semibold customHover dark:before:bg-light"
            >
              {acf?.entreprise?.editeur?.prenom} {acf?.entreprise?.editeur?.nom}
            </a>
            <p className="text-sm">
              {acf?.entreprise?.editeur?.poste} chez {acf?.entreprise?.nom}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Auteur de l'offre d'emplois
            </p>
          </div>
        </div>
        <div>
          <span
            className="flex flex-col gap-2"
            dangerouslySetInnerHTML={{ __html: acf?.texte }}
          ></span>
        </div>
      </div>
    </div>
  );
};
