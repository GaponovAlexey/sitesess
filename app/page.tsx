import FAQ from "../components/Pages/FAQ"
import Landing from "../components/Pages/Landing"
import Map from "../components/Pages/Maps/Map"
import Marketing from "../components/Pages/Marketing"
import OurStrengths from "../components/Pages/Strong"
import Step from "../components/Pages/Step"
import OurWorks from "../components/Pages/works/OurWorks"

export default function Home() {
  return (
    <main className="dark:bg-gray-900">
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
