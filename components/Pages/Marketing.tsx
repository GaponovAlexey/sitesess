import s from "../../../styles/main.module.scss"

const Marketing = () => {
  return (
    <>
      <div id="marketing" className="main_marketing">
        <div className={s.marketing_map}></div>
      </div>
    </>
  )
}

const Facebook = () => {
  return (
    <div>
      The campaign strength score is calculated from various factors including
      your campaign and ad settings, current campaign performance and analysis
      of performance potential for each recommendation that is relevant for your
      campaign. Campaign strength and its accompanying recommendations can
      change due to trends in the ads ecosystem and edits to your campaign
      setup.
      <br />
      We help you with it.
    </div>
  )
}

export default Marketing
