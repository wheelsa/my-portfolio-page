import React from "react";

import ReactLogo from "../../assets/logo512.png";
import Javascript from "../../assets/javascript-logo.png";
import Java from "../../assets/Java-logo.png";
import RoR from "../../assets/ruby-rails-logo.png";
import CSS from "../../assets/CSS-logo.png";
import PostgreSQL from "../../assets/PostgreSQL-logo.png";
import Redux from "../../assets/redux-logo.png";
import Sass from "../../assets/Sass-logo.png";
import styledComponents from "../../assets/styled-components-logo.png";
import reactNative from "../../assets/react-native-logo.png";
import graphQL from "../../assets/graphql-logo.png";

const Skills = () => {
  return (
    <div className="skills">
       <a name="skills" className="skills__header">
        <h1 className="heading-1">Skills</h1>
      </a>

      <div className="skills-card__container">
        <div className="skills-card">
          <span className="skills-card__title">
            Proficient Languages and Frameworks
          </span>
          <div className="skills-card__line" />
          <div className="skills-card__pairing">
            <img
              src={ReactLogo}
              alt="React Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">React</span>
          </div>
          <div className="skills-card__pairing">
            <img
              src={Javascript}
              alt="Javascript Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">Javascript</span>
          </div>
          <div className="skills-card__pairing">
            <img src={Java} alt="Java" className="skills-card__pairing--logo" />
            <span className="skills-card__pairing--name">Java  </span>
          </div>
          <div className="skills-card__pairing">
            <img
              src={RoR}
              alt="Ruby on Rails Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">Ruby on Rails</span>
          </div>
          <div className="skills-card__pairing">
            <img
              src={CSS}
              alt="CSS Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">CSS</span>
          </div>
          <div className="skills-card__pairing">
            <img
              src={PostgreSQL}
              alt="PostgreSQL Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">PostgreSQL</span>
          </div>
          <div className="skills-card__pairing">
            <img
              src={Redux}
              alt="Redux Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">Redux</span>
          </div>
          <div className="skills-card__pairing">
            <img
              src={Sass}
              alt="Sass Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">Sass</span>
          </div>
          <div className="skills-card__pairing">
            <img
              src={styledComponents}
              alt="Styled Components Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">
              Styled Components
            </span>
          </div>
        </div>
      </div>

      <div className="skills-card__container">
        <div className="skills-card">
          <span className="skills-card__title">Currently Learning</span>
          <div className="skills-card__line" />
          <div className="skills-card__pairing">
            <img
              src={reactNative}
              alt="React Native Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">React Native</span>
          </div>
          <div className="skills-card__pairing">
            <img
              src={graphQL}
              alt="graphQL Logo"
              className="skills-card__pairing--logo"
            />
            <span className="skills-card__pairing--name">GraphQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
