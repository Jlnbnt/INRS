import React from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_NEWS_PREVIEWS } from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";

const AllNews = () => {
  const { searchQuery } = useStateContext();

  return (
    <CardGridRow
      rowName="Actualités"
      searchQuery={searchQuery}
      query={GET_NEWS_PREVIEWS}
      type="actualites"
    />
  );
};

export default AllNews;
