import { StarHalf, StarRate } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";

const MainPanel = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: "80vh", background: "#f8f8f8" }}
    >
      <Grid xs={0} sm={1} item></Grid>
      <Grid xs={12} sm={10} align="center" item>
        <Typography>Welcome to LesTax</Typography>
        <Typography variant="h3" style={{ marginTop: 10, fontWeight: "bold" }}>
          Easiest Way of e-filing your <br /> Income Tax Return in India
        </Typography>
        <div style={{ marginTop: 20 }}>
          <StarRate sx={{ color: "#ffc20f" }} />
          <StarRate sx={{ color: "#ffc20f" }} />
          <StarRate sx={{ color: "#ffc20f" }} />
          <StarRate sx={{ color: "#ffc20f" }} />
          <StarHalf sx={{ color: "#ffc20f" }} />
        </div>
        [Rated 4.5 stars by customers like you]
        <br />
        <Button variant="outlined" style={{ marginTop: 10 }} color="success">
          Get Started
        </Button>
      </Grid>
      <Grid xs={0} sm={1} item></Grid>
    </Grid>
  );
};

export default MainPanel;
