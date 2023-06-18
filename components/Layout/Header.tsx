import { useState } from "react"
import s from "../../../styles/layout.module.scss"
import Burger from "./burger"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={s.header_main}>
      <span className={s.burger}>
        <div
          onClick={() => setOpen((p) => (p = !p))}
          className={`${open && "open transition-all"}`}
          id="nav-icon1"
        ></div>
        {open && <Burger setIsOpen={setOpen} />}
      </span>
    </div>
  )
}

export default Header
