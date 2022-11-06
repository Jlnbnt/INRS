import { ListItem } from "@mui/material";

export const SocialLink = (props) => {
  return (
    <ListItem className="p-0 text-light dark:text-dark hover:text-gray-400 duration-300  hover:bg-transparent dark:hover:text-gray-400">
      {props.link && (
        <a
          rel="noreferrer"
          target="_blank"
          href={props.link}
          aria-label="social-link"
        >
          {props.icon}
        </a>
      )}
      {props.customFunc && (
        <button aria-label={props.icon} onClick={props.customFunc}>
          {props.icon}
        </button>
      )}
    </ListItem>
  );
};
