import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-content">
      <div className="header">
        <h1>
          Hello There <br />! I'm{" "}
          <span className="home__title" onClick={() => navigate("/about")}>
            Mirko Perez
          </span>
        </h1>

        <h2 className=" mt-1">
          <Typewriter
            options={{
              strings: ["Welcome!", "Front-End Developer", "I like Learning"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <ul>
          <li className="home-enlace ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mirko-perez-6a2b001b7/"
              className=" waves-effect waves-light "
            >
              Linkedin
            </a>
          </li>
          <li className="home-enlace">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mirko-Perez"
              className="waves-effect waves-light"
            >
              GitHub
            </a>
          </li>
        </ul>
        <button className="btn-large black waves-effect waves-light btn-radio">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1qa3KKUukJfGhk2GDAX552aAvbvUD51RQ/view?usp=sharing"
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};
