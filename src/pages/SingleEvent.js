import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_EVENT_BY_ID } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
import { useStateContext } from "../context/StateProvider";
const SingleEvent = () => {
  const { setSearchQuery } = useStateContext();

  const id = useParams();
  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: {
      id: id.id,
    },
  });
  useEffect(() => {
    setSearchQuery("");
  }, []);
  return <>{data && <div>{data?.evenement?.title}</div>}</>;
};

export default SingleEvent;
