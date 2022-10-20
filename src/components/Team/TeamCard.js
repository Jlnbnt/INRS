import React from "react";

import {
  TagInfo,
  SocialLinkIcon,
  MobileSocialLink,
} from "../Cards/components/CardComponents";

import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamCard = (props) => {
  const acf = props?.props?.equipe_acf;

  return (
    <>
      {props && (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 p-4 ">
          <article className="overflow-hidden shadow-lg bg-alabaster dark:bg-pewter text-light dark:text-dark rounded-lg">
            <div className="group relative w-full h-full overflow-hidden bg:light dark:bg-dark">
              <Link to="">
                <img
                  alt={acf?.photo?.altText}
                  className="max-w-full w-full group-hover:scale-110 duration-700 ease-in-out"
                  src={acf?.photo?.sourceUrl}
                />
              </Link>
              <div className="hidden md:block">
                <div className="absolute left-0 top-0">
                  <ul className="flex gap-3 p-4 text-dark">
                    <SocialLinkIcon
                      link="https://www.instagram.com/"
                      icon={<LinkedInIcon />}
                    />
                    <SocialLinkIcon
                      link="https://www.twitter.com/"
                      icon={<TwitterIcon />}
                    />
                    <SocialLinkIcon
                      link="https://www.instagram.com/"
                      icon={<InstagramIcon />}
                    />
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <h3 className="text-sm font-semibold h-[40px]">
                {acf.nom} {acf.prenom} -{" "}
                <span className="font-light">{acf.poste}</span>
              </h3>
              <div className="flex justify-between text-xs py-3 h-[90px] items-center">
                <p>{acf.description}</p>
              </div>
              <div className="flex gap-4 md:hidden">
                <MobileSocialLink
                  link="https://www.instagram.com"
                  icon={<LinkedInIcon />}
                />
                <MobileSocialLink
                  link="https://www.instagram.com"
                  icon={<TwitterIcon />}
                />
                <MobileSocialLink
                  link="https://www.instagram.com"
                  icon={<InstagramIcon />}
                />
              </div>
              <hr className="my-4 border-light sm:mx-auto dark:border-dark" />
              <div className="flex  gap-4 items-center text-xs h-[32px]">
                <span>Centres d'ntérêts :</span>
                <div className="flex gap-2">
                  {acf?.interets?.map((interet) => (
                    <span
                      key={interet}
                      className="bg-dark dark:bg-light p-2 rounded-xl font-semibold text-xs flex items-center justify-center text-dark dark:text-light text-[10px] h-[15px]"
                      style={{ backgroundColor: `${props.bgColor}` }}
                    >
                      {interet}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default TeamCard;
