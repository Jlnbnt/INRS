import React from "react";

import {
  SocialLinkIcon,
  MobileSocialLink,
} from "../Cards/components/CardComponents";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
              <img
                alt={acf?.photo?.altText}
                className="max-w-full w-full group-hover:scale-110 duration-700 ease-in-out"
                src={acf?.photo?.sourceUrl}
              />
              <div className="hidden md:block">
                <div className="absolute left-0 top-0">
                  <ul className="flex gap-3 p-4 text-dark">
                    {acf?.socials?.linkedin && (
                      <SocialLinkIcon
                        link={acf?.socials?.linkedin}
                        icon={<LinkedInIcon />}
                      />
                    )}
                    {acf?.socials?.twitter && (
                      <SocialLinkIcon
                        link={acf?.socials?.twitter}
                        icon={<TwitterIcon />}
                      />
                    )}
                    {acf?.socials?.instagram && (
                      <SocialLinkIcon
                        link={acf?.socials?.instagram}
                        icon={<InstagramIcon />}
                      />
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <h3 className="text-sm font-semibold h-[40px]">
                {acf.prenom} {acf.nom} -{" "}
                <span className="font-light">{acf.poste}</span>
              </h3>

              <p className="flex justify-between text-xs py-3 min-h-[90px] items-center">
                <FormatQuoteIcon className="self-start" />
                {acf.description}
              </p>

              <div className="flex gap-4 md:hidden">
                {acf?.socials?.linkedin && (
                  <MobileSocialLink
                    link={acf?.socials?.linkedin}
                    icon={<LinkedInIcon />}
                  />
                )}
                {acf?.socials?.twitter && (
                  <MobileSocialLink
                    link={acf?.socials?.twitter}
                    icon={<TwitterIcon />}
                  />
                )}
                {acf?.socials?.instagram && (
                  <MobileSocialLink
                    link={acf?.socials?.instagram}
                    icon={<InstagramIcon />}
                  />
                )}
              </div>
              <hr className="my-4 border-light sm:mx-auto dark:border-dark" />
              <div className="flex  gap-4 items-center text-xs h-[32px]">
                <span>Intérêts :</span>
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
