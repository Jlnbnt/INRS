import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useQuery } from "@apollo/client";

import NewsCard from "../NewsCard";
import EventsCard from "../EventsCard";

import { CircularProgress } from "@mui/material";

const CardGrid = ({ searchQuery, graphlQLQuery, postType }) => {
  const location = useLocation().pathname;

  const { loading, error, data } = useQuery(graphlQLQuery, {
    variables: {
      reactQuery: searchQuery,
    },
  });

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex w-full flex-wrap align-center">
      {data && data?.[postType]?.nodes.length ? (
        <>
          {data?.[postType]?.nodes

            .slice(
              0,
              location === "/actualites" ||
                location === "/evenements" ||
                location === "/search"
                ? data?.[postType]?.nodes.length
                : 4
            )
            .map((post) =>
              postType === "actualites" ? (
                <NewsCard key={post.title} post={post} />
              ) : postType === "evenements" ? (
                <EventsCard key={post.title} post={post} />
              ) : (
                <div>NOTHING</div>
              )
            )}
          {location !== "/actualites" &&
            location !== "/evenements" &&
            location !== "/search" && (
              <span className="w-full my-6 font-light text-[5vw] sm:text-[2.7vw] lg:text-[1.7vw] text-center text-light dark:text-dark">
                {location !== "/search" &&
                  postType === "evenements" &&
                  "L'agenda"}
                {location !== "/search" &&
                  postType === "actualites" &&
                  "Latest News"}

                <Link
                  to={`/${postType}`}

                  /* className="ml-2 text-light dark:text-dark font-semibold customHover dark:before:bg-light" */
                >
                  <span className="font-semibold">
                    {" "}
                    &rarr;{" "}
                    <span className="customHover dark:before:bg-light">
                      {/* <span className="underline underline-offset-8 decoration-gray-300/30 hover:decoration-gray-300 duration-300"> */}
                      Voir plus
                    </span>
                  </span>

                  {/*  Voir plus */}
                  {/* AFFICHER PLUS D'{postType.toUpperCase()} */}
                </Link>
              </span>
            )}
        </>
      ) : (
        <h2 className="text-light dark:text-dark opacity-50 text-sm font-semibold p-8">
          Aucun résultat...
        </h2>
      )}
    </div>
  );
};

export default CardGrid;