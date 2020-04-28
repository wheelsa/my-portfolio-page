import React from "react";

import profile from "../../assets/HiRes-Seth_Wheeler.jpg";
import Github from "../../assets/github-logo.png";
import LinkedIn from "../../assets/linkedIn-logo.svg";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="heading-1 hero__align-center mb-sm">
        Purpose Driven Software Development
      </h1>
      <img
        src={profile}
        alt="Seth Wheeler's Profile"
        className="hero__profile mb-sm"
      />
      <h2 className="heading-2 hero__align-center"> Seth Wheeler </h2>
      <h2 className="heading-3 hero__align-center">
        {" "}
        Software Engineer | Veteran{" "}
      </h2>
      <div className="hero__align-center hero__links">
        <a href="https://github.com/wheelsa" target="_blank">
          <img
            src={Github}
            alt="Seth Wheeler's Github"
            className="mb-sm hero__links-img"
          />
        </a>
        <a href="https://www.linkedin.com/in/wheelerseth/" target="_blank">
          <img
            src={LinkedIn}
            alt="Seth Wheeler's LinkedIn"
            className="mb-sm hero__links-img"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
