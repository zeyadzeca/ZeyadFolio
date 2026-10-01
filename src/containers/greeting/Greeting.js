import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import SpaceExplorer from "../../components/spaceExplorer/SpaceExplorer";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) return null;

  return (
    <Fade bottom duration={900} distance="30px">
      <section className="hero" id="greeting" aria-label="Introduction">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker">FULL STACK DEVELOPER / BACKEND FOCUS</span>
            <h1 className={isDark ? "dark-mode hero-title" : "hero-title"}>
              {greeting.title} <span aria-hidden="true">{emoji("↗")}</span>
            </h1>
            <p className="hero-subtitle">{greeting.subTitle}</p>

            <div className="hero-actions">
              <Button text="View My Work" href="#projects" />
              <Button text="Let’s Talk" href="#contact" className="secondary-button" />
            </div>

            <div className="hero-meta">
              <SocialMedia />
              <span className="hero-note">Open to opportunities & collaborations</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-label">01 / ENGINEERING</div>
            <SpaceExplorer />
            <div className="hero-visual-card">
              <span>Current focus</span>
              <strong>.NET · Node.js · APIs · SQL</strong>
            </div>
          </div>
        </div>
        <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>
    </Fade>
  );
}
