import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) return null;

  return (
    <section className={isDark ? "dark-mode skills-section" : "skills-section"} id="skills" aria-label="Technical skills">
      <Fade bottom duration={800} distance="24px">
        <div className="skills-header">
          <div>
            <span className="section-label">Toolbox</span>
            <h2>Technical Skills</h2>
          </div>
          <p>{skillsSection.subTitle}</p>
        </div>

        <div className="skills-panel">
          <div className="skills-index" aria-hidden="true">
            <span>STACK</span>
            <strong>12</strong>
            <span>CORE TOOLS</span>
          </div>
          <div className="skills-orbs-div">
            <SoftwareSkill />
          </div>
        </div>
      </Fade>
    </section>
  );
}
