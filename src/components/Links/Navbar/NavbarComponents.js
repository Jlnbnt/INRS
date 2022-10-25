import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export const SocialLink = (props) => {
  return (
    <ListItem className="p-0 text-light dark:text-dark hover:text-gray-400 duration-300  hover:bg-transparent dark:hover:text-gray-400">
      {props.link && (
        <a target="_blank" href={props.link}>
          {props.icon}
        </a>
      )}
      {props.customFunc && (
        <button onClick={props.customFunc}>{props.icon}</button>
      )}
    </ListItem>
  );
};
