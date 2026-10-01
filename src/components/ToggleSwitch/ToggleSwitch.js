import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <label className="switch" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      />
      <span className="slider round">
        <span className="emoji" aria-hidden="true">{isDark ? "☾" : "☀"}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
