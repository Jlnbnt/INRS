import { Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/StateProvider";

export const NavLink = (props) => {
  const { toggleDrawer } = useStateContext();
  return (
    <>
      <Link to={props.link}>
        <ListItem
          className="hover:bg-white dark:hover:bg-gray-700 duration-300"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ListItemButton className="hover:bg-transparent " disableRipple>
            <ListItemText disableTypography>{props.name}</ListItemText>
            {props.children}
          </ListItemButton>
        </ListItem>
      </Link>
      <Divider />
    </>
  );
};

export const NavAction = (props) => {
  return (
    <>
      <ListItem className="p-5 hover:bg-white dark:hover:bg-gray-700 flex justify-between duration-300">
        <div>
          <Link to={props.link} onClick={props.clear}>
            <div onClick={props.reset}>
              <ListItemText onClick={props.customFunc} disableTypography>
                {props.name}
              </ListItemText>
            </div>
          </Link>
        </div>
        <div>{props.children}</div>
      </ListItem>
    </>
  );
};
