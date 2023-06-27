import FAQ from "../components/Pages/FAQ"
import Front from "../components/Pages/Front"
import Landing from "../components/Pages/Landing"
import Map from "../components/Pages/Maps/Map"
import Marketing from "../components/Pages/Marketing"
import OurStrengths from "../components/Pages/OurStrengths"
import Step from "../components/Pages/Step"
import OurWorks from "../components/Pages/works/OurWorks"

export default function Home() {
  return (
    <main className="bg-[#FFFAFA] dark:bg-gray-900" >
      <Front />
      <OurWorks />
      <Landing />
      <Step />
      <OurStrengths />
      <Map />
      <FAQ />
      <Marketing />
    </main>
  )
}
