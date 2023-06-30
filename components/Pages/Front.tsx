"use client"
import { motion } from "framer-motion"
import s from "../../styles/main.module.scss"
import CustomBut from "../Utils/CustomBut"
import ScrollPath from "../Utils/ScrollPath"
import Image from "next/image"

const Front = () => {
  return (
    <div className={s.front}>
      <div id="home" className="mx-auto">
        <motion.h1
          className={s.logoText}
          initial={{ x: +10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Sitesess.ca
          <motion.div
            className={s.logoTextLogo}
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
          className={s.devLogoText}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The web development company
        </motion.div>
        <motion.h2
          initial={{ x: +10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We Know You Are Passionate About Your Small Business
        </motion.h2>
        <motion.h4
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
      <div className={s.main_img}></div>
    </div>
  )
}

export default Front
