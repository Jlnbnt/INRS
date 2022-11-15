import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_BLOGS_PREVIEWS } from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";
import BlogArticle from "./Articles/BlogArticle";
const AllBlog = () => {
  const { searchQuery, setSearchQuery } = useStateContext();
  useEffect(() => {
    setSearchQuery("");
  }, []);
  return (
    <div className="p-8">
      <BlogArticle />
      <CardGridRow
        rowName="Blog"
        searchQuery={searchQuery}
        query={GET_BLOGS_PREVIEWS}
        type="blogs"
      />
    </div>
  );
};

export default AllBlog;
