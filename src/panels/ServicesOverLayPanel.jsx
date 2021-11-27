import { KeyboardArrowRight } from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
const ServicesOverLayPanel = ({
  onMouseOut,
  onMouseOver,
  changeSelectedElementEnter,
  changeSelectedElementLeave,
  selectedElement,
}) => {
  return (
    <Paper
      style={{ position: "absolute", top: 60 }}
      onMouseLeave={onMouseOut}
      onMouseEnter={onMouseOver}
    >
      <Grid container>
        <Grid item sm={4} className="navbar-item-container">
          <Grid item container className="navbar-item">
            <Typography className="navbar-main-headder green-color">
              Services
            </Typography>
            <Typography className="navbar-content">
              Let our Expert CA’s take care of all your tax needs, you just
              relax and laid back.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={4} className="navbar-item-container">
          <Grid item sm={12} container className="navbar-item">
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
                    selectedElement === "incomeTaxReturn" ? "#56ba4b" : "black",
                }}
              >
                Income Tax return
                <KeyboardArrowRight />
              </Grid>
              <Grid item className="navbar-content">
                CA assisted tax filing plans for ITR 1, ITR 2, ITR 3 & ITR 4
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
                    selectedElement === "incomeTaxNotice" ? "#56ba4b" : "black",
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
        <Grid item sm={4} className="navbar-item-container">
          <Grid item container className="navbar-item">
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
                CA assistance throughout the year to maximise your tax savings
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ServicesOverLayPanel;
