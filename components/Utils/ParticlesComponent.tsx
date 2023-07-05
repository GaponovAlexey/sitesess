"use client"
import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container)
  }, [])
  return (
    <div>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 10,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 1,
                opacity: 0.1,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: true,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 3,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: [
                {
                  src: "/bgIco/nextjs.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/mongodb.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/css-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/html-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/PostgreSQL.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/node-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/react-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/typescript-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/vue-icon.svg",
                  width: 20,
                  height: 20,
                },
                {
                  src: "/bgIco/nestjs.svg",
                  width: 20,
                  height: 20,
                },
              ],
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </div>
  )
}

export default ParticlesComponent
