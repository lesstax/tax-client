import { Grid } from "@mui/material";
import { ArrowForward, FormatQuote } from "@mui/icons-material";
import "../res/css/home.css";

const FullFillPanel = () => {
  return (
    <>
      <Grid item align="center" className="fullfill-container-hedding">
        How we will fulfill your tax needs
      </Grid>
      <Grid container className="fullfill-container">
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={10} container alignItems="center">
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={3} align="center" sm={1} className="fullfill-steps">
            Register
          </Grid>
          <Grid item xs={3} align="center" sm={1} className="fullfill-steps">
            <ArrowForward className="icon-arrow" />
          </Grid>
          <Grid item xs={3} align="center" sm={1} className="fullfill-steps">
            Choose Plan
          </Grid>
          <Grid item xs={3} align="center" sm={1} className="fullfill-steps">
            <ArrowForward className="icon-arrow" />
          </Grid>
          <Grid item xs={3} align="center" sm={1} className="fullfill-steps">
            Get your Expert Assigned to you
          </Grid>
          <Grid item xs={3} align="center" sm={1} className="fullfill-steps">
            <ArrowForward className="icon-arrow" />
          </Grid>
          <Grid item xs={3} align="center" sm={1} className="fullfill-steps">
            Have a meeting
          </Grid>
          <Grid item xs={3} align="center" sm={1} className="fullfill-steps">
            <ArrowForward className="icon-arrow" />
          </Grid>
          <Grid
            item
            align="center"
            className="fullfill-complete"
            xs={12}
            sm={2}
          >
            Complete filing
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>
      <Grid item align="center" className="fullfill-quote-container">
        <FormatQuote className="fullfill-quote-icon" />
        Don't worry, we are there for your post filling also for your all
        concerns
        <FormatQuote className="fullfill-quote-icon" />
      </Grid>
    </>
  );
};

export default FullFillPanel;
