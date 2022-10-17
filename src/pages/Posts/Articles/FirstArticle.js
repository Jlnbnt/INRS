import React from "react";

import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";

import { Link } from "react-router-dom";

import { GET_POST_BY_TITLE } from "../../../graphql/Queries";

const FirstArticle = () => {
  const { loading, error, data } = useQuery(GET_POST_BY_TITLE, {
    variables: {
      title: "Premier Article",
    },
  });

  if (loading) return <CircularProgress className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const acf = data?.layouts?.nodes[0]?.layouts_acf;

  console.log(data);

  return (
    <div className="flex w-full flex-wrap  align-center">
      {data && data?.layouts?.nodes?.length ? (
        <div className="mb-16 flex w-full justify-center items-center flex-col">
          <h2 className="text-[11vw]  text-light dark:text-dark text-center">
            {acf?.mainTitle}
          </h2>
          <h2 className="mb-6 font-semibold text-[4vw] lg:text-[2vw] text-center text-light dark:text-dark">
            {acf?.subTitle} -
            <span className="font-light"> {acf?.subTitleSpan}</span>
          </h2>
          <Link
            to={`/post/${data.layouts.nodes[0].id}`}
            className="w-full
              justify-center flex"
          >
            <img
              className="h-[40vh] lg:h-[70vh] w-11/12 object-cover mb-6 rounded-2xl"
              src={acf?.mainImage.sourceUrl}
              alt={acf?.mainImage.altText}
            />
          </Link>
          <h2 className="justify-center flex flex-wrap mb-6 font-light text-[4vw] lg:text-[2vw] text-center text-light dark:text-dark">
            {acf?.thirdTitle}
            <span className="font-semibold ml-2">
              &rarr;&nbsp;
              <Link
                to={`/post/${data.layouts.nodes[0].id}`}
                className="customHover dark:before:bg-light"
              >
                {acf?.thirdTitleSpan}
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

export default FirstArticle;
