"use client"
import { motion } from "framer-motion"
import CustomBut from "../Utils/CustomBut"
import ScrollPath from "../Utils/ScrollPath"
import Image from "next/image"
import dynamic from "next/dynamic"

const Sketch = dynamic(() => import("react-p5"), { ssr: false })
import React, { useEffect, useState } from "react"

const Front = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const yoff = React.useRef(0.0) as any

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  const draw = (p5: any) => {
    p5.background(70, 1, 20)

    p5.fill(50, 1, 110)
    p5.beginShape()

    let xoff = 0 // Option #1: 2D Noise

    for (let x = 0; x <= p5.width; x += 10) {
      const minVal = 850
      const maxVal = 200
      const noiseValue = p5.noise(xoff, yoff.current)
      let y = p5.lerp(minVal, maxVal, noiseValue)
      p5.vertex(x - 10, y - 100)
      xoff += 0.007
    }
    yoff.current += 0.001
    p5.vertex(p5.width, p5.height)
    p5.vertex(0, p5.height)
    p5.endShape(p5.CLOSE)
  }
  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(dimensions.width, dimensions.height).parent(canvasParentRef)
  }

  const windowResized = (p5: any) => {
    p5.resizeCanvas(dimensions.width, dimensions.height)
  }
  return (
    <>
      <div className="relative h-screen">
        <Sketch
          windowResized={windowResized}
          draw={draw}
          setup={setup}
          className="absolute top-0 left-0 z-0 "
        />
        <div className="  ">
          <div
            id="home"
            className="absolute z-10 h-full w-full  text-[#FFFAFA] "
          >
            <motion.h1
              className="pt-[60%] md:pt-[40%] lg:pt-[16%] text-center tracking-widest font-bold sm:text-3xl text-[42px]"
              initial={{ x: +10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Sitesess.ca
              <motion.div
                className="flex justify-between"
                initial={{ x: +10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Image
                  width={100}
                  className="mx-auto"
                  height={100}
                  src="/assets/sitesess4.svg"
                  alt="logo"
                />
              </motion.div>
            </motion.h1>
            <motion.div
              className="text-center text-xl"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The web development company
            </motion.div>
            <motion.h2
              className="text-center tracking-widest font-bold sm:text-3xl text-2xl pt-10"
              initial={{ x: +10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              We Know You Are Passionate About Your Small Business
            </motion.h2>
            <motion.h4
              className="text-center text-xl"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              We help businesses turn ideas into effective products
            </motion.h4>
            <motion.div
              initial={{ y: +10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center pt-10 hover:scroll-auto "
            >
              <ScrollPath to="application">
                <CustomBut name="Connect us" />
              </ScrollPath>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Front
