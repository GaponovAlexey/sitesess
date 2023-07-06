"use client"
import { motion } from "framer-motion"
import CustomBut from "../Utils/CustomBut"
import ScrollPath from "../Utils/ScrollPath"
import Image from "next/image"

import ParticlesComponent from "../Utils/ParticlesComponent"
import { aboreto, allison } from "../../app/fonts"

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
          <div className={aboreto.className}>THE WEB</div>
        </motion.div>
        <motion.div
          className="text-center text-3xl"
          initial={{ x: +10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={aboreto.className}>DEVELOPMENT COMPANY</div>
        </motion.div>
        <motion.h2
          className="text-center tracking-widest  text-4xl pt-10 text-blue-500 font-bold"
          initial={{ x: +10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className={aboreto.className} >

          Transforming Your Dreams 
          </div>
        </motion.h2>
        <motion.h2
          className="text-center tracking-widest  text-4xl"
          initial={{ x: +10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className={aboreto.className} >

          into 
          </div>
        </motion.h2>
        <motion.h4
          className="text-center tracking-widest  text-4xl text-[#7DF9FF] font-bold"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
           <div className={aboreto.className} >

           Digital Reality!
           </div>
        </motion.h4>
        <motion.div
          initial={{ y: +10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center pt-10 p-20 hover:scroll-auto "
        >
          <ScrollPath to="application">
            <CustomBut name="Contact Us" color="white" />
          </ScrollPath>
        </motion.div>
      </div>
    </>
  )
}

export default Front
