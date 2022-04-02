import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";

import jest from "../helpers/icons/jest_logo.svg";
import postman from "../helpers/icons/postman_logo.svg";
import reduxIcon from "../helpers/icons/redux_icon.svg";
import firebaseIcon from "../helpers/icons/firebase_logo.svg";
import VSIcon from "../helpers/icons/visualstudio_icon.svg";

export const Skill = () => {
  return (
    <div className="skill-content">
      <div className="card">
        <h5 className="title">Lenguajes</h5>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faHtml5} />
          <div className="centrado">HTML5</div>
        </div>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faJs} />
          <div className="centrado">JavaScript</div>
        </div>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faCss3} />
          <div className="centrado">CSS3</div>
        </div>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faPython} />
          <div className="centrado">Python</div>
        </div>
      </div>
      <div className="card">
        <h5 className="title">framework / library / preprocessor</h5>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faSass} />
          <div className="centrado">SASS</div>
        </div>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faReact} />
          <div className="centrado">React</div>
        </div>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faBootstrap} />
          <div className="centrado">Bootstrap</div>
        </div>
        <div className="list">
          <img className="icon" src={jest} alt="Jest" />
          <div className="centrado">Jest</div>
        </div>
        <div className="list">
          <img className="icon" src={firebaseIcon} alt="firebase" />
          <div className="centrado">Firebase</div>
        </div>
        <div className="list">
          <img className="icon" src={reduxIcon} alt="redux" />
          <div className="centrado">Redux</div>
        </div>
      </div>
      <div className="card">
        <h5 className="title">Tools</h5>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faGithub} />
          <div className="centrado">Github</div>
        </div>
        <div className="list">
          <FontAwesomeIcon className="icon " icon={faNpm} />
          <div className="centrado">Npm</div>
        </div>
        <div className="list">
          <img className="icon" src={postman} alt="Postman" />
          <div className="centrado">Postman</div>
        </div>
        <div className="list">
          <img className="icon" src={VSIcon} alt="VSIcon" />
          <div className="centrado">
            Visual
            <br />
            Studio
          </div>
        </div>
      </div>
    </div>
  );
};
