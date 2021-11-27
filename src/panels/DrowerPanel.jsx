import {
  ExpandLess,
  ExpandMore,
  SupportAgent,
  RssFeed,
  PermPhoneMsg,
  Login,
  Logout,
} from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
  ListItemAvatar,
  Avatar,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginedUser } from "../atom/taxatoms";

const DrowerPanel = ({ openDrower, setOpenDrower, navigate }) => {
  const [loginedUserData, setLoginedUserData] = useRecoilState(loginedUser);
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
        {loginedUserData.firstName !== "" && (
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#56ba4b" }}>
                {loginedUserData.firstName.charAt(0).toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={loginedUserData.firstName}
              secondary={loginedUserData.lastName}
            />
          </ListItem>
        )}
        <ListItemButton
          divider
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ListItemIcon>
            <SupportAgent className="navbar-icon-color" />
          </ListItemIcon>
          <ListItemText primary="Services" />
          {open ? (
            <ExpandLess className="navbar-icon-color" />
          ) : (
            <ExpandMore className="navbar-icon-color" />
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
            <RssFeed className="navbar-icon-color" />
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
            <PermPhoneMsg className="navbar-icon-color" />
          </ListItemIcon>
          <ListItemText primary="Contact With Us" />
        </ListItemButton>
        {loginedUserData.firstName === "" ? (
          <ListItemButton
            divider
            onClick={() => {
              navigate("/login-or-registration");
              setOpenDrower(false);
            }}
          >
            <ListItemIcon>
              <Login className="navbar-icon-color" />
            </ListItemIcon>
            <ListItemText primary="Login / Sign Up" />
          </ListItemButton>
        ) : (
          <ListItemButton
            divider
            onClick={() => {
              setLoginedUserData({
                firstName: "",
                lastName: "",
                email: "",
                mobileNumber: "",
                password: "",
              });
              setOpenDrower(false);
            }}
          >
            <ListItemIcon>
              <Login className="navbar-icon-color" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        )}
      </List>
    </Drawer>
  );
};

export default DrowerPanel;
