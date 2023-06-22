import FAQ from "../components/Pages/FAQ"
import Front from "../components/Pages/Front"
import Landing from "../components/Pages/Landing"
import Map from "../components/Pages/Maps/Map"
import Marketing from "../components/Pages/Marketing"
import OurStrengths from "../components/Pages/OurStrengths"

export default function Home() {
  return (
    <main>
      <Front />
      <Landing />
      <FAQ />
      <OurStrengths />
      <Map />
      <Marketing />
    </main>
  )
}
