"use client"
import { usePathname, useRouter } from "next/navigation"
import s from "../../styles/layout.module.scss"
import ScrollPath from "../Utils/ScrollPath"
import { Link, Button } from "react-scroll"

function Burger({ setIsOpen }: any) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className={s.burger_main}>
      <section className={s.burger_wrapper}>
        <div onClick={() => setIsOpen(false)} className={s.burger_routs}>
          <Link to="home" smooth={true} duration={1500}>
            Home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Burger
