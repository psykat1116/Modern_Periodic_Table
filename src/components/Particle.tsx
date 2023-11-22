"use client";
import { useContext } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Particle = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
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
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: "#fff",
          },
          move: {
            bounce: false,
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, area: 1000 }, value: 80 },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
