import { LiquidGlassNav } from "@/components/liquid-glass-nav"
import { HeroSection } from "@/components/hero-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ToursSection } from "@/components/tours-section"
import { AttractionsSection } from "@/components/attractions-section"
import { ServicesSection } from "@/components/services-section"
import { OfferLayout } from "@/components/offer-layout"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LiquidGlassNav />
      <HeroSection />
      <WhyUsSection />
      <ToursSection />
      <AttractionsSection />
      <OfferLayout />
      <ServicesSection />
      <Footer />
    </main>
  )
}
