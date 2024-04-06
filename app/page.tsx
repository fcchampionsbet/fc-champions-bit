import FeaturesSction from "@/pages/Home/FeaturesSction"
import HeroSection from "@/pages/Home/HeroSection"
import NFTSection from "@/pages/Home/NFTSection"
import TimeLineSection from "@/pages/Home/TimeLineSection"
import Tokenamic from "@/pages/Home/Tokenamic"

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <HeroSection />
      <FeaturesSction />
      <Tokenamic />
      <TimeLineSection />
      <NFTSection />
    </main>
  )
}
