import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  AlternateEmail,
  AddIcCall,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import "../res/css/login.css";
import { useState } from "react";
import { validateForm } from "../helper/taxhelper";
import { urls } from "../helper/urls";
import { loginedUser } from "../atom/taxatoms";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router";
function LoginFormPanel() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formValid, setFormValid] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    formValid: false,
  });
  const [loading, setLoading] = useState(false);
  const setLoginedUser = useSetRecoilState(loginedUser);
  let navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleChange = (prop) => (event) => {
    setUserDetails({ ...userDetails, [prop]: event.target.value });
  };
  const onRegisterClick = () => {
    let validated = validateForm(userDetails);
    setFormValid(validateForm(userDetails));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    };
    if (validated.formValid) {
      setLoading(true);
      fetch(urls.save, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setLoginedUser(data);
          navigate("/");
        });
    }
  };
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
            error={formValid.firstName === "invalid"}
            value={userDetails.firstName}
            onChange={handleChange("firstName")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} className="form-item">
          <TextField
            fullWidth
            id="standard-basic"
            label="Last Name"
            variant="outlined"
            error={formValid.lastName === "invalid"}
            value={userDetails.lastName}
            onChange={handleChange("lastName")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} className="form-item">
          <TextField
            fullWidth
            id="standard-basic"
            label="Email Address"
            variant="outlined"
            type="email"
            error={formValid.email === "invalid"}
            value={userDetails.email}
            onChange={handleChange("email")}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} className="form-item">
          <TextField
            fullWidth
            id="standard-basic"
            label="Mobile Number"
            type="number"
            variant="outlined"
            error={formValid.mobileNumber === "invalid"}
            value={userDetails.mobileNumber}
            onChange={handleChange("mobileNumber")}
          />
        </Grid>
        <Grid item xs={12} sm={12} className="form-item">
          <TextField
            fullWidth
            id="standard-basic"
            label="Password"
            variant="outlined"
            error={formValid.password === "invalid"}
            type={showPassword ? "text" : "password"}
            value={userDetails.password}
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          className="login-button-container"
          style={{ m: 1 }}
          md={12}
        >
          <Button
            fullWidth
            className="login-submit-button"
            color="success"
            variant="contained"
            disabled={loading}
            onClick={onRegisterClick}
          >
            Register
          </Button>
          {loading && (
            <CircularProgress size={24} className="login-progress-button" />
          )}
        </Grid>
      </Grid>
      <Grid item xs={0} sm={1} md={1}></Grid>
    </Grid>
  );
}

export default LoginFormPanel;
