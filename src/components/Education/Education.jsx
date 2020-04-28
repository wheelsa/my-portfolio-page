import React from "react";
import USMA from "../../assets/USMA-logo.png";
import UW from "../../assets/UW-logo.png";
import DPL from "../../assets/DPL-logo.png";

const Education = () => {
  return (
    <div className="education">
      <div className="education__header">
        <h1 className="heading-1">Education</h1>
      </div>

      <div className="education-card__container">
        <div className="education-card">
          <img src={USMA} alt="USMA Logo" className="education-card__logo" />
          <span className="education-card__school">
            United States Military Academy
          </span>

          <span className="education-card__location">West Point, NY</span>
          <span className="education-card__date">May 2011</span>
          <div className="education-card__line" />

          <ul className="education-card__list">
            <li>
              {" "}
              B.S. in International Relations; Minor in Nuclear Engineering
            </li>
          </ul>
        </div>
      </div>

      <div className="education-card__container">
        <div className="education-card">
          <img src={UW} alt="University of Washington Logo" className="education-card__logo" />
          <span className="education-card__school">
            University of Washington
          </span>

          <span className="education-card__location">Seattle, WA</span>
          <span className="education-card__date">June 2018</span>
          <div className="education-card__line" />

          <ul className="education-card__list">
            <li>
              {" "}
             M.B.A with focus in Finance and Marketing
            </li>
            <li>
              {" "}
            Co-President of Strategy Club
            </li>
          </ul>
        </div>
      </div>

      <div className="education-card__container">
        <div className="education-card">
          <img src={DPL} alt="DevPoint Labs Logo" className="education-card__logo" />
          <span className="education-card__school">
            DevPoint Labs
          </span>

          <span className="education-card__location">Salt Lake City, UT</span>
          <span className="education-card__date">April 2020</span>
          <div className="education-card__line" />

          <ul className="education-card__list">
            <li>
              {" "}
             Full Stack Web Development
            </li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default Education;
