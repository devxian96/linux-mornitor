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
  Box,
} from "@mui/material";
import { Inbox as InboxIcon } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Header.css";

const ListMenu = () => {
  return (
    <List sx={{ minWidth: "240px" }}>
      <Box
        sx={{
          width: "100%",
          height: "100px",
          backgroundColor: "primary.main",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ lineHeight: "100px" }}>
          Linux Monitor
        </Typography>
      </Box>
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
      <AppBar position="static" style={{ backgroundColor: "#05121B" }}>
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
            20177145 장석현
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
