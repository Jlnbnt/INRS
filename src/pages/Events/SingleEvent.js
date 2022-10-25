import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useStateContext } from "../../context/StateProvider";

import { useQuery } from "@apollo/client";
import { GET_EVENT_BY_ID } from "../../graphql/Queries";

import { CircularProgress } from "@mui/material";

const SingleEvent = () => {
  const { setSearchQuery } = useStateContext();

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

  if (loading) return <CircularProgress disableShrink className="m-8" />;
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

          <div className="mb-6 flex flex-col justify-between gap-4">
            <h2 className=" font-semibold text-[6vw] md:text-[5 vw] lg:text-[4.5vw] max-w-7xl">
              {acf?.mainTitle?.toUpperCase()}
            </h2>

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
          </div>
          <div
            className="max-w-[90%] md:max-w-5xl self-center"
            dangerouslySetInnerHTML={{ __html: acf?.maintext }}
          />
          <a
            rel="noreferrer"
            target="_blank"
            href={acf?.inscriptionLink}
            className="self-center text-5xl mt-8 customHover dark:before:bg-light font-semibold cursor-pointer"
          >
            S'inscrire <span className="font-light">✓</span>
          </a>
        </div>
      )}
    </>
  );
};

export default SingleEvent;
