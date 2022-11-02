import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useQuery } from "@apollo/client";

import NewsCard from "../NewsCard";
import EventsCard from "../EventsCard";

import { CircularProgress } from "@mui/material";
import BlogsCard from "../BlogsCard";

const CardGrid = ({ searchQuery, graphlQLQuery, postType }) => {
  const location = useLocation().pathname;
  const [slicer, setSlicer] = useState(4);

  const { loading, error, data } = useQuery(graphlQLQuery, {
    variables: {
      reactQuery: searchQuery,
    },
  });

  if (loading)
    return (
      <div className="h-full w-full min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex w-full flex-wrap align-center">
      {data && data?.[postType]?.nodes.length ? (
        <>
          {data?.[postType]?.nodes
            .slice(
              location === "/blogs" || location === "/blogs/" ? 1 : 0,
              slicer
            )
            .map((post) =>
              postType === "actualites" ? (
                <NewsCard key={post.title} post={post} />
              ) : postType === "evenements" ? (
                <EventsCard key={post.title} post={post} />
              ) : postType === "blogs" ? (
                <BlogsCard key={post.title} post={post} />
              ) : (
                <div>NOTHING</div>
              )
            )}
          {location !== "/actualites" &&
            location !== "/evenements" &&
            location !== "/blogs" &&
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
          {
            data /* postType === "blogs" && location == "/blogs" ? (
            <div>FOR BLOG ONLY SLICE (1,4)</div>
          ) : ( */ &&
              data?.[postType]?.nodes.length > slicer && (
                <div className="flex flex-col justify-content items-center w-full">
                  <button
                    onClick={() => setSlicer(slicer + 4)}
                    className="customHover my-6 font-light text-lg text-center text-light dark:text-dark dark:before:bg-light"
                  >
                    Show More...
                  </button>
                  {/*  {location === "/blogs" && (
                    <a
                      target="_blank"
                      href="#"
                      className="customHover before:bg-gray-400 dark:before:bg-gray-500 font-light cursor-pointer text-gray-400 dark:text-gray-500"
                    >
                      Proposez votre article de blog !{" "}
                    </a>
                  )} */}
                </div>
              )
            /*   ) */
          }
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
