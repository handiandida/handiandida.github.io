import React from "react";
import Image1 from "../../assets/me.png";
import Image2 from "../../assets/work1.jpg";
import Image3 from "../../assets/work2.jpg";
import Image4 from "../../assets/work3.jpg";
import Image5 from "../../assets/work4.jpg";
import Image6 from "../../assets/work5.jpg";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent works</span>

      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <div>
            <img src={Image1} className="portfolio__img" />
          </div>
          <div>
            <h3 className="portfolio__title">
              Landing <br /> Page
            </h3>
          </div>

          <a href="mailto:handiandida@gmail.com" className="portfolio__button">
            View Details{" "}
            <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
          </a>
        </div>
        <div className="portfolio__content">
          <div>
            <img src={Image2} className="portfolio__img" />
          </div>
          <div>
            <h3 className="portfolio__title">
              Landing <br /> Page
            </h3>
          </div>

          <a href="mailto:handiandida@gmail.com" className="portfolio__button">
            View Details{" "}
            <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
          </a>
        </div>
        <div className="portfolio__content">
          <div>
            <img src={Image3} className="portfolio__img" />
          </div>
          <div>
            <h3 className="portfolio__title">
              Landing <br /> Page
            </h3>
          </div>

          <a href="mailto:handiandida@gmail.com" className="portfolio__button">
            View Details{" "}
            <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
          </a>
        </div>
        <div className="portfolio__content">
          <div>
            <img src={Image4} className="portfolio__img" />
          </div>
          <div>
            <h3 className="portfolio__title">
              Landing <br /> Page
            </h3>
          </div>

          <a href="mailto:handiandida@gmail.com" className="portfolio__button">
            View Details{" "}
            <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
          </a>
        </div>
        <div className="portfolio__content">
          <div>
            <img src={Image5} className="portfolio__img" />
          </div>
          <div>
            <h3 className="portfolio__title">
              Landing <br /> Page
            </h3>
          </div>

          <a href="mailto:handiandida@gmail.com" className="portfolio__button">
            View Details{" "}
            <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
          </a>
        </div>
        <div className="portfolio__content">
          <div>
            <img src={Image6} className="portfolio__img" />
          </div>
          <div>
            <h3 className="portfolio__title">
              Landing <br /> Page
            </h3>
          </div>

          <a href="mailto:handiandida@gmail.com" className="portfolio__button">
            View Details{" "}
            <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
