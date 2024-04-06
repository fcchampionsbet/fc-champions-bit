import PolarChart from "@/components/charts/PolarChart"
import {
  HeroSection,
  FeaturesSction,
  Tokenamic,
  TImeLineSection,
  NFTSection,
} from "@/pages/Home"

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <HeroSection />
      <FeaturesSction />
      <Tokenamic />
      <TImeLineSection />
      <NFTSection />
    </main>
  )
}
