import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import {
  GET_NEWS_PREVIEWS,
  GET_EVENTS_PREVIEWS,
  GET_BLOGS_PREVIEWS,
} from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";

import SEO from "../../seo/SEO";

const SearchResults = () => {
  const { searchQuery } = useStateContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-8">
      <SEO
        title={`Recherche | ${searchQuery}`}
        description="INRS - It is not Rocket Science est un site d'information et de vulgarisation scientifique. Retrouvez les actualités, les événements, les offres d'emplois du réseau INRS."
      />
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
