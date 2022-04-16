import React from "react";
import { Link } from "react-router-dom";
import profile from "../helpers/perfil.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";

export const AsideBar = () => {
  return (
    <aside className="nav ">
      <div className="nav-container">
        <div className="profile-container">
          <img src={profile} alt="profile" />
        </div>

        <ul>
          <Link
            className="nav-item animate__animated animate__backInLeft waves-effect waves-light btn-large black"
            to="/"
          >
            <AiTwotoneHome /> Home
          </Link>
          <Link
            className="nav-item animate__animated animate__backInRight waves-effect waves-light btn-large black"
            to="about"
          >
            <AiOutlineUser /> About
          </Link>
          <Link
            className="nav-item animate__animated animate__backInLeft waves-effect waves-light btn-large black"
            to="skill"
          >
            <AiOutlineRise /> Skill
          </Link>
          <Link
            className="nav-item animate__animated animate__backInRight waves-effect waves-light btn-large black"
            to="proyects"
          >
            <AiFillFolderOpen /> Projects
          </Link>
          {/* <Link className="nav-item" to="educations">
            Educations
          </Link> */}
          <Link
            className="nav-item animate__animated animate__backInLeft waves-effect waves-light btn-large black"
            to="contact"
          >
            <AiOutlineMail /> Contact
          </Link>
        </ul>
      </div>
    </aside>
  );
};
