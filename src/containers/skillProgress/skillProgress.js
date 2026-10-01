import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar glass-panel">
            <span className="section-orbit">Mission Control</span>
            <h1 className="skills-heading">Signal Strength</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image" aria-hidden="true">
            <div className="signal-sat">
              <span className="sat-body" />
              <span className="sat-wing left" />
              <span className="sat-wing right" />
              <span className="sat-wave" />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
