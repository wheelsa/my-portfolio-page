import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";

import DGB from "../../assets/Digital-Glovebox-App.png";
import eCommerce from "../../assets/Vors eCommerce.png";

const Projects = () => {
  const [toggleCard1, setToggleCard1] = useState(false);
  const [toggleCard2, setToggleCard2] = useState(false);

  const handleClick1 = () => {
    setToggleCard1(!toggleCard1);
  };

  const handleClick2 = () => {
    setToggleCard2(!toggleCard2);
  };

  const renderCard1 = () => {
    if (toggleCard1 === true) {
      return (
        <div className="projects-card__container-1">

        <div class="projects-card card-reveal">
          <span className="projects-card__title" onClick={handleClick1}>
            Skills Used
          </span>
          <Icon
            className="projects-card__btn"
            fontSize="large"
            style={{ color: "#4B0082" }}
            onClick={handleClick1}
          >
            close
          </Icon>

          <ul className="projects-card__list">
            <li> <b> React.js</b> Frontend</li>
            <li> <b> Ruby on Rails</b> Backend</li>
            <li> <b> Two Third Party API Calls:</b> Filepond and Back4App DB</li>
            <li> <b> Devise Authentication</b> with both backend and frontend validation</li>
            <li> Styled Components and <b> Custom CSS</b></li>

          </ul>
        </div>
        </div>
      );
    } else {
      return (
        <div className="projects-card__container-1">
        <div className="projects-card">
          <img
            src={DGB}
            alt="Digital Glovebox Homepage"
            className="projects-card__image"
            onClick={handleClick1}
          />
          <span className="projects-card__title" onClick={handleClick1}>
            Digital Glovebox
          </span>

          <Icon
            className="projects-card__btn"
            fontSize="large"
            style={{ color: "#4B0082" }}
            onClick={handleClick1}
          >
            unfold_more
          </Icon>

          <p className="projects-card__description">
            Store all of your critical documents and manage your moter vehicles
            with your digital glovebox
          </p>
        </div>
        </div>
      );
    }
  };

  const renderCard2 = () => {
    if (toggleCard2 === true) {
      return (
        <div className="projects-card__container-2">
        <div class="projects-card card-reveal">
          <span className="projects-card__title" onClick={handleClick2}>
            Skills Used
          </span>
          <Icon
            className="projects-card__btn"
            fontSize="large"
            style={{ color: "#4B0082" }}
            onClick={handleClick2}
          >
            close
          </Icon>

          <ul className="projects-card__list">
            <li> <b> React.js</b> Frontend; utilized Redux, w. asynchronous calls</li>
            <li> <b> Google Firebase</b> for Authentication and DB</li>
            <li> Checkout with <b> Stripe Payment</b></li>

          </ul>
        </div>
        </div>
      );
    } else {
      return (
        <div className="projects-card__container-2">
        <div className="projects-card">
          <img
            src={eCommerce}
            alt="Vors eCommerce Homepage"
            className="projects-card__image"
            onClick={handleClick2}
          />
          <span className="projects-card__title" onClick={handleClick2}>
            Vors eCommerce
          </span>

          <Icon
            className="projects-card__btn"
            fontSize="large"
            style={{ color: "#4B0082" }}
            onClick={handleClick2}
          >
            unfold_more
          </Icon>

          <p className="projects-card__description">
            Come shop for the latest fashion items. Vors eCommerce platform provide a seamless browsing and purchase experience.
          </p>
        </div>
        </div>
      );
    }
  };
  return (
    <div className="projects">
      <a name="projects" className="projects__header">
        <h1 className="heading-1">Projects</h1>
      </a>
        {renderCard1()}
        {renderCard2()}

      </div>
  );
};

export default Projects;
