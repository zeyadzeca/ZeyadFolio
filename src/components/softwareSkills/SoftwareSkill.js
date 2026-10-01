import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

const planetTone = skillName => {
  const name = skillName.toLowerCase();
  if (name.includes("html") || name.includes("css") || name.includes("sass"))
    return "tone-web";
  if (name.includes("react")) return "tone-react";
  if (name.includes("node")) return "tone-node";
  if (name.includes("python")) return "tone-python";
  if (name.includes("docker")) return "tone-docker";
  if (name.includes("sql") || name.includes("database")) return "tone-sql";
  if (name.includes("aws") || name.includes("firebase")) return "tone-cloud";
  if (name.includes("js") || name.includes("javascript")) return "tone-js";
  return "";
};

export default function SoftwareSkill() {
  return (
    <ul className="dev-icons" aria-label="Software engineering technologies">
      {skillsSection.softwareSkills.map((skills, i) => {
        return (
          <li
            key={i}
            className={`software-skill-inline ${planetTone(
              skills.skillName
            )} tone-${i % 6}`}
            style={{"--delay": `${i * 0.12}s`}}
            aria-label={skills.skillName}
          >
            <span className="skill-orb">
              <i className={skills.fontAwesomeClassname} aria-hidden="true"></i>
            </span>
            <p>{skills.skillName}</p>
          </li>
        );
      })}
    </ul>
  );
}
