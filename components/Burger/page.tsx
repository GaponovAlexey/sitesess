'use client'
import { useRouter } from "next/router"
import s from "../../../styles/layout.module.scss"
import ScrollPath from "../utils/ScrollPath"

function Burger({ setIsOpen }) {
  const loc = useRouter()
  // Scroll to anchors

  return (
    <div className={s.burger_main}>
      <section className={s.burger_wrapper}>
        <div onClick={() => setIsOpen(false)} className={s.burger_routs}>
          {loc.pathname == "/" ? (
            <ScrollPath to="home">
              <div onClick={() => setIsOpen(false)}>Home</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="home">
              <div onClick={() => setIsOpen(false)}>Home</div>
            </ScrollPath>
          )}
          {loc.pathname == "/" ? (
            <ScrollPath to="landing">
              <div onClick={() => setIsOpen(false)}>landing</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="landing">
              <div onClick={() => setIsOpen(false)}>landing</div>
            </ScrollPath>
          )}
          {loc.pathname == "/" ? (
            <ScrollPath to="strengths">
              <div onClick={() => setIsOpen(false)}>Our strengths</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="strengths">
              <div onClick={() => setIsOpen(false)}>Our strengths</div>
            </ScrollPath>
          )}
          {loc.pathname == "/" ? (
            <ScrollPath to="application">
              <div onClick={() => setIsOpen(false)}>Contact the manager</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="application">
              <div onClick={() => setIsOpen(false)}>Contact the manager</div>
            </ScrollPath>
          )}
          {loc.pathname == "/" ? (
            <ScrollPath to="marketing">
              <div onClick={() => setIsOpen(false)}>Marketing</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="marketing">Marketing</ScrollPath>
          )}
        </div>
      </section>
    </div>
  )
}

export default Burger
