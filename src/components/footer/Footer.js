import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import SocialMedia from "../socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Thanks for stopping by.
        </p>
        <p
          className={
            isDark ? "dark-mode footer-text end-line" : "footer-text end-line"
          }
        >
          Built with React · .NET · Node.js · SQL
        </p>
        <SocialMedia />
      </footer>
    </Fade>
  );
}
