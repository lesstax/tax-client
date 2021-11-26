import { Grid } from "@mui/material";
import { ArrowForward, FormatQuote } from "@mui/icons-material";
import "../res/css/home.css";

const FullFillPanel = () => {
  return (
    <>
      <Grid
        item
        align="center"
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 50,
          marginBottom: 30,
        }}
      >
        How we will fulfill your tax needs
      </Grid>
      <Grid container style={{ marginBottom: 20, marginTop: 20 }}>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={10} container alignItems="center">
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={3} align="center" sm={1} style={{ marginTop: 20 }}>
            Register
          </Grid>
          <Grid item xs={3} align="center" sm={1} style={{ marginTop: 20 }}>
            <ArrowForward className="icon-arrow" />
          </Grid>
          <Grid item xs={3} align="center" sm={1} style={{ marginTop: 20 }}>
            Choose Plan
          </Grid>
          <Grid item xs={3} align="center" sm={1} style={{ marginTop: 20 }}>
            <ArrowForward className="icon-arrow" />
          </Grid>
          <Grid item xs={3} align="center" sm={1} style={{ marginTop: 20 }}>
            Get your Expert Assigned to you
          </Grid>
          <Grid item xs={3} align="center" sm={1} style={{ marginTop: 20 }}>
            <ArrowForward className="icon-arrow" />
          </Grid>
          <Grid item xs={3} align="center" sm={1} style={{ marginTop: 20 }}>
            Have a meeting
          </Grid>
          <Grid item xs={3} align="center" sm={1} style={{ marginTop: 20 }}>
            <ArrowForward className="icon-arrow" />
          </Grid>
          <Grid
            item
            align="center"
            style={{ fontWeight: "bold", fontSize: 20, marginTop: 20 }}
            xs={12}
            sm={2}
          >
            Complete filing
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>
      <Grid
        item
        align="center"
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 80,
          marginBottom: 80,
        }}
      >
        <FormatQuote
          style={{ fontSize: 30, marginRight: 20, color: "#56ba4b" }}
        />
        Don't worry, we are there for your post filling also for your all
        concerns
        <FormatQuote
          style={{ fontSize: 30, marginLeft: 20, color: "#56ba4b" }}
        />
      </Grid>
    </>
  );
};

export default FullFillPanel;
