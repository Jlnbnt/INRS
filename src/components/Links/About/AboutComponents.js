export const ServicesIcon = ({ icon, alt, title, text }) => {
  return (
    <div className="self-start p-1 flex flex-col text-center justify-center items-center">
      <img
        className="filter-dark dark:filter-light w-14 h-14 pb-2"
        src={icon}
        alt={alt}
      />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export const AboutIcon = (props) => {
  return (
    <li className="hover:text-gray-400 hover:border-gray-300 flex justify-center items-center p-4 duration-300 transition-all  ease-in-out rounded-full w-8 h-8">
      <a rel="noreferrer" target="_blank" href={props.link}>
        {props.icon}
      </a>
    </li>
  );
};

export const Partner = ({ link, alt }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <img
        className="filter-dark dark:filter-light p-2 w-10/12 h-full"
        src={link}
        alt={alt}
      />
    </div>
  );
};

export const Project = ({ nombre, texte, titre }) => {
  return (
    <div className="flex flex-col items-center font-semibold gap-2">
      <span className="text-6xl text-blue-900 dark:text-blue-700">
        {nombre}
      </span>
      <h2 className="text-2xl text-blue-700 dark:text-blue-500">{titre}</h2>
      <span className="font-normal text-center max-w-[200px]">{texte}</span>
    </div>
  );
};
