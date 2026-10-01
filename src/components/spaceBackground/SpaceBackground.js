import React from "react";
import "./spaceTheme.scss";

export default function SpaceBackground() {
  return (
    <div className="space-sky" aria-hidden="true">
      <div className="grid-glow grid-glow-one" />
      <div className="grid-glow grid-glow-two" />
      <div className="code-grid" />
      <span className="background-mark mark-one">{`{ }`}</span>
      <span className="background-mark mark-two">&lt;/&gt;</span>
      <span className="background-line line-one" />
      <span className="background-line line-two" />
    </div>
  );
}
