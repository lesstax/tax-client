import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterPanel = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: 10 }}
    >
      <Grid item xs={12} sm={3} style={{ fontSize: 12 }}>
        © 2021 Tax. All Rights Reserved.
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography align="center" style={{ fontSize: 12 }}>
          +91 9496-09-40-009 | support@tax.com
        </Typography>
      </Grid>
      <Grid item align="center" xs={12} sm={3}>
        <FacebookIcon sx={{ color: "#1877f2" }} fontSize="small" />
        <TwitterIcon sx={{ color: "#1D9BF9" }} fontSize="small" />
        <LinkedInIcon sx={{ color: "#0a66c2" }} fontSize="small" />
        <YouTubeIcon sx={{ color: "#f00" }} fontSize="small" />
        <InstagramIcon fontSize="small" />
      </Grid>
      <Grid item align="right" xs={12} sm={3}>
        <Typography style={{ fontSize: 12 }}>
          Terms and condition|privacy policy
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterPanel;
