import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_NEWS_BY_ID } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
import { useStateContext } from "../context/StateProvider";
const SingleNews = () => {
  const { setSearchQuery } = useStateContext();

  const id = useParams();
  const { loading, error, data } = useQuery(GET_NEWS_BY_ID, {
    variables: {
      id: id.id,
    },
  });
  useEffect(() => {
    setSearchQuery("");
  }, []);
  return <>{data && <div>{data?.actualite?.title}</div>}</>;
};

export default SingleNews;
