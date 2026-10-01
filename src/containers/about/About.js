import React from "react";
import {Fade} from "react-reveal";
import {aboutSection} from "../../portfolio";
import "./About.scss";

export default function About() {
  if (!aboutSection.display) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <section className="about-section" id="about" aria-label="About me">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-photo-frame">
              <img src={aboutSection.image} alt="Profile" />
            </div>
            <div className="about-status">
              <span className="status-dot" />
              <span>Building • Learning • Shipping</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="section-label">{aboutSection.eyebrow}</span>
            <h2>{aboutSection.title}</h2>
            {aboutSection.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="about-facts">
              {aboutSection.facts.map(fact => (
                <div className="about-fact" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
