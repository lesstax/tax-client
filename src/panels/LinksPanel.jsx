import { KeyboardArrowDown } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
const LinksPanel = ({ onMouseOver }) => {
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
    </>
  );
};

export default LinksPanel;
