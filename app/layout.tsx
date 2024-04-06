import Navbar from "@/components/navbar"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "@/styles/globals.css"
import {ThemeProvider} from "@/components/themeProvider"
import Footer from "@/components/FooterComponent"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "FC Champions bet",
  description:
    "Welcome to FC Champions Bet - the premier destination for soccer enthusiasts and blockchain aficionados alike! As the team leader and player, embark on an exhilarating journey to build your ultimate soccer club powered by blockchain technology. Scout and collect the most formidable players to assemble your dream team, each with unique skills and abilities. Engage in thrilling challenges against other players, showcasing your strategic prowess and soccer expertise. With every triumph, earn valuable tokens that affirm your status as a true champion of FC Champions Bet. Join us today to experience the fusion of sportsmanship and blockchain innovation. Dominate the field, collect rewards, and etch your name in soccer history as the ultimate champion!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
