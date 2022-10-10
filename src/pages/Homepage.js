import React from "react";

import Card from "../components/Cards/ActuCard";

import { gql, useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";

const GET_ALL_POSTS_PREVIEWS = gql`
  query {
    actualites {
      nodes {
        actualites_custom_fields {
          maintext
          mainImage {
            sourceUrl(size: THUMBNAIL)
            altText
          }
          tags
          keyWords
        }
        title
        date
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  }
`;
const Homepage = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS_PREVIEWS);

  if (loading) return <CircularProgress color="secondary" />;

  if (error) return `Error! ${error.message}`;

  console.log(data.actualites.nodes);
  return (
    <div className="flex flex-wrap justify-center align-center">
      {data?.actualites?.nodes.length ? (
        data?.actualites?.nodes?.map((item) => (
          <Card key={item.title} props={item}></Card>
        ))
      ) : (
        <h1 className="text-light dark:text-dark text-6xl font-semibold p-16">
          Nothing to display
        </h1>
      )}
    </div>
  );
};

export default Homepage;
