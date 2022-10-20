import React from "react";

import { Link } from "react-router-dom";

import { TagInfo, SocialLinkIcon } from "./components/CardComponents";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReplyIcon from "@mui/icons-material/Reply";

const EventsCard = ({ post }) => {
  const acf = post?.evenements_acf;
  console.log(acf);
  console.log(typeof acf?.eventprice);
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
              {/* <div className="absolute left-0 top-0">
                <ul className="flex gap-3 p-4 text-dark">
                  <SocialLinkIcon
                    link="https://www.instagram.com/"
                    icon={<InstagramIcon />}
                  />
                  <SocialLinkIcon
                    link="https://www.twitter.com/"
                    icon={<TwitterIcon />}
                  />
                  <SocialLinkIcon
                    link="https://www.instagram.com/"
                    icon={<WhatsAppIcon />}
                  />
                </ul>
              </div>
              <div className="absolute right-0 top-0">
               <div className="flex gap-3 p-4 text-dark dark:text-white">
              <Link to="#">
                <li className="hover:text-gray-400 hover:border-gray-300 flex justify-center items-center px-3 py-1 duration-300 transition-all opacity-0 group-hover:opacity-100 ease-in-out rounded-full border-[1px] border-white ">
                  <button>Button</button>
                </li>
              </Link>
            </div> 
              </div>
              <div className="absolute right-0 bottom-0">
                <div className="flex gap-3 p-4 text-dark dark:text-white">
                  <Link to={`/evenement/${post?.id}`}>
                    <li className="scale-x-[-1] hover:text-gray-400 hover:border-gray-300 flex justify-center items-center p-4 duration-300 transition-all opacity-0 group-hover:opacity-100 ease-in-out rounded-full w-8 h-8 border-[1px] border-white ">
                      <ReplyIcon fontSize="small" />
                    </li>
                  </Link>
                </div>
              </div>*/}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold h-[50px]">
                {acf?.mainTitle}
              </h3>
              <div className="flex justify-between text-xs py-3">
                <h4 className="text-[12px]">
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
                <div className="flex items-center flex-wrap flex-1">
                  <a
                    target="_blank"
                    href={acf?.inscriptionLink}
                    className="customHover dark:before:bg-light font-semibold cursor-pointer"
                  >
                    S'inscrire <span className="font-light">✓</span>
                  </a>
                  {/*  <img
                    alt={`${post?.author?.node?.name}'s avatar`}
                    className="rounded-full w-[32px] h-[32px]"
                    src={post?.author?.node?.avatar?.url}
                  />
                  <p className="ml-2 text-xs uppercase">
                    by
                    <span className="font-bold ">
                      {post?.author?.node?.name}
                    </span>
                  </p> */}
                </div>
                <div className="flex justify-end items-center gap-1 flex-1 flex-wrap">
                  {/*   <TagInfo
                    type={`${post?.__typename}s`}
                    bgColor={
                      acf?.tag === "Tech"
                        ? "#957DAD"
                        : acf?.tag === "Environnement"
                        ? "#3CB371"
                        : acf?.tag === "Business"
                        ? "#898FAD"
                        : acf?.tag === "Voyage"
                        ? "#E9967A"
                        : null
                    }
                    tag={acf?.tag}
                  /> */}
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
