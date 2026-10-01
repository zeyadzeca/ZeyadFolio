import React from "react";
import "./CommStation.scss";

export default function CommStation() {
  return (
    <div className="comm-station" aria-hidden="true">
      <svg viewBox="0 0 420 340" className="comm-svg">
        <title>Communication satellite sending a signal to Earth</title>
        <circle
          className="signal"
          cx="210"
          cy="150"
          r="48"
          fill="none"
          stroke="#3ae0ff"
          strokeWidth="2"
        />
        <circle
          cx="210"
          cy="150"
          r="88"
          fill="none"
          stroke="rgba(124,109,255,0.22)"
          strokeWidth="2"
        />
        <circle
          cx="210"
          cy="150"
          r="124"
          fill="none"
          stroke="rgba(58,224,255,0.14)"
          strokeWidth="2"
        />
        <circle cx="210" cy="248" r="52" fill="#2f6bff" />
        <circle cx="196" cy="236" r="14" fill="#7cffb4" opacity="0.85" />
        <ellipse
          cx="228"
          cy="252"
          rx="10"
          ry="6"
          fill="#16324a"
          opacity="0.45"
        />
        <rect x="188" y="78" width="44" height="54" rx="8" fill="#dce6ff" />
        <rect x="160" y="100" width="28" height="10" rx="2" fill="#7c6dff" />
        <rect x="232" y="100" width="28" height="10" rx="2" fill="#7c6dff" />
        <circle cx="210" cy="70" r="14" fill="#3ae0ff" />
        <rect x="204" y="132" width="12" height="28" rx="3" fill="#9bb0ff" />
      </svg>
    </div>
  );
}
