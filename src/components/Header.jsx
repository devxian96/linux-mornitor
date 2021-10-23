import React, { useState } from "react";
import {
  List,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Inbox as InboxIcon } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ListMenu = () => {
  return (
    <List sx={{ minWidth: "240px" }}>
      <Link to="/">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              primary="홈"
              sx={{ color: "white", textDecoration: "none" }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
};

const Header = () => {
  // Aside Menu 열고닫기
  const [draw, setDraw] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDraw(!draw)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Aside Menu */}
      <Drawer open={draw} onClose={() => setDraw(false)}>
        <ListMenu />
      </Drawer>
    </>
  );
};

export default Header;
