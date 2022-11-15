import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useStateContext } from "../../../context/StateProvider";

import { useQuery } from "@apollo/client";
import { GET_BLOGS_PREVIEWS, GET_BLOG_BY_ID } from "../../../graphql/Queries";

import { CircularProgress } from "@mui/material";
import CardGrid from "../../../components/Cards/components/CardGrid";
import DOMPurify from "dompurify";
const SingleBlog = () => {
  const { setSearchQuery, searchQuery } = useStateContext();

  useEffect(() => {
    setSearchQuery("");
    // eslint-disable-next-line
  }, []);

  const id = useParams();

  const { loading, error, data } = useQuery(GET_BLOG_BY_ID, {
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

  const acf = data?.blog?.blog_acf;

  return (
    <>
      {data && (
        <div className="pb-16 flex w-full flex-col text-light dark:text-dark p-4">
          <img
            className="h-[40vh] md:h-[70vh] w-11/12 object-cover mb-6 rounded-2xl self-center"
            src={acf?.mainImage?.sourceUrl}
            alt=""
          />

          <div className="mb-6 flex flex-col justify-between gap-6 p-4 self-center max-w-7xl">
            <h2 className="font-semibold text-4xl sm:text-6xl">
              {acf?.mainTitle?.toUpperCase()}
            </h2>

            <div className="flex items-center gap-2 italic">
              <span>Ecrit par</span>
              <img
                alt={`${data?.blog?.author?.node?.name}'s avatar`}
                className="rounded-full w-[32px] h-[32px]"
                src={data?.blog?.author?.node?.avatar?.url}
              />
              <span className="text-gray-400">
                {data?.blog?.author?.node?.name}
              </span>
              <span>le</span>
              <h4 className="text-gray-400">{`${new Date(
                data?.blog?.date
              ).toLocaleString("fr-FR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}`}</h4>
            </div>
            <div
              className="max-w-[90%] md:max-w-5xl "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(acf?.maintext),
              }}
            />
          </div>
          <span className="text-3xl">A lire aussi :</span>
          <CardGrid
            postType={"blogs"}
            searchQuery={searchQuery}
            graphlQLQuery={GET_BLOGS_PREVIEWS}
          />
        </div>
      )}
    </>
  );
};

export default SingleBlog;
