import { Link } from "react-router-dom";

export const FooterCol = (props) => {
  return (
    <div>
      <h2 className="mb-6 text-sm tracking-tighter font-semibold uppercase">
        {props.title}
      </h2>
      {props.blank ? (
        <ul>
          <li className="mb-4">
            <a
              target="_blank"
              href={props.link1}
              className="customHover dark:before:bg-light"
            >
              {props.subtitle1}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href={props.link2}
              className="customHover dark:before:bg-light"
            >
              {props.subtitle2}
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="mb-4">
            <Link to={props.link1} className="customHover dark:before:bg-light">
              {props.subtitle1}
            </Link>
          </li>
          <li>
            <Link to={props.link2} className="customHover dark:before:bg-light">
              {props.subtitle2}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export const FooterLink = (props) => {
  return (
    <span className="p-0 text-light dark:text-dark hover:text-gray-400 hover:bg-transparent  dark:hover:text-gray-400 duration-300">
      <a target="_blank" href={props.link}>
        {props.icon}
      </a>
    </span>
  );
};
