import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-content">
      <div className="header">
        <h1>
          HI THERE <br />! I'm{" "}
          <span className="home__title" onClick={() => navigate("/about")}>
            Mirko Perez
          </span>
        </h1>

        <h2 className=" mt-1">
          <span className="typewriter">I like learning </span>{" "}
        </h2>
      </div>
    </div>
  );
};
