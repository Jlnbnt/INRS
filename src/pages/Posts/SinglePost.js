import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useStateContext } from "../../context/StateProvider";

import { useQuery } from "@apollo/client";
import { GET_SINGLE_HIGHLIGHTS } from "../../graphql/Queries";

import { CircularProgress } from "@mui/material";

const SinglePost = () => {
  const { setSearchQuery } = useStateContext();

  useEffect(() => {
    setSearchQuery("");
  }, []);

  const id = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_HIGHLIGHTS, {
    variables: {
      article1: id.id === "cG9zdDozMTQ=" ? true : false,
      article2: id.id === "cG9zdDozMjU=" ? true : false,
      id: id.id,
    },
  });

  if (loading) return <CircularProgress disableShrink className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const currentArticle = id.id === "cG9zdDozMTQ=" ? "article1" : "article2";

  const acf = data?.layout?.miseEnPage?.accueil?.[currentArticle];

  return (
    <>
      {data && (
        <div className="pb-16 flex w-full flex-col text-light dark:text-dark p-4">
          <img
            className="h-[40vh] md:h-[70vh] w-11/12 object-cover mb-6 rounded-2xl self-center"
            src={acf?.image?.sourceUrl}
            alt={acf?.image?.altText}
          />

          <div className="mb-6 flex flex-col justify-between gap-4">
            <h2 className="font-semibold text-[7vw] md:text-[5 vw] lg:text-[4.5vw] max-w-7xl">
              {acf?.titre?.toUpperCase()}
            </h2>

            <div className="flex items-center gap-2 italic">
              <span>Ecrit par</span>
              <img
                alt={`${data?.layout?.author?.node?.name}'s avatar`}
                className="rounded-full w-[16px] h-[16px]"
                src={data?.layout?.author?.node?.avatar?.url}
              />
              <span className="text-gray-400">
                {data?.layout?.author?.node?.name}
              </span>
              <span>le</span>
              <h4 className="text-gray-400">{`${new Date(
                data?.layout?.date
              ).toLocaleString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`}</h4>
            </div>
          </div>
          <div
            className="max-w-[90%] md:max-w-5xl self-center"
            dangerouslySetInnerHTML={{ __html: acf?.contenu }}
          />
        </div>
      )}
    </>
  );
};

export default SinglePost;
