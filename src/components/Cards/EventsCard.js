import React from "react";

import { Link } from "react-router-dom";

const EventsCard = ({ post }) => {
  const acf = post?.evenements_acf;

  return (
    <>
      {post && (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 p-4">
          <article className="overflow-hidden shadow-lg bg-alabaster dark:bg-pewter text-light dark:text-dark rounded-lg">
            <div className="group relative w-full h-full overflow-hidden bg:light dark:bg-dark">
              <Link to={`/evenement/${post.id}`}>
                <img
                  alt={acf?.mainImage?.altText}
                  className="max-w-full w-full group-hover:scale-110 duration-700 ease-in-out"
                  src={acf?.mainImage?.sourceUrl}
                />
              </Link>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold h-[60px] line-clamp-3">
                {acf?.mainTitle}
              </h3>
              <div className="flex justify-between text-xs">
                <h4 className="text-[12px] min-h-[32px]">
                  À{" "}
                  <span className="italic font-semibold  ">
                    {acf?.eventPlace}
                  </span>
                </h4>
                <h4 className="text-[12px]">
                  Le{" "}
                  <span className="italic font-semibold  ">
                    {acf?.eventDate}
                  </span>{" "}
                  à{" "}
                  <span className="italic font-semibold  ">
                    {acf?.eventHour}
                  </span>
                </h4>
              </div>
              <hr className="my-4 border-light sm:mx-auto dark:border-dark" />
              <div className="flex justify-between h-[48px]">
                <div className="flex items-center flex-wrap">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={acf?.inscriptionLink}
                    className="customHover dark:before:bg-light font-semibold cursor-pointer"
                  >
                    S'inscrire <span className="font-light">✓</span>
                  </a>
                </div>
                <div className="flex justify-end items-center gap-1 flex-1 flex-wrap">
                  <span className="text-sm">{acf?.eventprice}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default EventsCard;
