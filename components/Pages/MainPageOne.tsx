'use client'
import CustomBut from "../Utils/CustomBut"
import s from "../../styles/main.module.scss"
import ScrollPath from "../Utils/ScrollPath"
import { motion } from "framer-motion"

const MainPageOne = () => {
  return (
    <div className={s.container_main}>
      <div id="home">
        <motion.div
          className={s.devLogoText}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          The development company
        </motion.div>
        <motion.div
          className={s.logoText}
          initial={{ x: +400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Sitesess.ca
        </motion.div>
        <motion.h2
          initial={{ x: +400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          We Know You Are Passionate About Your Small Business
        </motion.h2>
        <motion.h4
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          We help businesses turn ideas into effective products
        </motion.h4>
        <motion.div
          initial={{ y: +400 }}
          animate={{ y: 0 }}
          transition={{ delay: 1 }}
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

export default MainPageOne
