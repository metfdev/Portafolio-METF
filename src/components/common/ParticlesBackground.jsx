import { useEffect, useState, useContext } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ThemeContext } from "../../context/ThemeProvider";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { tema } = useContext(ThemeContext);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "bubble",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0.8,
          size: 4,
          speed: 3,
        },
      },
    },
    particles: {
      color: {
        value: tema === "dark" ? "#ffffff" : "#000000",
      },
      links: {
        enable: false,
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: { min: 0.5, max: 1.5 },
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
    fullScreen: {
      enable: false,
    },
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="absolute inset-0 pointer-events-none z-0"
      />
    );
  }

  return null;
};

export default ParticlesBackground;
