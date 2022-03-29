import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { AsideBar } from "../components/AsideBar";
import { Contact } from "../components/Contact";
import { Educations } from "../components/Educations";
import { Home } from "../components/Home";
import { Errors } from "../components/NoFund/Errors";
import { Proyects } from "../components/Proyects";
import { Skill } from "../components/Skill";

export const DashRouter = () => {
  return (
    <div className="routes">
      <AsideBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/educations" element={<Educations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/proyects" element={<Proyects />} />

          <Route path="/*" element={<Errors />} />
        </Routes>
      </main>
    </div>
  );
};
