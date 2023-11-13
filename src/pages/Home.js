import React, { useEffect } from "react";
import "../styles/Home.css";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  NotePencil,
  TwitterLogo,
} from "phosphor-react";

function Home() {
  //useEffect contribution
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
          changeText.innerHTML = "Website development";
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
          <h3>
            Tag me in <NotePencil />
            <span id="changeText" className="changeText">
              ReactJs projects
            </span>
          </h3>
        </div>

        <div className="prompt">
          <h6>
            A full-stack (mern) software developer with passion and skills in
            creating robust Applications and Websites.
          </h6>
          <a
            href="https://www.linkedin.com/in/andrew-kimwetich-84070a263/"
            rel="noreferre"
            target="_blank"
          >
            <LinkedinLogo size={30} />
          </a>

          <a
            href="mailTo:kimwetichandrew@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Envelope size={30} />
          </a>
          <a
            href="https://github.com/Skipper-kenya"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={30} />
          </a>
          <a
            href="https://www.twitter.com/Skipper_ke"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogo size={30} />
          </a>
        </div>
      </div>

      <HomeCard
        name="Skills"
        subt1="Front-End"
        tag1="ReactJS, HTML, CSS, TypeScript, NPM and MaterialUI"
        subt2="Back-End"
        tag2="NodeJS,ExpressJS and MongoDb"
        subt3="Languages"
        tag3="JavaScript, Visual-Basic, C, C++ and TypeScript"
      />
      <HomeCard
        name="About me"
        subt1="Personality"
        tag1="Passionate on what i do. if you're looking for quality Assurance , I'm definitely your guy."
        subt2="Education"
        tag2="Bachelor's Degree in Information Technology and Freecodecamp (React and Javascript) Certifications."
        subt3="Projects"
        tag3="I'm a Mern-stack developer. I'm versatile and can work on custom specifications from my clients."
      />
    </div>
  );
}

export const HomeCard = (props) => {
  const { name, subt1, subt2, subt3, tag1, tag2, tag3 } = props;
  return (
    <div className="skills">
      <h1> {name}</h1>
      <ol className="list">
        <li className="item">
          <h2> {subt1}</h2>
          <span>{tag1}</span>
        </li>
        <li className="item">
          <h2>{subt2}</h2>
          <span>{tag2}</span>
        </li>
        <li className="item">
          <h2>{subt3}</h2>
          <span>{tag3}</span>
        </li>
      </ol>
    </div>
  );
};

export default Home;
