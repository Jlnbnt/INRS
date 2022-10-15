import React, { useEffect } from "react";

import { Link } from "react-router-dom";

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
            {/* News */}
            <div className="w-full flex-col flex items-center">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-light dark:text-dark text-3xl">
                  Actualités
                </h1>
              </div>
              <div className="flex w-full flex-wrap  align-center">
                {/* Justify-center retiré */}
                {data?.actualites?.nodes.length ? (
                  data?.actualites?.nodes
                    ?.slice(0, 4)
                    .map((actu) => <NewsCard key={actu.title} actu={actu} />)
                ) : (
                  <h1 className="text-light dark:text-dark opacity-50 text-sm font-semibold p-8">
                    Aucune actualité à afficher...
                  </h1>
                )}
              </div>
              {data?.evenements?.nodes.length && (
                <div className="w-full flex items-center justify-center my-16">
                  <span className="text-xl text-light dark:text-dark">
                    Découvrez toutes les actualités &#10230;{" "}
                    <Link
                      to="/news"
                      className="text-xl text-light dark:text-dark hover:text-gray-400 duration-300 dark:hover:text-gray-400"
                    >
                      News
                    </Link>
                  </span>
                </div>
              )}
            </div>

            {/* Events */}
            <div className="w-full flex-col flex items-center">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-light dark:text-dark text-3xl">
                  Événements
                </h1>
              </div>
              <div className="flex w-full flex-wrap  align-center">
                {data?.evenements?.nodes.length ? (
                  data?.evenements?.nodes
                    ?.slice(0, 4)
                    .map((event) => (
                      <EventsCard key={event.title} event={event} />
                    ))
                ) : (
                  <h1 className="text-light dark:text-dark opacity-50 text-sm font-semibold p-8">
                    Aucun événement à afficher...
                  </h1>
                )}
              </div>
              {data?.evenements?.nodes.length && (
                <div className="w-full flex items-center justify-center my-16">
                  <span className="text-xl text-light dark:text-dark">
                    Découvrez toutes les événements &#10230;{" "}
                    <Link
                      to="/events"
                      className="text-xl text-light dark:text-dark hover:text-gray-400 duration-300 dark:hover:text-gray-400"
                    >
                      Events
                    </Link>
                  </span>
                </div>
              )}
            </div>
          </>
        )
      ) : (
        <div>Rien à afficher...</div>
      )}
    </>
  );
};

export default Homepage;
