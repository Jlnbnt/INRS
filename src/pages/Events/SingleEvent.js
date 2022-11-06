import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useStateContext } from "../../context/StateProvider";

import { useQuery } from "@apollo/client";
import { GET_EVENTS_PREVIEWS, GET_EVENT_BY_ID } from "../../graphql/Queries";

import { CircularProgress } from "@mui/material";
import CardGrid from "../../components/Cards/components/CardGrid";

const SingleEvent = () => {
  const { setSearchQuery, searchQuery } = useStateContext();

  useEffect(() => {
    setSearchQuery("");
    // eslint-disable-next-line
  }, []);

  const id = useParams();

  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: {
      id: id.id,
    },
  });

  if (loading)
    return (
      <div className="bg-light dark:bg-dark h-screen w-full flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );

  if (error) return `Error! ${error.message}`;

  const acf = data?.evenement?.evenements_acf;

  return (
    <>
      {data && (
        <div className="pb-16 flex w-full flex-col text-light dark:text-dark p-4">
          <img
            className="h-[40vh] md:h-[70vh] w-11/12 object-cover mb-6 rounded-2xl self-center"
            src={acf?.mainImage?.sourceUrl}
            alt=""
          />

          <div className="mb-6 flex flex-col justify-between gap-6 self-center max-w-7xl">
            <h2 className=" font-semibold">{acf?.mainTitle?.toUpperCase()}</h2>

            <div className="flex items-center justify-between gap-2 italic">
              <h4>
                Le{" "}
                <span className="italic font-semibold  ">{acf?.eventDate}</span>{" "}
                à{" "}
                <span className="italic font-semibold  ">{acf?.eventHour}</span>
              </h4>
              <h3 className="text-sm">
                Prix :{" "}
                <span className="font-semibold italic">{acf?.eventprice}</span>
              </h3>
            </div>
            <div
              className="max-w-[90%] md:max-w-5xl self-center"
              dangerouslySetInnerHTML={{ __html: acf?.maintext }}
            />
            <a
              rel="noreferrer"
              target="_blank"
              href={acf?.inscriptionLink}
              className="self-center text-3xl mt-8 customHover dark:before:bg-light font-semibold cursor-pointer"
            >
              S'inscrire <span className="font-light">✓</span>
            </a>
          </div>
          <CardGrid
            postType={"evenements"}
            searchQuery={searchQuery}
            graphlQLQuery={GET_EVENTS_PREVIEWS}
          />
        </div>
      )}
    </>
  );
};

export default SingleEvent;
