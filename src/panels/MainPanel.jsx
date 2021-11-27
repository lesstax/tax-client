import { StarHalf, StarRate } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import "../res/css/home.css";
const MainPanel = () => {
  return (
    <Grid container justify="center" alignItems="center" className="home-main">
      <Grid xs={0} sm={1} item></Grid>
      <Grid xs={12} sm={10} align="center" item>
        <Typography>Welcome to LesTax</Typography>
        <Typography variant="h3" className="home-main-des">
          Easiest Way of e-filing your <br /> Income Tax Return in India
        </Typography>
        <div className="home-rating-icons">
          <StarRate className="home-icon-star" />
          <StarRate className="home-icon-star" />
          <StarRate className="home-icon-star" />
          <StarRate className="home-icon-star" />
          <StarHalf className="home-icon-star" />
        </div>
        [Rated 4.5 stars by customers like you]
        <br />
        <Button
          variant="outlined"
          className="home-rating-icons"
          color="success"
        >
          Get Started
        </Button>
      </Grid>
      <Grid xs={0} sm={1} item></Grid>
    </Grid>
  );
};

export default MainPanel;
