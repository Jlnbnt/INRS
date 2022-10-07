import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";

import { sideLinks } from "./utils";

export default function Sidebar({ open, toggleDrawer }) {
  return (
    <>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>CLOSE BTN</ListItemText>
              <ListItemIcon
                sx={{
                  alignItems: "center",
                }}
                onClick={toggleDrawer(false)}
              >
                <ListItemText sx={{ marginRight: "10px" }}>Close</ListItemText>
                <CloseIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ width: 300 }} role="presentation">
          <Divider />
          <List>
            {sideLinks.map((link) => (
              <ListItem
                key={link.title}
                disablePadding
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <ListItemButton>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText>{link.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText>NOT CLOSING CLICK</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText>NOT CLOSING CLICK</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
