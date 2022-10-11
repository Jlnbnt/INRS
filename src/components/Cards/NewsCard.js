import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReplyIcon from "@mui/icons-material/Reply";

import { TagInfo, SocialLinkIcon } from "./components/CardComponents";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  const acf = props.props.actualites_custom_fields;
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 p-4">
      <article className="overflow-hidden shadow-lg bg-alabaster dark:bg-pewter text-light dark:text-dark">
        <Link to="/about">
          <div className="group relative w-full h-full overflow-hidden bg:light darl:bg-dark">
            <img
              alt={acf.mainImage.altText}
              className="max-w-full w-full group-hover:scale-110 duration-700 ease-in-out"
              src={acf.mainImage.sourceUrl}
            />
            <div className="absolute left-0 top-0">
              <ul className="flex gap-3 p-4 text-dark dark:text-white">
                <SocialLinkIcon link="/" icon={<InstagramIcon />} />
                <SocialLinkIcon link="/" icon={<TwitterIcon />} />
                <SocialLinkIcon link="/" icon={<WhatsAppIcon />} />
              </ul>
            </div>
            <div className="absolute right-0 top-0">
              <ul className="flex gap-3 p-4 text-dark dark:text-white">
                <a href="#">
                  <li className="hover:text-gray-400 hover:border-gray-300 flex justify-center items-center px-3 py-1 duration-300 transition-all opacity-0 group-hover:opacity-100 ease-in-out rounded-full border-[1px] border-white ">
                    <button>Button</button>
                  </li>
                </a>
              </ul>
            </div>
            <div className="absolute right-0 bottom-0">
              <ul className="flex gap-3 p-4 text-dark dark:text-white">
                <a href="#">
                  <li className="scale-x-[-1] hover:text-gray-400 hover:border-gray-300 flex justify-center items-center p-4 duration-300 transition-all opacity-0 group-hover:opacity-100 ease-in-out rounded-full w-8 h-8 border-[1px] border-white ">
                    <ReplyIcon fontSize="small" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </Link>
        <div className="p-4 whitespace-nowrap">
          <h3 className="text-sm font-semibold pb-3 truncate  ">
            {props.props.title}
          </h3>
          <div className="flex justify-between text-xs">
            <h4>From Japan</h4>
            <h4>{props.props.date}</h4>
          </div>
          <hr className="my-4 border-light sm:mx-auto dark:border-dark" />
          <div className="flex justify-between ">
            <div className="flex items-center flex-wrap flex-1" href="#">
              <img
                alt={`${props.props.author.node.name}'s avatar`}
                className="rounded-full w-[32px] h-[32px]"
                src={props.props.author.node.avatar.url}
              />
              <p className="ml-2 text-xs uppercase">
                by{" "}
                <span className="font-bold ">
                  {props.props.author.node.name}
                </span>
              </p>
            </div>
            <div className="flex justify-end items-center gap-1 flex-1 flex-wrap">
              <TagInfo
                bgColor={
                  acf.tag === "Business"
                    ? "#957DAD"
                    : acf.tag === "Environnement"
                    ? "#B4D5AC"
                    : acf.tag === "Sport"
                    ? "#898FAD"
                    : acf.tag === "Voyage"
                    ? "#E9967A"
                    : null
                }
                tag={acf.tag}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsCard;
