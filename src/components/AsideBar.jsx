import React from "react";
import { Link } from "react-router-dom";

export const AsideBar = () => {
  return (
    <aside className="nav">
      <div className="profile-container">
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/135/692/935/sci-fi-astronaut-jellyfish-space-hd-wallpaper-preview.jpg"
          alt="profile"
        />
      </div>
      <div className="nav-container">
        <ul>
          <Link
            className="nav-item animate__animated animate__backInLeft"
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-item animate__animated animate__backInRight"
            to="about"
          >
            About
          </Link>
          <Link
            className="nav-item animate__animated animate__backInLeft"
            to="skill"
          >
            Skill
          </Link>
          <Link
            className="nav-item animate__animated animate__backInRight"
            to="proyects"
          >
            Proyectos
          </Link>
          {/* <Link className="nav-item" to="educations">
            Educations
          </Link> */}
          <Link
            className="nav-item animate__animated animate__backInLeft"
            to="contact"
          >
            Contact
          </Link>
        </ul>
      </div>
    </aside>
  );
};
