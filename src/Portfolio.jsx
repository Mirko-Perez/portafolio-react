import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DashRouter } from "./routers/DashRouter";

export const Portfolio = () => {
  return (
    <>
      <BrowserRouter>
        <DashRouter />
      </BrowserRouter>
    </>
  );
};
