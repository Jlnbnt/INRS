import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { ReactComponent as INRSLOGO } from "../components/Assets/INRSLOGO.svg";
import {
  FooterCol,
  FooterLink,
} from "../components/Links/Footer/FooterComponents";

import { useStateContext } from "../context/StateProvider";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const pathname = useLocation().pathname;
  const { handleContactOpen } = useStateContext();
  return (
    <>
      {!pathname.includes("/jobs") && (
        <footer className="p-4 bg-alabaster sm:p-6 dark:bg-pewter">
          <div className="sm:flex sm:justify-around">
            <div className="mb-6 md:mb-0">
              <Link
                aria-label="footer-link"
                to="/"
                className="flex items-center"
              >
                <INRSLOGO className="w-[150px] md:w-[200px] fill-light dark:fill-dark" />{" "}
              </Link>
            </div>
            <div className="py-4 md:py-0 flex flex-col sm:flex-row gap-4 md:gap-16 md:justify-between text-light dark:text-dark">
              <FooterCol
                blank={true}
                title="Réseaux"
                link1="https://www.linkedin.com/in/julien-benat/"
                subtitle1="LinkedIn"
                link2="https://github.com/Jlnbnt/INRS"
                subtitle2="Github"
              />
              <FooterCol
                blank={false}
                title="INRS"
                link1="/about"
                subtitle1="À propos"
                link2="/jobs"
                subtitle2="Carrière"
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
            <div className="text-sm  sm:text-center">
              <Link to="/cgu" aria-label="footer-link">
                <span className="customHover dark:before:bg-light">
                  INRS Incorporated©
                </span>{" "}
              </Link>
              2022. Tous droits réservés.
            </div>
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
                icon={<EmailIcon fontSize="small" />}
                customFunc={handleContactOpen}
              />
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
