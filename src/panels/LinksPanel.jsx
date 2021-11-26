import { KeyboardArrowDown } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "../res/css/navbar.css";

const LinksPanel = ({ handleClick, navigate, onMouseOver, onMouseOut }) => {
  const [clickedButton, setClickedButton] = useState("");
  const mouseEnter = (e) => {
    setClickedButton(e.currentTarget.id);
    onMouseOver();
  };
  const blogClick = (e) => {
    setClickedButton(e.currentTarget.id);
  };
  const contactUsClick = (e) => {
    setClickedButton(e.currentTarget.id);
  };
  return (
    <>
      <Button
        className={
          clickedButton === "btn-service" ? "nav-buttton-green" : "nav-buttton"
        }
        id="btn-service"
        onClick={handleClick}
        onMouseEnter={mouseEnter}
        endIcon={<KeyboardArrowDown />}
      >
        Services
      </Button>
      <Button
        className={
          clickedButton === "btn-blog" ? "nav-buttton-green" : "nav-buttton"
        }
        onClick={blogClick}
        id="btn-blog"
      >
        Blog
      </Button>
      <Button
        className={
          clickedButton === "btn-contact-us"
            ? "nav-buttton-green"
            : "nav-buttton"
        }
        onClick={contactUsClick}
        id="btn-contact-us"
      >
        Contact with us
      </Button>
      <Button
        disableElevation
        variant="contained"
        size="small"
        style={{ fontSize: 12, backgroundColor: "#56ba4b" }}
        onClick={() => navigate("/login-or-registration")}
      >
        Log In / Sign Up
      </Button>
    </>
  );
};

export default LinksPanel;
