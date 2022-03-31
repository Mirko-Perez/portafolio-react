import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particle-config";

export default function ParticleBackgraund() {
  return <Particles params={particlesConfig}></Particles>;
}
