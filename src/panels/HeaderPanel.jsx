import { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrowerPanel from "./DrowerPanel";
import LinksPanel from "./LinksPanel";
import { useNavigate } from "react-router-dom";
import ServicesOverLayPanel from "./ServicesOverLayPanel";
import "../res/css/navbar.css";
import { loginedUser } from "../atom/taxatoms";
import { useRecoilState } from "recoil";
import { AccountCircle, Logout } from "@mui/icons-material";

const HeaderPanel = () => {
  let navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  const [openDrower, setOpenDrower] = useState(false);
  const [selectedElement, setSelectedElement] = useState("");
  const [loginedUserData, setLoginedUserData] = useRecoilState(loginedUser);
  const matches = useMediaQuery("(max-width:898px)");
  const onOpenDrowerClick = () => {
    setOpenDrower(true);
  };
  const onMouseOver = () => {
    setShowLinks(true);
  };
  const onMouseOut = () => {
    setShowLinks(false);
  };
  const changeSelectedElementLeave = (e) => {
    setSelectedElement("");
  };
  const changeSelectedElementEnter = (e) => {
    setSelectedElement(e.currentTarget.id);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setLoginedUserData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      password: "",
    });
    setAnchorEl(null);
  };
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{
          height: 60,
          backgroundColor: "white",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <Grid sm={4} xs={4} item>
          <IconButton onClick={() => navigate("/")}>
            <Typography>Logo</Typography>
          </IconButton>
        </Grid>
        <Grid sm={4} xs={4} item align="center">
          {!matches && (
            <LinksPanel
              onOpenDrowerClick={onOpenDrowerClick}
              navigate={navigate}
              onMouseOver={onMouseOver}
            />
          )}
        </Grid>
        <Grid sm={4} xs={4} item align="right">
          {matches ? (
            <>
              <DrowerPanel
                openDrower={openDrower}
                setOpenDrower={setOpenDrower}
                navigate={navigate}
              />
              <IconButton onClick={onOpenDrowerClick}>
                <MenuIcon />
              </IconButton>
            </>
          ) : loginedUserData.firstName === "" ? (
            <Button
              disableElevation
              variant="contained"
              size="small"
              className="navbar-login-button"
              onClick={() => navigate("/login-or-registration")}
            >
              Log In / Sign Up
            </Button>
          ) : (
            <>
              <Avatar
                className="user-avatar"
                sx={{ bgcolor: "#56ba4b" }}
                aria-controls="basic-menu"
                aria-haspopup="true"
                id="basic-button"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {loginedUserData.firstName.charAt(0).toUpperCase()}
              </Avatar>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircle fontSize="small" className="user-icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary={loginedUserData.firstName}
                    secondary={loginedUserData.lastName}
                  />
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" className="user-icon" />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </Menu>
            </>
          )}
        </Grid>
        {showLinks ? (
          <ServicesOverLayPanel
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
            changeSelectedElementEnter={changeSelectedElementEnter}
            changeSelectedElementLeave={changeSelectedElementLeave}
            selectedElement={selectedElement}
          />
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
};

export default HeaderPanel;
