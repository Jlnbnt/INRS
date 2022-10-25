import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { ReactComponent as INRSLOGO } from "../components/Assets/INRSLOGO.svg";
import {
  FooterCol,
  FooterLink,
} from "../components/Links/Footer/FooterComponents";

import { useLocation } from "react-router-dom";

const Footer = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      {!pathname.includes("/jobs") && (
        <footer className="p-4 bg-alabaster sm:p-6 dark:bg-pewter">
          <div className="md:flex md:justify-around">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <INRSLOGO className="w-[150px] md:w-[200px] fill-light dark:fill-dark" />{" "}
              </Link>
            </div>
            <div className="flex gap-16 md:justify-between text-light dark:text-dark">
              <FooterCol
                blank={true}
                title="Ressources"
                link1="https://reactjs.org/"
                subtitle1="React JS"
                link2="https://tailwindcss.com/"
                subtitle2="Tailwind CSS"
              />
              <FooterCol
                blank={true}
                title="Reseaux"
                link1="https://www.github.com/"
                subtitle1="Github"
                link2="https://www.discord.com/"
                subtitle2="Discord"
              />
              <FooterCol
                title="Legal"
                link1="/pdc"
                subtitle1="Politique de confidentialité"
                link2="/cgu"
                subtitle2="Termes & Conditions"
              />
            </div>
          </div>
          <hr className="my-6 border-light sm:mx-auto dark:border-dark lg:my-8" />
          <div className="pb-2  flex flex-col sm:flex-row items-center  justify-between text-light dark:text-dark">
            <Link to="/cgu" className="text-sm sm:text-center">
              ©2022
              <span className="customHover dark:before:bg-light">
                TravelCompany™
              </span>
              . All Rights Reserved.
            </Link>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <FooterLink
                icon={<FacebookIcon fontSize="small" />}
                link="https://www.facebook.com/"
              />
              <FooterLink
                icon={<InstagramIcon fontSize="small" />}
                link="https://www.instagram.com/"
              />
              <FooterLink
                icon={<TwitterIcon fontSize="small" />}
                link="https://www.twitter.com/"
              />
              <FooterLink
                icon={<LinkedInIcon fontSize="small" />}
                link="https://www.github.com/"
              />
              <FooterLink
                icon={<WhatsAppIcon fontSize="small" />}
                link="https://www.whatsapp.com/"
              />
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
