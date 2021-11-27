import { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrowerPanel from "./DrowerPanel";
import LinksPanel from "./LinksPanel";
import { useNavigate } from "react-router-dom";
import ServicesOverLayPanel from "./ServicesOverLayPanel";
import "../res/css/navbar.css";
const HeaderPanel = () => {
  let navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  const [openDrower, setOpenDrower] = useState(false);
  const [selectedElement, setSelectedElement] = useState("");
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
          ) : (
            <Button
              disableElevation
              variant="contained"
              size="small"
              className="navbar-login-button"
              onClick={() => navigate("/login-or-registration")}
            >
              Log In / Sign Up
            </Button>
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
