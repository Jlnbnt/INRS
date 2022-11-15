import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import {
  GET_NEWS_PREVIEWS,
  GET_EVENTS_PREVIEWS,
  GET_BLOGS_PREVIEWS,
} from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";

const SearchResults = () => {
  const { searchQuery } = useStateContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <CardGridRow
        rowName="Blogs"
        searchQuery={searchQuery}
        query={GET_BLOGS_PREVIEWS}
        type="blogs"
      />
    </div>
  );
};

export default SearchResults;
