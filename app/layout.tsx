import "../styles/index.css"
import "../styles/burger.css"
import {
  JetBrains_Mono,
  Open_Sans,
  Merriweather,
  Montserrat,
  Raleway,
  Oswald,
  Source_Sans_3,
  Source_Code_Pro,
  Prosto_One
} from "next/font/google"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"

// const inter = JetBrains_Mono({ subsets: ["latin"] })
// const inter = Open_Sans({ subsets: ["latin"] })
// const inter = Prosto_One({ subsets: ["latin"], weight: "400" })
const inter = Merriweather({ subsets: ["latin"], weight: "300" })
// const inter = Montserrat({ subsets: ["latin"] })
// const inter = Raleway({ subsets: ["latin"] })
// const inter = Oswald({ subsets: ["latin"] })
// const inter = Source_Code_Pro({ subsets: ["latin"] })
// const inter = Prosto_One({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
