import React from "react";

import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import NewsCard from "../NewsCard";
import EventsCard from "../EventsCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CardGrid = ({ searchQuery, graphlQLQuery, postType }) => {
  const location = useLocation().pathname;
  const { loading, error, data } = useQuery(graphlQLQuery, {
    variables: {
      reactQuery: searchQuery,
    },
  });

  if (loading) return <CircularProgress className="m-8" />;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="flex w-full flex-wrap  align-center">
      {data && data?.[postType]?.nodes.length ? (
        <>
          {data?.[postType]?.nodes
            ?.slice(0, 4)
            .map((post) =>
              postType === "actualites" ? (
                <NewsCard key={post.title} post={post} />
              ) : postType === "evenements" ? (
                <EventsCard key={post.title} post={post} />
              ) : (
                <div>NOTHING</div>
              )
            )}
          {location !== "/actualites" && location !== "/evenements" && (
            <span className="p-8 w-full flex justify-center">
              <Link
                to={`/${postType}`}
                className="text-white dark:text-dark hover:text-gray-400 dark:hover:text-gray-400 duration-300 text-xl font-semibold "
              >
                Voir plus &rarr;
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
