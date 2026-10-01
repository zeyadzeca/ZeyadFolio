import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <section
        className="education-section"
        id="education"
        aria-label="Knowledge Journey"
      >
        <span className="section-orbit">Knowledge Planet</span>
        <h1 className="education-heading">Knowledge Journey</h1>
        <p className="education-intro">
          A timeline through stations of learning — from Earth to the next
          destination.
        </p>
        <div className="education-timeline">
          <ol className="knowledge-rail">
            <li className="orbit-stop">
              <span className="orbit-dot earth" />
              <p>Earth</p>
            </li>
            <li className="orbit-stop">
              <span className="orbit-dot knowledge" />
              <p>Knowledge Planet</p>
            </li>
            <li className="orbit-stop">
              <span className="orbit-dot station" />
              <p>University Space Station</p>
            </li>
            <li className="orbit-stop">
              <span className="orbit-dot future" />
              <p>Future Destination</p>
            </li>
          </ol>
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard
                key={index}
                school={school}
                stationLabel={
                  index === 0
                    ? "University Space Station"
                    : `Learning Station ${index + 1}`
                }
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return null;
}
