import { Link } from "react-router-dom";

export const HomepageLink = ({ text, link, icon }) => {
  return (
    <Link
      to={link}
      className="flex justify-center items-center flex-col gap-2 font-semibold hover:text-light/50 dark:hover:text-dark/50 duration-700"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export const HomepageMediaLink = ({ text, link, icon }) => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={link}
      className="flex justify-center items-center flex-col gap-2 font-semibold hover:text-light/50 dark:hover:text-dark/50 duration-700"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};
