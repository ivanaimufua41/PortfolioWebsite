import React from "react";
import "./AboutPage.css";
/* things to do for tomorrow: work on styling of back card
work on making the card slide into the AboutMe section
finish building the aboutMe page. Try yout hand building social icons 
in svg? (maybe)
change font 
 */

const aboutPage = props => (
  <div className="about-wrapper">
    <div className="content-grid">
      <div className="about-name">
        <h1 className="about-title">About Me</h1>
      </div>
      <div className="title-content">
        <p>
          {" "}
          My name is <span className="highlight">Ivan Aimufua!</span> I am a 25
          year old <span className="highlight">Web Developer</span>
        </p>
        <div className="about-content">
          <div>
            <h1 className="about-title">Who Am I?</h1>
          </div>
          <p>
            I'm a Javascript developer who has an interest in Full Stack
            Development. I wasn't always a developer. I was actually a plumber
            for a few years of my life and decided to switch careers. I've
            always had an interest with computers. I took it upon myself to
            build a better career and life for myself. I started diving into web
            development and I love it.
          </p>

          <div>
              <div>
                  <p>
                      Tools I Use:
                  </p>
                </div>
              <ul>
                  <li>HTML(HTML Icon Here)</li>
                  <li>CSS(CSS Icon Here)</li>
                  <li>Javascript(Javascript Icon Here)</li>
                  <li>React</li>
                  <li>Redux</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default aboutPage;
