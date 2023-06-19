"use client"
import { usePathname } from "next/navigation"
import s from "../../styles/layout.module.scss"
import ScrollPath from "../Utils/ScrollPath"

function Burger({ setIsOpen }: any) {
  const pathname = usePathname()

  return (
    <div className={s.burger_main}>
      <section className={s.burger_wrapper}>
        <div onClick={() => setIsOpen(false)} className={s.burger_routs}>
          {pathname == "/" ? (
            <ScrollPath to="home">
              <div onClick={() => setIsOpen(false)}>Home</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="home">
              <div onClick={() => setIsOpen(false)}>Home</div>
            </ScrollPath>
          )}
          {pathname == "/" ? (
            <ScrollPath to="landing">
              <div onClick={() => setIsOpen(false)}>landing</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="landing">
              <div onClick={() => setIsOpen(false)}>landing</div>
            </ScrollPath>
          )}
          {pathname == "/" ? (
            <ScrollPath to="strengths">
              <div onClick={() => setIsOpen(false)}>Our strengths</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="strengths">
              <div onClick={() => setIsOpen(false)}>Our strengths</div>
            </ScrollPath>
          )}
          {pathname == "/" ? (
            <ScrollPath to="application">
              <div onClick={() => setIsOpen(false)}>Contact the manager</div>
            </ScrollPath>
          ) : (
            <ScrollPath to="application">
              <div onClick={() => setIsOpen(false)}>Contact the manager</div>
            </ScrollPath>
          )}
          {pathname == "/" ? (
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
