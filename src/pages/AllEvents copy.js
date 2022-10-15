import React, { useEffect } from "react";

import NewsCard from "../components/Cards/NewsCard";

import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_EVENTS_PREVIEWS } from "../graphql/Queries";

import { useStateContext } from "../context/StateProvider";
import CardGridRow from "../components/Cards/components/CardGridRow";

const AllNews = () => {
  const { searchQuery } = useStateContext();

  const { data } = useQuery(GET_EVENTS_PREVIEWS, {
    variables: {
      reactQuery: searchQuery,
    },
  });

  console.log(data);
  return (
    <>
      <CardGridRow
        rowName="Événements"
        searchQuery={searchQuery}
        query={GET_EVENTS_PREVIEWS}
        type="evenements"
      />
    </>
  );
};

export default AllNews;
