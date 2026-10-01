import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {contactInfo, greeting} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={800} distance="20px">
      <section className="cta-section" id="contact" aria-label="Contact">
        <div className="cta-inner">
          <div className="cta-topline">
            <span className="section-label">Have a project in mind?</span>
            <span className="cta-index">LET’S CONNECT / 07</span>
          </div>

          <div className="cta-grid">
            <div>
              <h2>Let’s turn a problem into a product.</h2>
              <p className={isDark ? "dark-mode" : ""}>{contactInfo.subtitle}</p>
            </div>

            <div className="cta-actions">
              <Button text="Start a Conversation ↗" href={`mailto:${contactInfo.email_address}`} />
              {greeting.resumeLink ? (
                <Button
                  text="View Resume"
                  href={greeting.resumeLink}
                  newTab={true}
                  className="secondary-button"
                />
              ) : null}
              <a className="cta-email" href={`mailto:${contactInfo.email_address}`}>
                {contactInfo.email_address}
              </a>
              <SocialMedia />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
