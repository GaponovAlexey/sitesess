import FAQ from "../components/Pages/FAQ"
import Front from "../components/Pages/Front"
import Landing from "../components/Pages/Landing"
import Map from "../components/Pages/Maps/Map"
import Marketing from "../components/Pages/Marketing"
import OurStrengths from "../components/Pages/Strong"
import Step from "../components/Pages/Step"
import OurWorks from "../components/Pages/works/OurWorks"
import HomePage from "../components/Pages/HomePage"
import ParticlesComponent from "../components/Utils/ParticlesComponent"

export default function Home() {
  return (
    <main className="dark:bg-gray-900">
      <ParticlesComponent />
      <Front />
      <Landing />
      <OurWorks />
      <OurStrengths />
      <Step />
      <Map />
      <FAQ />
      <Marketing />
    </main>
  )
}
