import React from "react";
import HireVue from "../../assets/HireVueLogo-Small.png";
import DellTech from "../../assets/DellTech_Logo.png";
import LibertyMutual from "../../assets/Liberty-mutual-insurance-logo.png";
import USArmy from "../../assets/US-army-logo.jpg";

const Experience = () => {
  return (
    <div className="experience">
      <a name="experience" className="experience__header">
        <h1 className="heading-1">Experience</h1>
      </a>

      <div className="experience-card__container">
        <div className="experience-card">
          <img
            src={HireVue}
            alt="HireVue Logo"
            className="experience-card__logo"
          />
          <span className="experience-card__company">HireVue</span>

          <span className="experience-card__title">
            Sr. Field Marketing Manager
          </span>
          <div className="experience-card__line" />
          <p className="experience-card__description">
            Video Interviewing and Hiring Assessments Platform
          </p>
          <ul className="experience-card__list">
            <li> Accomplishment 1</li>
            <li> Accomplishment 2</li>
            <li> Accomplishment 3</li>
          </ul>
          <p className="experience-card__date">
            July 2019 - January 2020 | South Jordan, Utah
          </p>
        </div>
      </div>

      <div className="experience-card__container">
        <div className="experience-card">
          <img
            src={DellTech}
            alt="Dell Technologies Logo"
            className="experience-card__logo"
          />
          <span className="experience-card__company">Dell Technologies</span>

          <span className="experience-card__title">
            Vertical Marketing Manager
          </span>
          <div className="experience-card__line" />
          <p className="experience-card__description">
            North America Field and Partner Marketing: State and Local
            Government (SLG) Vertical
          </p>
          <ul className="experience-card__list">
            <li>
              {" "}
              Awarded Dell Champion on annual review among six peers; award
              given to the top performer of each team
            </li>
            <li>
              {" "}
              Contributed to an increase in marketing pipeline by 95% year over
              year with 42% of pipeline converted to revenue; managed an annual
              marketing budget of $500 thousand
            </li>
            <li>
              {" "}
              Partnered with product, sales, marketing and strategically aligned
              businesses to develop message for helping governments achieve
              their digital transformation in cybersecurity, public safety, and
              multi-cloud
            </li>
            <li>
              {" "}
              Drove content strategy, development and execution in the SLG
              vertical to maximize awareness, drive demand generation, and
              enable sales; marketing campaign featured content across the
              customer journey and the sales funnel{" "}
            </li>
          </ul>
          <p className="experience-card__date">
            July 2018 - July 2019 | Round Rock, Texas
          </p>
        </div>
      </div>

      <div className="experience-card__container">
        <div className="experience-card">
          <img
            src={LibertyMutual}
            alt="Liberty Mutual Logo"
            className="experience-card__logo"
          />
          <span className="experience-card__company">
            Liberty Mutual Insurance
          </span>

          <span className="experience-card__title">
            Corporate Development Program Associate
          </span>
          <div className="experience-card__line" />
          <p className="experience-card__description">
            Global Consumer Markets (GCM): East|West Finance
          </p>
          <ul className="experience-card__list">
            <li>
              {" "}
              Partnered cross-functionally to streamline and standardize monthly
              reporting across nine countries in GCM East; new process generated
              insights for Chief Operating Officer of GCM East and created
              efficiencies for local operations
            </li>
            <li>
              {" "}
              Analyzed quantitative data and stakeholder discussions across 13
              East|West countries to conduct a current state analysis of the
              Global Internal Audit Function; analysis presented to the head of
              Internal Audit to inform global strategy
            </li>
          </ul>
          <p className="experience-card__date">
            June 2017 - September 2017 | Boston, Massachusets
          </p>
        </div>
      </div>

      <div className="experience-card__container">
        <div className="experience-card">
          <img
            src={USArmy}
            alt="United States Army Logo"
            className="experience-card__logo"
          />
          <span className="experience-card__company">U.S. Army</span>

          <span className="experience-card__title">
            Senior Operations and Logistics Manager
          </span>
          <div className="experience-card__line" />
          <p className="experience-card__description">
            Planned and resourced operations for organizations of up to 700
            individuals; consistently chosen ahead of peer groups to lead
            organizations composed of up to 120 individuals.
          </p>
          <ul className="experience-card__list">
            <li>
              {" "}
              Planned, resourced and orchestrated a 120-person organization’s
              deployment to a national training; partnered with directors across
              two external organizations to integrate organization successfully
              during exercise
            </li>
            <li>
              {" "}
              Chosen over four peers to lead the organization as the Senior
              Operations Manager during exercise; resulted in a 300% increase in
              the organization’s measurable efficiency
            </li>
            <li>
              Prepared and led four teams totaling 19-persons; integrated and
              coordinated teams in support of an organization of 4,400 for a
              national training exercise; teams had a success rating 150% above
              nearest peer team
            </li>
            <li>
              {" "}
              Collaborated with international counterparts to execute the
              movement, resupply, maintenance, and sustainment for over 700 New
              Zealand, U.S. and Tongan Soldiers, resulting in the successful
              execution of a 30-day operation{" "}
            </li>
            <li>
              {" "}
              Founded and led a diverse team of 35 employees over a six-month
              training period in preparation for a deployment to Afghanistan to
              conduct security operations in a combat environment; team rated #1
              out of 7
            </li>
          </ul>

          <p className="experience-card__date">
            May 2011 - September 2016 | Oahu, Hawaii and Joint Base Lewis
            McChord, Washington
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
