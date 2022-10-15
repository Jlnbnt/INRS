import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/StateProvider";

export const TagInfo = (props) => {
  const { setSearchQuery } = useStateContext();
  return (
    <Link
      onClick={() => setSearchQuery(props.tag)}
      to={`/${props?.type?.toLowerCase()}`}
      className="text-white dark:text-dark hover:text-gray-400 dark:hover:text-gray-400 duration-300 text-xl font-semibold "
    >
      <span
        className="p-2 rounded-xl text-xs flex items-center justify-center text-white text-[10px] h-[15px]"
        style={{ backgroundColor: `${props.bgColor}` }}
      >
        {props.tag}
      </span>
    </Link>
  );
};

export const SocialLinkIcon = (props) => {
  return (
    <li className="hover:text-gray-400 hover:border-gray-300 flex justify-center items-center p-4 duration-300 transition-all opacity-0 group-hover:opacity-100 ease-in-out rounded-full w-8 h-8 border-[1px] border-white ">
      <a target="_blank" href={props.link}>
        {props.icon}
      </a>
    </li>
  );
};
