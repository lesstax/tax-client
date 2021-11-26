import { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import DrowerPanel from "./DrowerPanel";
import { useNavigate } from "react-router-dom";
import LinksPanel from "./LinksPanel";
import { KeyboardArrowRight } from "@mui/icons-material";
import "../res/css/navbar.css";

const HeaderPanel = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLinks, setShowLinks] = useState(false);
  const [openDrower, setOpenDrower] = useState(false);
  const [selectedElement, setSelectedElement] = useState("");
  const matches = useMediaQuery("(max-width:600px)");
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onOpenDrowerClick = () => {
    setOpenDrower(true);
  };
  const onMouseOver = () => {
    console.log("here");
    setShowLinks(true);
  };
  const onMouseOut = () => {
    console.log("out");
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
      <Box
        elevation={0}
        style={{
          backgroundColor: "white",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={2} sm={2}>
              <IconButton onClick={() => navigate("/")}>
                <Typography>Logo</Typography>
              </IconButton>
            </Grid>
            <Grid item xs={10} sm={10} align="right">
              {matches ? (
                <>
                  <DrowerPanel
                    openDrower={openDrower}
                    setOpenDrower={setOpenDrower}
                  />
                  <IconButton onClick={onOpenDrowerClick}>
                    <MenuIcon />
                  </IconButton>
                </>
              ) : (
                <LinksPanel
                  handleClose={handleClose}
                  handleClick={handleClick}
                  onOpenDrowerClick={onOpenDrowerClick}
                  navigate={navigate}
                  onMouseOver={onMouseOver}
                />
              )}
            </Grid>
          </Grid>
        </Toolbar>
        {showLinks ? (
          <Paper onMouseLeave={onMouseOut} onMouseEnter={onMouseOver}>
            <Grid container>
              <Grid item sm={4} style={{ padding: 20 }}>
                <Grid item container style={{ padding: 10 }}>
                  <Typography className="navbar-main-headder green-color">
                    Services
                  </Typography>
                  <Typography className="navbar-content">
                    Let our Expert CA’s take care of all your tax needs, you
                    just relax and laid back.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sm={4} style={{ padding: 20 }}>
                <Grid item sm={12} container style={{ padding: 10 }}>
                  <Grid
                    item
                    container
                    onMouseEnter={changeSelectedElementEnter}
                    onMouseLeave={changeSelectedElementLeave}
                    id="incomeTaxReturn"
                    style={{ cursor: "pointer" }}
                  >
                    <Grid
                      item
                      container
                      alignItems="center"
                      style={{
                        fontWeight: "bold",
                        color:
                          selectedElement === "incomeTaxReturn"
                            ? "#56ba4b"
                            : "black",
                      }}
                    >
                      Income Tax return
                      <KeyboardArrowRight />
                    </Grid>
                    <Grid item className="navbar-content">
                      CA assisted tax filing plans for ITR 1, ITR 2, ITR 3 & ITR
                      4
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    onMouseEnter={changeSelectedElementEnter}
                    onMouseLeave={changeSelectedElementLeave}
                    id="incomeTaxNotice"
                    style={{ cursor: "pointer" }}
                  >
                    <Grid
                      item
                      container
                      alignItems="center"
                      style={{
                        fontWeight: "bold",
                        color:
                          selectedElement === "incomeTaxNotice"
                            ? "#56ba4b"
                            : "black",
                      }}
                    >
                      Income Tax Notice
                      <KeyboardArrowRight />
                    </Grid>
                    <Grid item className="navbar-content">
                      CA assistance for Income Tax Notice for Individuals
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={4} style={{ padding: 20 }}>
                <Grid item container style={{ padding: 10 }}>
                  <Grid
                    item
                    id="incomeTaxPlanning"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={changeSelectedElementEnter}
                    onMouseLeave={changeSelectedElementLeave}
                  >
                    <Grid
                      item
                      container
                      alignItems="center"
                      style={{
                        fontWeight: "bold",
                        color:
                          selectedElement === "incomeTaxPlanning"
                            ? "#56ba4b"
                            : "black",
                      }}
                    >
                      Income Tax Planning
                      <KeyboardArrowRight />
                    </Grid>
                    <Grid item className="navbar-content">
                      CA assisted tax saving planning for
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    id="individualsDedicatedCA"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={changeSelectedElementEnter}
                    onMouseLeave={changeSelectedElementLeave}
                  >
                    <Grid
                      item
                      container
                      alignItems="center"
                      style={{
                        fontWeight: "bold",
                        color:
                          selectedElement === "individualsDedicatedCA"
                            ? "#56ba4b"
                            : "black",
                      }}
                    >
                      Individuals Dedicated CA for a year
                      <KeyboardArrowRight />
                    </Grid>
                    <Grid item className="navbar-content">
                      CA assistance throughout the year to maximise your tax
                      savings
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default HeaderPanel;
