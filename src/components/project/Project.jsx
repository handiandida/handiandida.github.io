import React, { useState } from "react";
import "./project.css";
import Menu from "./Menu";

const Project = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElement) => {
      return curElement.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">My recent projects</span>

      <div className="project__filters">
        <span className="project__item" onClick={() => setItems(Menu)}>
          All
        </span>
        <span
          className="project__item"
          onClick={() => filterItem("LandingPage")}
        >
          Landing Page
        </span>
        <span className="project__item" onClick={() => filterItem("Website")}>
          Website
        </span>
        <span className="project__item" onClick={() => filterItem("Mobile")}>
          Mobile
        </span>
      </div>

      <div className="project__container grid">
        {items.map((element) => {
          const { id, image, title, category, link } = element;
          return (
            <div className="project__card" key={id}>
              <div className="project__thumbnail">
                <img src={image} alt="" className="project__img" />
                <div className="project__mask"></div>
              </div>

              <h3 className="project__title">{title}</h3>
              <h4 className="project__link">
                <a href={link} target="_blank" rel="noreferrer noopener">
                  Demo
                </a>
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
