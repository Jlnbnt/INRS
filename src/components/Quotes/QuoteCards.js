import React from "react";

import { useQuery } from "@apollo/client";
import { GET_QUOTES } from "../../graphql/Queries";

import { CircularProgress } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const QuoteCards = () => {
  const { loading, error, data } = useQuery(GET_QUOTES);

  if (loading) return <CircularProgress className="m-8" />;
  if (error) return `Error! ${error.message}`;

  const avis = data?.avisClients?.nodes;

  return (
    <>
      <h1 className="text-light dark:text-dark">NOS CLIENTS</h1>
      <div className="flex w-full flex-wrap align-center justify-center">
        {data && avis ? (
          <>
            {avis?.map((avi) => (
              <div
                key={avi.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 p-4"
              >
                <div className="rounded p-4 overflow-hidden shadow-lg bg-alabaster dark:bg-pewter text-light dark:text-dark">
                  <div className="flex gap-4 items-center">
                    <img
                      alt={` 's avatar`}
                      className="rounded-full w-[70px] h-[70px] object-cover"
                      src={avi?.avis_acf?.mainImage?.sourceUrl}
                    />
                    <div className="flex items-center flex-wrap flex-col">
                      <h3 className="text-sm font-semibold self-start">
                        {avi?.avis_acf?.nom} {avi?.avis_acf?.prenom} -{" "}
                        <span className="font-light">
                          {avi?.avis_acf?.entreprise}
                        </span>
                      </h3>
                      <span className="self-start">
                        <StarIcon
                          fontSize="small"
                          style={{ color: "#FBBF77", fontSize: "15px" }}
                        />
                        <StarIcon
                          fontSize="small"
                          style={{ color: "#FBBF77", fontSize: "15px" }}
                        />
                        <StarIcon
                          fontSize="small"
                          style={{ color: "#FBBF77", fontSize: "15px" }}
                        />
                        <StarIcon
                          fontSize="small"
                          style={{ color: "#FBBF77", fontSize: "15px" }}
                        />
                        <StarIcon
                          fontSize="small"
                          style={{ color: "#FBBF77", fontSize: "15px" }}
                        />
                      </span>
                    </div>
                  </div>

                  <p className="flex justify-between text-xs pt-3 min-h-[90px] items-center">
                    <FormatQuoteIcon className="self-start" />
                    {avi?.avis_acf?.commentaire}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1>Rien à afficher</h1>
        )}
      </div>
    </>
  );
};

export default QuoteCards;
