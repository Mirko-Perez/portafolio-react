import React from "react";
import { Link } from "react-router-dom";
import profile from "../helpers/perfil.jpeg";

export const AsideBar = () => {
  return (
    <aside className="nav ">
      <div className="profile-container">
        <img src={profile} alt="profile" />
      </div>
      <div className="nav-container">
        <ul>
          <Link
            className="nav-item animate__animated animate__backInLeft waves-effect waves-light btn-large black"
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-item animate__animated animate__backInRight waves-effect waves-light btn-large black"
            to="about"
          >
            About
          </Link>
          <Link
            className="nav-item animate__animated animate__backInLeft waves-effect waves-light btn-large black"
            to="skill"
          >
            Skill
          </Link>
          <Link
            className="nav-item animate__animated animate__backInRight waves-effect waves-light btn-large black"
            to="proyects"
          >
            Projects
          </Link>
          {/* <Link className="nav-item" to="educations">
            Educations
          </Link> */}
          <Link
            className="nav-item animate__animated animate__backInLeft waves-effect waves-light btn-large black"
            to="contact"
          >
            Contact
          </Link>
        </ul>
      </div>
    </aside>
  );
};
