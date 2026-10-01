import React from "react";
import {Fade} from "react-reveal";
import {servicesSection} from "../../portfolio";
import "./Services.scss";

export default function Services() {
  if (!servicesSection.display) return null;

  return (
    <Fade bottom duration={800} distance="24px">
      <section className="services-section" id="services" aria-label="Services">
        <div className="services-heading">
          <div>
            <span className="section-label">{servicesSection.eyebrow}</span>
            <h2>{servicesSection.title}</h2>
          </div>
          <p>{servicesSection.subtitle}</p>
        </div>

        <div className="services-grid">
          {servicesSection.services.map(service => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>
    </Fade>
  );
}
