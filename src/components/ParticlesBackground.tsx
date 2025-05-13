import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBackgroundProps {
  id?: string;
}

const ParticlesBackground = ({ id = "tsparticles" }: ParticlesBackgroundProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing tsParticles");
    // Initialize the tsparticles engine
    await loadSlim(engine);
    setIsInitialized(true);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded");
  }, []);

  useEffect(() => {
    console.log("ParticlesBackground mounted, initialized:", isInitialized);
  }, [isInitialized]);

  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              }
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00ccff",
          },
          links: {
            color: "#00ccff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8,
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
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 w-full h-full"
    />
  );
};

export default ParticlesBackground;
