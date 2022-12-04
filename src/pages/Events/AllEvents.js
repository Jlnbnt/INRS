import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_EVENTS_PREVIEWS } from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";
import SEO from "../../seo/SEO";
const AllNews = () => {
  const { searchQuery, setSearchQuery } = useStateContext();
  useEffect(() => {
    setSearchQuery("");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-8">
      <SEO
        title="Événements"
        description="INRS - It is not Rocket Science - Retrouvez toutes les événements de la communauté"
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

export default AllNews;
