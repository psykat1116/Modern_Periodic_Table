"use client";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const DynamicParticle = () => {
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
            value: [
              "#913856",
              "#556199",
              "#739f46",
              "#ff69b4",
              "#28a128",
              "#cd3e20",
              "#cd853f",
              "#f08080",
              "#008080",
              "#6b8e23",
              "#9acd32",
            ],
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
          number: { density: { enable: true, area: 900 }, value: 10 },
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

export default DynamicParticle;
