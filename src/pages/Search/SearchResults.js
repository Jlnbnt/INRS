import React from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_NEWS_PREVIEWS, GET_EVENTS_PREVIEWS } from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";

const SearchResults = () => {
  const { searchQuery } = useStateContext();

  return (
    <div className="p-8">
      <CardGridRow
        rowName="Actualités"
        searchQuery={searchQuery}
        query={GET_NEWS_PREVIEWS}
        type="actualites"
      />
      <CardGridRow
        rowName="Événements"
        searchQuery={searchQuery}
        query={GET_EVENTS_PREVIEWS}
        type="evenements"
      />
    </div>
  );
};

export default SearchResults;
