import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_NEWS_PREVIEWS, GET_EVENTS_PREVIEWS } from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";

import FirstArticle from "../Posts/Articles/FirstArticle";
import SecondArticle from "../Posts/Articles/SecondArticle";

import QuoteCards from "../../components/Quotes/QuoteCards";

const Homepage = () => {
  const { searchQuery, setSearchQuery, setSearchActive } = useStateContext();

  useEffect(() => {
    setSearchQuery("");
    setSearchActive(false);
  }, []);

  return (
    <>
      <FirstArticle />
      <SecondArticle />

      <div className="relative">
        <span id="anchorCards" className="absolute -top-20" />
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

      <QuoteCards />
    </>
  );
};

export default Homepage;
