import { Link } from "react-router-dom";

export const HomepageLink = ({ text, link, icon }) => {
  return (
    <Link
      to={link}
      className="whitespace-nowrap flex justify-center items-center flex-col gap-2 font-semibold hover:text-light/50 dark:hover:text-dark/50 duration-700"
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

export const ExpertisesIcons = ({ icon, alt, title, text }) => {
  return (
    <div className="self-start p-1 flex flex-col justify-center items-start">
      <img
        className="md:self-center filter-dark dark:filter-light w-14 h-14 pb-2"
        src={icon}
        alt={alt}
      />
      <h2 className="font-semibold md:self-center pb-2">{title}</h2>
      <p>{text}</p>
    </div>
  );
};
