import {
  ExpandLess,
  ExpandMore,
  SupportAgent,
  RssFeed,
  PermPhoneMsg,
} from "@mui/icons-material";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import "../res/css/navbar.css";

const DrowerPanel = ({ openDrower, setOpenDrower }) => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setOpenDrower(false);
  };
  return (
    <Drawer
      anchor="right"
      open={openDrower}
      ModalProps={{ onBackdropClick: closeMenu }}
    >
      <List component="nav">
        <ListItemButton
          divider
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ListItemIcon>
            <SupportAgent style={{ color: "#56ba4b" }} />
          </ListItemIcon>
          <ListItemText primary="Services" />
          {open ? (
            <ExpandLess style={{ color: "#56ba4b" }} />
          ) : (
            <ExpandMore style={{ color: "#56ba4b" }} />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText primary="Income Tax return" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Income Tax Notice" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Income Tax Planning" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Individuals Dedicated CA for a year" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          divider
          onClick={() => {
            setOpenDrower(false);
          }}
        >
          <ListItemIcon>
            <RssFeed style={{ color: "#56ba4b" }} />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItemButton>
        <ListItemButton
          divider
          onClick={() => {
            setOpenDrower(false);
          }}
        >
          <ListItemIcon>
            <PermPhoneMsg style={{ color: "#56ba4b" }} />
          </ListItemIcon>
          <ListItemText primary="Contact With Us" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default DrowerPanel;
