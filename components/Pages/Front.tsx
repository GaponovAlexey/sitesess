"use client"
import { motion } from "framer-motion"
import CustomBut from "../Utils/CustomBut"
import ScrollPath from "../Utils/ScrollPath"
import Image from "next/image"

import ParticlesComponent from "../Utils/ParticlesComponent"

const Front = () => {
  return (
    <>
      <div id="home" className="h-screen z-20 mx-auto text-[#FFFAFA] ">
        <motion.div
          className="flex justify-between pt-[60%] md:pt-[40%] lg:pt-[16%]"
          initial={{ x: +10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            width={100}
            className="mx-auto"
            height={100}
            src="/assets/sv.svg"
            alt="logo"
          />
        </motion.div>
        <motion.div
          className="text-center text-3xl"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          THE WEB
        </motion.div>
        <motion.div
          className="text-center text-3xl"
          initial={{ x: +10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          DEVELOPMENT COMPANY
        </motion.div>
        <motion.h2
          className="text-center tracking-widest font-bold sm:text-2xl text-xl pt-10"
          initial={{ x: +10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
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
    </>
  )
}

export default Front
