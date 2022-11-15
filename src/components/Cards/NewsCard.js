import React from "react";

import { Link } from "react-router-dom";

import { TagInfo, SocialLinkIcon } from "./components/CardComponents";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReplyIcon from "@mui/icons-material/Reply";

const NewsCard = ({ post }) => {
  const acf = post?.actualites_acf;

  return (
    <>
      {post && (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 p-4 ">
          <article className="overflow-hidden shadow-lg bg-alabaster dark:bg-pewter text-light dark:text-dark rounded-lg">
            <div className="group relative w-full h-full overflow-hidden bg:light dark:bg-dark">
              <Link to={`/actualite/${post.id}`}>
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
              <div className="flex justify-between text-xs py-3">
                <h4 className="text-[12px]">
                  Posté le{" "}
                  <span className="italic font-semibold  ">
                    {new Date(post?.date).toLocaleString("fr-FR", {
                      month: "numeric",
                      year: "numeric",
                      day: "numeric",
                    })}
                  </span>
                </h4>
              </div>
              <hr className="my-4 border-light sm:mx-auto dark:border-dark" />
              <div className="flex justify-between h-[48px]">
                <div className="flex items-center flex-wrap">
                  <img
                    alt={`${post?.author?.node?.name}'s avatar`}
                    className="rounded-full w-[32px] h-[32px]"
                    src={post?.author?.node?.avatar?.url}
                  />
                  <p className="ml-2 text-xs uppercase">
                    by{" "}
                    <span className="font-bold ">
                      {post?.author?.node?.name}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end items-center gap-1 flex-1 flex-wrap">
                  <TagInfo
                    type={`${post?.__typename}s`}
                    bgColor={
                      acf?.tag === "Planète"
                        ? "#70AF85"
                        : acf?.tag === "Sciences"
                        ? "#655D8A"
                        : acf?.tag === "Tech"
                        ? "#1572A1"
                        : acf?.tag === "Santé"
                        ? "#BB6464"
                        : null
                    }
                    tag={acf.tag}
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default NewsCard;
