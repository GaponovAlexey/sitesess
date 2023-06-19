import AnswerBlock from "../components/Pages/AnswerBlock"
import AppliMap from "../components/Pages/AppliMap"
import LandingUse from "../components/Pages/LandingUse"
import MainPageOne from "../components/Pages/MainPageOne"
import Marketing from "../components/Pages/Marketing"
import OurStrengths from "../components/Pages/OurStrengths"

export default function Home() {
  return (
    <main>
      <MainPageOne />
      <AnswerBlock />
      <LandingUse />
      <OurStrengths />
      <AppliMap />
      <Marketing />
    </main>
  )
}
