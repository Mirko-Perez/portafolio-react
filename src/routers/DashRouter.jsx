import React, { useState } from "react";
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
  const [btnasidebar, setbtnAsidebar] = useState(true);

  const Aside = () => {
    setbtnAsidebar(!btnasidebar);
  };

  return (
    <div className="routes">
      {btnasidebar && <AsideBar />}

      <main>
        <button className="btn blue view mt-1" onClick={Aside}>
          {btnasidebar ? "Close" : "Open"}
        </button>
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
