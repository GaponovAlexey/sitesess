import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import { sora } from "./fonts"
import "../styles/burger.css"
import "../styles/index.css"



export const metadata = {
  title: "SITESESS",
  description: "THE WEB DEVELOPMENT COMPANY, build website, website for your business",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
