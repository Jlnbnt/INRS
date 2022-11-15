import React from "react";

import { ReactComponent as INRSISO } from "../Assets/INRSISO.svg";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import {
  HomepageLink,
  HomepageMediaLink,
} from "../Links/Homepage/HomepageComponents";
import YouTubeIcon from "@mui/icons-material/YouTube";
const HomepageOthers = () => {
  return (
    <div
      className="p-8 justify-around items-center bg-gray-200 dark:bg-dark flex gap-16 flex-wrap  text-light dark:text-dark
         rounded-t-xl w-full"
    >
      <div className="w-full justify-center items-center min-w-[300px] grid grid-cols-3 md:grid-cols-6 gap-14 p-2">
        <HomepageLink
          text="AGENDA"
          link="/evenements"
          icon={<EventAvailableIcon className="w-[50px] h-[50px]" />}
        />
        <HomepageLink
          text="ACTUALITÉS"
          link="/actualites"
          icon={<ArticleIcon className="w-[50px] h-[50px]" />}
        />
        <HomepageLink
          text="INRS"
          link="/about"
          icon={
            <INRSISO className="fill-light dark:fill-dark w-[50px] h-[50px] hover:fill-light/50 dark:hover:fill-dark/50 duration-700" />
          }
        />
        <HomepageLink
          text="CARRIÈRE"
          link="/jobs"
          icon={<WorkIcon className="w-[50px] h-[50px]" />}
        />
        <HomepageMediaLink
          text="MEDIA"
          link="https://alpha.inrscience.com/wp-content/uploads/2022/10/VideoComp.mp4"
          icon={<YouTubeIcon className="w-[50px] h-[50px]" />}
        />
        <HomepageLink
          text="BLOG"
          link="/blogs"
          icon={<NewspaperIcon className="w-[50px] h-[50px]" />}
        />
      </div>
    </div>
  );
};

export default HomepageOthers;
