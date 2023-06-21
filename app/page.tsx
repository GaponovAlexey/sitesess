import AnswerBlock from "../components/Pages/FAQ"
import AppliMap from "../components/Pages/AppliMap"
import LandingUse from "../components/Pages/LandingUse"
import MainPageOne from "../components/Pages/MainPageOne"
import Marketing from "../components/Pages/Marketing"
import OurStrengths from "../components/Pages/OurStrengths"

export default function Home() {
  return (
    <main>
      <MainPageOne />
      <LandingUse />
      <AnswerBlock />
      {/* <OurStrengths /> */}
      <AppliMap />
      <Marketing />
    </main>
  )
}
