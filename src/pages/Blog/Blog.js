import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_NEWS_PREVIEWS, GET_EVENTS_PREVIEWS } from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";

import FirstArticle from "./Articles/FirstArticle";
import SecondArticle from "./Articles/SecondArticle";

const Blog = () => {
  const { searchQuery, setSearchQuery, setSearchActive } = useStateContext();

  useEffect(() => {
    setSearchQuery("");
    setSearchActive(false);
  }, []);

  return (
    <div className="p-5">
      <FirstArticle postType="article1" />
      {<SecondArticle postType="article2" />}

      <div className="relative">
        <span id="anchorCards" className="absolute  -top-20 " />

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
    </div>
  );
};

export default Blog;
