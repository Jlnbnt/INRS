import React from "react";

import { useQuery } from "@apollo/client";

import { GET_ALL_HIGHLIGHTS } from "../../../graphql/Queries";

import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const SecondArticle = () => {
  const { loading, error, data } = useQuery(GET_ALL_HIGHLIGHTS, {
    variables: {
      article1: false,
      article2: true,
      title: "Blog - Article 2",
    },
  });

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const article = data?.layouts?.nodes[0]?.miseEnPage?.blog?.article2;

  return (
    <div className="flex w-full flex-wrap  align-center">
      {data && data?.layouts?.nodes?.length ? (
        <div className="pb-16 flex w-full justify-center items-center flex-col">
          <h2 className="text-[8vw] lg:text-[5vw]  text-light dark:text-dark text-center">
            {article?.titre}
          </h2>
          <h2 className="mb-6 max-w-[90%] font-semibold text-[4vw] sm:text-[3vh] lg:text-[1.5vw] text-center text-light dark:text-dark">
            {article?.baselineGras} -
            <span className="font-light"> {article?.baselineLight}</span>
          </h2>
          <Link
            to={`/post/${data.layouts.nodes[0].id}`}
            className="w-full
              justify-center flex hover:scale-[99%] duration-700"
          >
            <img
              className="h-[40vh] lg:h-[70vh] w-[95%] object-cover mb-6 rounded-2xl"
              src={article?.image?.sourceUrl}
              alt={article?.image?.altText}
            />
          </Link>
          <h2 className="mb-6 max-w-[90%] font-light text-[4vw] sm:text-[3vh] lg:text-[1.5vw] text-center text-light dark:text-dark">
            {article?.lienGras}
            <span className="font-semibold ml-2">
              &rarr;&nbsp;
              <Link
                to={`/post/${data.layouts.nodes[0].id}`}
                className="customHover dark:before:bg-light"
              >
                {article?.lienLight}
              </Link>
            </span>
          </h2>
        </div>
      ) : null}
      {/*  <h2 className="text-light dark:text-dark opacity-50 text-sm font-semibold p-8">
        Aucun résultat...
      </h2> */}
    </div>
  );
};

export default SecondArticle;
