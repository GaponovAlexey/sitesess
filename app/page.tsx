import FAQ from "../components/Pages/FAQ"
import Front from "../components/Pages/Front"
import Landing from "../components/Pages/Landing"
import Map from "../components/Pages/Maps/Map"
import Marketing from "../components/Pages/Marketing"

export default function Home() {
  return (
    <main>
      <Front />
      <Landing />
      <FAQ />
      <Map />
      <Marketing />
    </main>
  )
}
