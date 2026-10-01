import React from "react";
import "./SpaceExplorer.scss";

export default function SpaceExplorer() {
  return (
    <div className="space-explorer" aria-hidden="true">
      <span className="code-chip chip-a">const launch = true;</span>
      <span className="code-chip chip-b">React.render()</span>
      <span className="code-chip chip-c">await fetch("/api")</span>
      <span className="mini-planet planet-one" />
      <span className="mini-planet planet-two" />
      <span className="mini-planet planet-three" />
      <svg viewBox="0 0 520 460" className="explorer-svg" role="img">
        <title>
          Cartoon software engineer astronaut coding in a small spaceship
        </title>
        <ellipse
          cx="260"
          cy="418"
          rx="150"
          ry="16"
          fill="rgba(58,224,255,0.16)"
        />
        <g className="ship">
          <ellipse
            cx="260"
            cy="278"
            rx="156"
            ry="82"
            fill="#1b2450"
            stroke="#7c6dff"
            strokeWidth="6"
          />
          <ellipse cx="260" cy="278" rx="122" ry="60" fill="#0e1633" />
          <rect
            x="186"
            y="236"
            width="148"
            height="84"
            rx="28"
            fill="#151d40"
            stroke="#3ae0ff"
            strokeWidth="3"
          />
          <circle cx="142" cy="278" r="18" fill="#3ae0ff" opacity="0.85" />
          <circle cx="378" cy="278" r="18" fill="#ff8ac7" opacity="0.8" />
          <rect x="236" y="340" width="48" height="20" rx="8" fill="#7c6dff" />
          <polygon
            points="248,360 272,360 260,398"
            fill="#ff8ac7"
            opacity="0.9"
          />
        </g>
        <g className="astronaut">
          <circle cx="260" cy="168" r="48" fill="#eef4ff" />
          <circle cx="260" cy="168" r="37" fill="#9ad4ff" />
          <circle cx="247" cy="164" r="6" fill="#132046" />
          <circle cx="273" cy="164" r="6" fill="#132046" />
          <path
            d="M247 180c8 8 18 8 26 0"
            stroke="#132046"
            strokeWidth="3"
            fill="none"
          />
          <rect x="228" y="214" width="64" height="70" rx="18" fill="#dce6ff" />
          <rect x="238" y="232" width="44" height="28" rx="6" fill="#0e1633" />
          <rect x="244" y="238" width="32" height="6" rx="2" fill="#3ae0ff" />
          <rect x="244" y="248" width="20" height="4" rx="2" fill="#7c6dff" />
        </g>
        <g className="tech-orbs">
          <circle cx="84" cy="118" r="22" fill="#61dafb" />
          <text
            x="84"
            y="123"
            textAnchor="middle"
            fontSize="11"
            fontFamily="Montserrat, sans-serif"
            fill="#082033"
          >
            React
          </text>
          <circle cx="436" cy="108" r="22" fill="#68a063" />
          <text
            x="436"
            y="113"
            textAnchor="middle"
            fontSize="10"
            fontFamily="Montserrat, sans-serif"
            fill="#f5fff8"
          >
            Node
          </text>
          <circle cx="72" cy="304" r="20" fill="#512bd4" />
          <text
            x="72"
            y="308"
            textAnchor="middle"
            fontSize="10"
            fontFamily="Montserrat, sans-serif"
            fill="#fff"
          >
            .NET
          </text>
        </g>
      </svg>
    </div>
  );
}
