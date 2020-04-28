import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="heading-1">About Me</h1>
      </div>

      <div className="about__content">
        <p>
          I’ve always sought out opportunities and challenges that are
          meaningful to me. Although my professional path has taken many twists
          and turns — from touring and recording artist, to employee of the year
          at a non-profit, to dean's scholar at UPenn, to small business owner
          and entrepreneur — I've never stopped engaging my passion to help
          others and solve problems. As a web developer, I enjoy using my
          obsessive attention to detail, my unequivocal love for making things,
          and my mission-driven work ethic to literally change the world. That's
          why I’m excited to make a big impact at a high growth company.
        </p>
      </div>

      <div class="about__headline testimonial-quote group right">
        <div class="quote-container">
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
