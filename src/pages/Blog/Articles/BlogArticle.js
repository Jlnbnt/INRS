import React from "react";

import { useQuery } from "@apollo/client";

import { GET_LATEST_BLOG } from "../../../graphql/Queries";

import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const BlogArticle = () => {
  const { loading, error, data } = useQuery(GET_LATEST_BLOG);

  if (loading)
    return (
      <div className="h-full w-full min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );
  if (error) return `Error! ${error.message}`;
  const article = data?.blogs?.nodes[0];

  return (
    <div className="flex w-full flex-wrap  align-center">
      {data && data?.blogs?.nodes?.length ? (
        <div className="pb-16 flex w-full justify-center items-center flex-col">
          {/* <h2 className="text-[8vw] lg:text-[5vw]  text-light dark:text-dark text-center">
            {article?.title}
          </h2> */}
          <h2 className="mb-6 max-w-[90%] font-semibold text-[4vw] sm:text-[3vh] lg:text-[2.5vw] text-center text-light dark:text-dark">
            {article?.title} -
            <span className="font-light "> {article?.author?.node?.name}</span>
          </h2>
          <Link
            to={`/blog/${data.blogs.nodes[0].id}`}
            className="w-full justify-center flex hover:scale-[99%] duration-700"
          >
            <img
              className="h-[40vh] sm:h-[60vh] lg:h-[70vh] w-full object-cover mb-6 rounded-2xl"
              src={article?.blog_acf?.mainImage?.sourceUrl}
              alt={article?.blog_acf?.mainImage?.altText}
            />
          </Link>
          <h2 className="mb-6 max-w-[90%] font-light text-[4vw] sm:text-[3vh] lg:text-[1.5vw] text-center text-light dark:text-dark">
            CHECK IT
            <span className="font-semibold ml-2">
              &rarr;&nbsp;
              <Link
                to={`/blog/${data.blogs.nodes[0].id}`}
                className="customHover dark:before:bg-light"
              >
                DAILY HIGHLIGHT
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

export default BlogArticle;
