import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_NEWS_PREVIEWS } from "../../graphql/Queries";

import SEO from "../../seo/SEO";

import CardGridRow from "../../components/Cards/components/CardGridRow";
const AllNews = () => {
  const { searchQuery, setSearchQuery } = useStateContext();
  useEffect(() => {
    setSearchQuery("");
    // eslint-disable-next-line
  }, []);
  return (
    <div className="p-8">
      <SEO
        title="Actualités"
        description="INRS - It is not Rocket Science - Retrouvez toutes les actualités de la communauté"
      />
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
