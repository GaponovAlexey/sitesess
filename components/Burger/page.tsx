"use client"
import s from "../../styles/layout.module.scss"
import ScrollPath from "../Utils/ScrollPath"

const path = [
  { id: 1, rout: "home", name: "Home" },
  { id: 2, rout: "landing", name: "Landing" },
  { id: 3, rout: "strengths", name: "Our strengths" },
  { id: 4, rout: "application", name: "Contact the manager" },
]

function Burger({ setIsOpen }: any) {
  // const pathname = usePathname()

  return (
    <div onClick={() => setIsOpen(false)} className={s.burger_main}>
      <section className={s.burger_wrapper}>
        {path.map((path) => {
          return (
            <div key={path.id} >
              <ScrollPath to={path.rout}>
                <div className={s.burger_routs} onClick={() => setIsOpen(false)}>{path.name}</div>
              </ScrollPath>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Burger
