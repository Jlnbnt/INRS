import React, { useEffect } from "react";

import NewsCard from "../components/Cards/NewsCard";
import EventsCard from "../components/Cards/EventsCard";

import { gql, useQuery } from "@apollo/client";
import { useStateContext } from "../context/StateProvider";
import { CircularProgress } from "@mui/material";

const GET_ALL_POSTS_PREVIEWS = gql`
  query GetPreviewPosts($reactQuery: String) {
    actualites(where: { reactQuery: $reactQuery }) {
      nodes {
        actualites_acf {
          mainImage {
            altText
            sourceUrl(size: THUMBNAIL)
          }
          tag
          mainTitle
        }
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        date
        title
      }
    }
    evenements(where: { reactQuery: $reactQuery }) {
      nodes {
        evenements_acf {
          mainImage {
            altText
            sourceUrl(size: THUMBNAIL)
          }
          tag
          mainTitle
        }
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        date
        title
      }
    }
  }
`;

const Homepage = () => {
  const { searchQuery } = useStateContext();

  const { loading, error, data } = useQuery(GET_ALL_POSTS_PREVIEWS, {
    variables: {
      reactQuery: searchQuery,
    },
  });

  if (loading) return <CircularProgress />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data ? (
        data && (
          <>
            {/* RESTE A FAIRE : SLICE(0.3) + see all link*/}
            {/* News */}
            <div className="w-full flex items-center justify-between">
              <h1 className="text-light dark:text-dark text-3xl">Actualités</h1>
              {data?.evenements?.nodes.length && (
                <button className="text-xs text-light dark:text-dark hover:text-gray-400 duration-300 dark:hover:text-gray-400">
                  Toutes les actualités &#10230;
                </button>
              )}
            </div>
            <div className="flex flex-wrap justify-center align-center">
              {data?.actualites?.nodes.length ? (
                data?.actualites?.nodes?.map((actu) => (
                  <NewsCard key={actu.title} actu={actu} />
                ))
              ) : (
                <h1 className="text-light dark:text-dark opacity-50 text-sm font-semibold p-8">
                  No post in this category
                </h1>
              )}
            </div>

            {/* Events */}
            <div className="w-full flex items-center justify-between">
              <h1 className="text-light dark:text-dark text-3xl">Événements</h1>
              {data?.evenements?.nodes.length && (
                <button className="text-xs text-light dark:text-dark hover:text-gray-400 duration-300 dark:hover:text-gray-400">
                  Tous les événements &#10230;
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center align-center">
              {data?.evenements?.nodes.length ? (
                data?.evenements?.nodes?.map((event) => (
                  <EventsCard key={event.title} event={event} />
                ))
              ) : (
                <h1 className="text-light dark:text-dark opacity-50 text-sm font-semibold p-8">
                  No post in this category
                </h1>
              )}
            </div>
          </>
        )
      ) : (
        <div>NOTHING TO DISPLAY</div>
      )}
    </>
  );
};

export default Homepage;
