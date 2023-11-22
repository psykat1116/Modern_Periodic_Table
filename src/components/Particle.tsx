"use client";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { getConfig } from "@/helper/ChooseConfig";

const Particle = ({ number }: { number: string }) => {
  const config = getConfig(parseInt(number));
  const particlesInit = async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    />
  );
};

export default Particle;
