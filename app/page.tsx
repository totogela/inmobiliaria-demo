import Hero from '@/components/Hero'
import FeaturedProperties from '@/components/FeaturedProperties'
import NeighborhoodSection from '@/components/NeighborhoodSection'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <NeighborhoodSection />
      <WhyUs />
      <Testimonials />
      <ContactSection />
    </>
  )
}
