import React from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_NEWS_PREVIEWS } from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";

const AllNews = () => {
  const { searchQuery } = useStateContext();

  return (
    <div className="p-8">
      <CardGridRow
        rowName="Actualités"
        searchQuery={searchQuery}
        query={GET_NEWS_PREVIEWS}
        type="actualites"
      />
    </div>
  );
};

export default AllNews;