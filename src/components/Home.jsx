import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

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
          <Typewriter
            options={{
              strings: ["Welcome!", "Front-End Developer", "I like Learning"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
    </div>
  );
};
