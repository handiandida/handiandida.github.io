import React from "react";
import Html_icon from "./icons/Html_icon";
import Css_icon from "./icons/Css_icon";
import Git_icon from "./icons/Git_icon";
import React_icon from "./icons/React_icon";
import Javascript_icon from "./icons/Javascript_icon";
import Bootstrap_icon from "./icons/Bootstrap_icon";
import Material_icon from "./icons/Material_icon";
import Tailwind_icon from "./icons/Tailwind_icon";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <Html_icon />

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <Css_icon />

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <Javascript_icon />

            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <Tailwind_icon />

            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <Bootstrap_icon />

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <Git_icon />

            <div>
              <h3 className="skills__name">GIT</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <React_icon />

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <Material_icon />

            <div>
              <h3 className="skills__name">MaterialUI</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
