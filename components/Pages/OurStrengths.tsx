import s from "../../../styles/main.module.scss";

const OurStrengths = () => {
  return (
    <div id="strengths" className={s.container_main_four}>
      <div className={s.img}>
        <div className={s.skills}>
          <div>
            <h2>Our strengths</h2>
            <ul className={s.skills_element}>
              <li className={s.one}>We provide a high level of performance</li>
              <li className={s.two}>We guarantee the quality of work</li>
              <li className={s.three}>We make our job quickly</li>
              <li className={s.four}>We ensure the flow of applications</li>
              <li className={s.five}>We automate process</li>
              <li className={s.six}>We develop a unique design</li>
              <li className={s.seven}>We write a clean code</li>
              <li className={s.eight}>We use contextual advertising</li>
              <li className={s.nine}>We use targeted advertising</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OurStrengths;
