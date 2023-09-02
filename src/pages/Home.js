import React, { useEffect } from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// // import EmailIcon from "@material-ui/icons/Email";
// // import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import {
  Check,
  CheckCircle,
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "phosphor-react";

function Home() {
  useEffect(() => {
    let changeText = document.getElementById("changeText");

    if (changeText) {
      const typingTime = () => {
        setTimeout(() => {
          changeText.innerHTML = "ReactJs projects";
        }, 0);
        setTimeout(() => {
          changeText.innerHTML = "NodeJs Projects";
        }, 4000);
        setTimeout(() => {
          changeText.innerHTML = "Building REST Api's";
        }, 8000);
        setTimeout(() => {
          changeText.innerHTML = "Redux Management";
        }, 12000);
        setTimeout(() => {
          changeText.innerHTML = "Responsive web designs";
        }, 16000);
      };

      typingTime();
      const timeInterv = setInterval(typingTime, 4000);

      return () => {
        clearInterval(timeInterv);
      };
    }
  });
  return (
    <div className="home">
      <div className="about">
        <h2> Greetings, My Name is Andrew Kimwetich</h2>

        <div className="typingAnimation">
          <p>
            Tag me in <CheckCircle />
            <span id="changeText" className="changeText">
              ReactJs projects
            </span>
          </p>
        </div>

        <div className="prompt">
          <p>
            A full-stack software developer with passion and skills in creating
            web pages and interactivity.
          </p>
          <a
            href="https://www.linkedin.com/in/andrew-kimwetich-84070a263/"
            rel="noreferre"
            target="_blank"
          >
            <LinkedinLogo size={40} />
          </a>

          <a
            href="mailTo:kimwetichandrew@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Envelope size={40} />
          </a>
          <a
            href="https://github.com/Skipper-kenya"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={40} />
          </a>
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS
              <br /> HTML
              <br /> CSS
              <br /> TypeScript
              <br /> NPM
              <br /> MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS</span>
            <br></br>
            <span>ExpressJS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript
              <br /> Visual-Basic
              <br /> C<br /> C++
              <br /> TypeScript
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
