import React from "react";
import ReactDOM from "react-dom";
import ParticleBackgraund from "./ParticleBackgraund";
import { Portfolio } from "./Portfolio";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <ParticleBackgraund />
    <Portfolio />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
