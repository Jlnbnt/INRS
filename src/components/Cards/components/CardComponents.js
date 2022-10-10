import { Link } from "react-router-dom";

export const TagInfo = (props) => {
  return (
    <span
      className="p-2 rounded-xl text-xs flex items-center justify-center text-white text-[10px] h-[15px]"
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      {props.tag}
    </span>
  );
};

export const SocialLinkIcon = (props) => {
  return (
    <li className="hover:text-gray-400 hover:border-gray-300 flex justify-center items-center p-4 duration-300 transition-all opacity-0 group-hover:opacity-100 ease-in-out rounded-full w-8 h-8 border-[1px] border-white ">
      <Link to={props.link}> {props.icon}</Link>
    </li>
  );
};
