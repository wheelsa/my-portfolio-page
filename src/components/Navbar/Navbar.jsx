import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let viewPort = window.visualViewport.height

      if( window.innerWidth > 1200){
      if( scroll !== "home" && window.scrollY >= 0 && window.scrollY < (viewPort/2)){
        setScroll("home")
      }else if(scroll !== "about" && window.scrollY >= (viewPort/2) && window.scrollY < (viewPort + 386) ){
        setScroll("about")
      }else if(scroll !== "experience" && window.scrollY > (viewPort + 386) && window.scrollY < (viewPort + 2598)){
        setScroll("experience")
      }else if(scroll!== "projects" && window.scrollY > (viewPort + 2598) && window.scrollY < (viewPort + 3100)){
        setScroll("projects")
      }else if(scroll !== "skills" && window.scrollY > (viewPort + 3100) && window.scrollY < (viewPort + 3795)){
        setScroll("skills")
      }else if(scroll !== "education" && window.scrollY > (viewPort + 3795) && window.scrollY < (viewPort + 4380)){
        setScroll("education")
      }} else if( window.innerWidth > 1000 && window.innerWidth <= 1200){
        if( scroll !== "home" && window.scrollY >= 0 && window.scrollY < (viewPort/2)){
          setScroll("home")
        }else if(scroll !== "about" && window.scrollY >= (viewPort/2) && window.scrollY < (viewPort + 470) ){
          setScroll("about")
        }else if(scroll !== "experience" && window.scrollY > (viewPort + 470) && window.scrollY < (viewPort + 2360)){
          setScroll("experience")
        }else if(scroll!== "projects" && window.scrollY > (viewPort + 2360) && window.scrollY < (viewPort + 2820)){
          setScroll("projects")
        }else if(scroll !== "skills" && window.scrollY > (viewPort + 2820) && window.scrollY < (viewPort + 3440)){
          setScroll("skills")
        }else if(scroll !== "education" && window.scrollY > (viewPort + 3440)){
          setScroll("education")
        }
      }else if( window.innerWidth > 600 && window.innerWidth <= 1000){
        if( scroll !== "home" && window.scrollY >= 0 && window.scrollY < (viewPort/2)){
          setScroll("home")
        }else if(scroll !== "about" && window.scrollY >= (viewPort/2) && window.scrollY < (viewPort + 470) ){
          setScroll("about")
        }else if(scroll !== "experience" && window.scrollY > (viewPort + 470) && window.scrollY < (viewPort + 2360)){
          setScroll("experience")
        }else if(scroll!== "projects" && window.scrollY > (viewPort + 2360) && window.scrollY < (viewPort + 2820)){
          setScroll("projects")
        }else if(scroll !== "skills" && window.scrollY > (viewPort + 2820) && window.scrollY < (viewPort + 3540)){
          setScroll("skills")
        }else if(scroll !== "education" && window.scrollY > (viewPort + 3540)){
          setScroll("education")
        }
      }

    });
  });
  return (
    <div className="navbar">
      <a href="#">
        <div className="navbar__header">
          <h3 className="navbar__title">
            Seth <br />
            Wheeler
          </h3>
          <h4 className="heading-5 navbar__subTitle">Vet | MBA | Dev</h4>
          <span className="navbar-line" />
        </div>
      </a>
      <div className="sidebar">
        <a href="#" className={scroll === "home" ? "active no-display" : "no-display"}>Home</a>
        <a href="#about" className={scroll === "about" ? "active" : null}>About Me</a>
        <a href="#experience" className={scroll === "experience" ? "active" : null}>Experience</a>
        <a href="#projects" className={scroll === "projects" ? "active" : null}>Projects</a>
        <a href="#skills" className={scroll === "skills" ? "active" : null}>Skills</a>
        <a href="#education" className={scroll === "education" ? "active" : null}>Education</a>
      </div>
    </div>
  );
};

export default Navbar;
