import React from "react";

const About = () => {
  return (
    <div className="about">
       <a name="about" className="about__header">
        <h1 className="heading-1">About Me</h1>
      </a>

      <div className="about__content">
        <p>
          As a veteran, I have always tried to pursue work that is purpose driven. 
          Since leaving the Army that's taken the form of working for technology companies that empower others & drive human progress. 
          I've been successful in this endeavor, helping companies achieve their ROI goals. I am able to work in complex cross functional environments, 
          I have a bias for action while managing competing priorities and I believe in being a lifelong Learner with a growth mindset.
          Something had been missing though. I realized that I wanted to do more then talk about products, I wanted to build them. I wanted to change the world directly with a hard skillset.
          This led me to take the Full Stack Development Bootcamp at Devpoint labs to make the transition to software development. I am not on a mission to build purpose driven software, making peoples lives better one keystroke at a time. 
        </p>
      </div>

      <div className="about__headline testimonial-quote group right">
        <div className="quote-container">
          <div>
            <blockquote>
              <p>
                Seth is an outstanding leader who capitalizes on every
                opportunity to make those around him better. He consistently
                exchanges ideas across our organization, gladly helps my other
                multi-talented leaders with their challenging projects, admits
                when he’s made a mistake, and (most importantly) lives the Army values and treats everyone
              with respect.
              </p>
            </blockquote>
            <cite>
              <span>Tim Lynch</span>
              <br />
              Lieutenant Colonel
              <br />
              US Army, Field Artillery
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
