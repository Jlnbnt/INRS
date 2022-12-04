import React, { useEffect } from "react";

import { useStateContext } from "../../context/StateProvider";

import { GET_BLOGS_PREVIEWS } from "../../graphql/Queries";

import CardGridRow from "../../components/Cards/components/CardGridRow";
import BlogArticle from "./Articles/BlogArticle";
import SEO from "../../seo/SEO";
const AllBlog = () => {
  const { searchQuery, setSearchQuery } = useStateContext();
  useEffect(() => {
    setSearchQuery("");
    // eslint-disable-next-line
  }, []);
  return (
    <div className="p-8">
      <SEO
        title="Blogs"
        description="INRS - It is not Rocket Science - Retrouvez tous les articles de blog de la communauté"
      />
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
