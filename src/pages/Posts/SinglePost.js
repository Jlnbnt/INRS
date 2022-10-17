import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useStateContext } from "../../context/StateProvider";

import { useQuery } from "@apollo/client";
import { GET_POST_BY_ID } from "../../graphql/Queries";

import { CircularProgress } from "@mui/material";

const SinglePost = () => {
  const { setSearchQuery } = useStateContext();

  useEffect(() => {
    setSearchQuery("");
  }, []);

  const id = useParams();

  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: {
      id: id.id,
    },
  });

  if (loading) return <CircularProgress className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const acf = data?.layout?.layouts_acf;

  return (
    <>
      {data && (
        <div className=" mb-16 flex w-full flex-col text-light dark:text-dark">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-semibold text-[4vw]">
              {acf?.mainTitle?.toUpperCase()}
            </h2>
            <h4>{`${new Date(data?.layout?.date).toLocaleString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}</h4>
          </div>
          <img
            className="h-[40vh] md:h-[70vh] w-11/12 object-cover mb-6 rounded-2xl self-center"
            src={acf?.mainImage.sourceUrl}
            alt=""
          />
          <div
            className="mb-12"
            dangerouslySetInnerHTML={{ __html: acf?.maintext }}
          />

          <div className="flex items-center gap-2">
            <img
              alt={`${data?.layout?.author?.node?.name}'s avatar`}
              className="rounded-full w-[32px] h-[32px]"
              src={data?.layout?.author?.node?.avatar?.url}
            />
            <span>{data?.layout?.author?.node?.name}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePost;
