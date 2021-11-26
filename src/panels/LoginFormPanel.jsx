import { Button, Grid, TextField, Typography } from "@mui/material";
import { AlternateEmail, AddIcCall } from "@mui/icons-material";
import "../res/css/login.css";
function LoginFormPanel() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh", backgroundColor: "#f7f7f7" }}
    >
      <Grid item xs={0} sm={1} md={1}></Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={5}
        style={{ backgroundColor: "#e3ebef", padding: 50, height: 510 }}
      >
        <h2 className="login-headding">Register</h2>
        <h1 className="login-summery">
          Looking for tax preparation help? Register Now to online file your tax
          return. Its Easy, Fast, Convenient & Secure.
        </h1>
        <Grid item container>
          <table>
            <tr>
              <td style={{ padding: 20 }}>
                <AddIcCall sx={{ fontSize: 42 }} />
              </td>
              <td>
                <Typography style={{ fontSize: 14 }}>Get in touch:</Typography>
                <Typography>+91 9496-09-40-009</Typography>
              </td>
            </tr>
          </table>
        </Grid>
        <Grid item container>
          <table>
            <tr>
              <td style={{ padding: 20 }}>
                <AlternateEmail sx={{ fontSize: 42 }} />
              </td>
              <td>
                <Typography style={{ fontSize: 14 }}>e-mail:</Typography>
                <Typography>support@tax.com</Typography>
              </td>
            </tr>
          </table>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={5}
        container
        style={{ backgroundColor: "white", padding: 50, height: 510 }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            fullWidth
            id="standard-basic"
            label="First Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ paddingTop: 10 }}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Last Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ paddingTop: 10 }}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Email Address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ paddingTop: 10 }}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Mobile Number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ paddingTop: 10 }}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} className="login-button-container" md={12}>
          <Button
            fullWidth
            className="login-submit-button"
            color="success"
            variant="contained"
          >
            Register
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={0} sm={1} md={1}></Grid>
    </Grid>
  );
}

export default LoginFormPanel;
