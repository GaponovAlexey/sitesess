import s from "../../styles/main.module.scss"

const OurStrengths = () => {
  return (
    <div id="strengths" className="bg-[#F3F2F5] lg:py-10" >
      <div className={s.strengths}>
        <div className={s.skills}>
          <div>
            <h2>Our strengths</h2>
            <ul className={s.skills_element}>
              <li>
                <div className={s.one}></div>
                <strong>We provide a high level of performance</strong>
              </li>
              <li>
                <div className={s.two}></div>
                <strong>We guarantee the quality of work</strong>
              </li>
              <li>
                <div className={s.three}></div>
                <strong>We Enable Mobile Compatibility</strong>
              </li>
              <li>
                <div className={s.seven}></div>
                <strong> We write a clean code</strong>
              </li>
              <li>
                <div className={s.four}></div>
                <strong>We make our job quickly</strong>
              </li>
              <li>
                <div className={s.five}></div>
                <strong> We automate process</strong>
              </li>
              <li>
                <div className={s.six}></div>
                <strong> We develop a unique design</strong>
              </li>

              <li>
                <div className={s.eight}></div>
                <strong> Support and Maintenance</strong>
              </li>
              <li className="md:hidden">
                <div className={s.nine}></div>
                <strong>We use targeted advertising</strong>
              </li>
            </ul>
          </div>
          {/* <div className={s.img}></div> */}
        </div>
      </div>
    </div>
  )
}

export default OurStrengths
