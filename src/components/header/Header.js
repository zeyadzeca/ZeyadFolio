import React, {useContext, useEffect, useState} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  servicesSection,
  resumeSection,
  educationInfo,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [activeSection, setActiveSection] = useState("greeting");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = [
      "greeting",
      "about",
      "services",
      "skills",
      "education",
      "experience",
      "projects",
      "contact"
    ];
    const nodes = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      {rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.35, 0.6]}
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItem = (href, label, id) => (
    <li key={id}>
      <a
        href={href}
        className={activeSection === id ? "active-nav" : ""}
        onClick={closeMenu}
        aria-current={activeSection === id ? "location" : undefined}
      >
        {label}
      </a>
    </li>
  );

  return (
    <header className={isDark ? "dark-menu header space-nav" : "header space-nav"}>
      <a href="#greeting" className="logo" onClick={closeMenu}>
        <span className="logo-bracket">[</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="logo-bracket">]</span>
      </a>

      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label className="menu-icon" htmlFor="menu-btn" aria-label="Toggle navigation">
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
      </label>

      <nav aria-label="Main navigation">
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {navItem("#greeting", "Home", "greeting")}
          {navItem("#about", "About", "about")}
          {servicesSection.display && navItem("#services", "Services", "services")}
          {skillsSection.display && navItem("#skills", "Skills", "skills")}
          {educationInfo.display && navItem("#education", "Education", "education")}
          {workExperiences.display && navItem("#experience", "Experience", "experience")}
          {bigProjects.display && navItem("#projects", "Projects", "projects")}
          {navItem("#contact", "Contact", "contact")}
          {resumeSection.display && greeting.resumeLink ? (
            <li className="nav-resume">
              <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Resume ↗
              </a>
            </li>
          ) : null}
          <li className="theme-toggle-item"><ToggleSwitch /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
