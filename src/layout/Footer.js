import React from "react";
import { Link } from "react-router-dom";

import { Button, ListItem } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

const Footer = () => {
  const FooterCol = (props) => {
    return (
      <div>
        <h2 className="mb-6 text-sm font-semibold uppercase">{props.title}</h2>
        <ul>
          <Link to={props.link1} className="customHover dark:before:bg-light">
            {props.subtitle1}
          </Link>
          <li className="mb-4"></li>
          <li>
            <Link to={props.link2} className="customHover dark:before:bg-light">
              {props.subtitle2}
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const FooterLink = (props) => {
    return (
      <ListItem
        disablePadding
        className="text-light dark:text-dark hover:text-gray-400 hover:bg-transparent  dark:hover:text-gray-400 duration-300"
      >
        <Link to={props.link}>{props.icon}</Link>
      </ListItem>
    );
  };
  return (
    <footer className="p-4 bg-alabaster sm:p-6 dark:bg-pewter">
      <div className="md:flex md:justify-around">
        <div className="mb-6 md:mb-0">
          <Button className="p-0 bg-transparent">
            <Link to="/" className="flex items-center">
              <AirplaneTicketIcon className="text-light dark:text-dark mr-3 h-8" />
              <span className="text-light font-semibold dark:text-dark text-lg ">
                TravelCompany
              </span>
            </Link>
          </Button>
        </div>
        <div className="flex gap-16 md:justify-between text-light dark:text-dark">
          <FooterCol
            title="Ressources"
            link1="/about"
            subtitle1="Flowbite"
            link2="/about"
            subtitle2="Tailwind CSS"
          />
          <FooterCol
            title="Follow Us"
            link1="/about"
            subtitle1="Github"
            link2="/about"
            subtitle2="Discord"
          />
          <FooterCol
            title="Legal"
            link1="/about"
            subtitle1="Privacy Policy"
            link2="/about"
            subtitle2="Terms & Conditions"
          />
        </div>
      </div>
      <hr className="my-6 border-light sm:mx-auto dark:border-dark lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between text-light dark:text-dark">
        <Link to="/home" className="text-sm sm:text-center">
          ©2022
          <span className="customHover dark:before:bg-light">
            TravelCompany™
          </span>
          . All Rights Reserved.
        </Link>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <FooterLink icon={<FacebookIcon fontSize="small" />} link="/about" />
          <FooterLink icon={<InstagramIcon fontSize="small" />} link="/about" />
          <FooterLink icon={<TwitterIcon fontSize="small" />} link="/about" />
          <FooterLink icon={<WhatsAppIcon fontSize="small" />} link="/about" />
          <FooterLink icon={<GitHubIcon fontSize="small" />} link="/about" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
