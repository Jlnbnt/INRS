import React, { useEffect } from "react";

import NewsCard from "../components/Cards/NewsCard";

import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GET_NEWS_PREVIEWS } from "../graphql/Queries";

import { useStateContext } from "../context/StateProvider";
import CardGridRow from "../components/Cards/components/CardGridRow";

const AllNews = () => {
  const { searchQuery } = useStateContext();

  const { data } = useQuery(GET_NEWS_PREVIEWS, {
    variables: {
      reactQuery: searchQuery,
    },
  });

  console.log(data);
  return (
    <>
      <CardGridRow
        rowName="Actualités"
        searchQuery={searchQuery}
        query={GET_NEWS_PREVIEWS}
        type="actualites"
      />
    </>
  );
};

export default AllNews;
