import Hero from '@/components/sections/Hero'
import ValueProposition from '@/components/sections/ValueProposition'
import ProductShowcase from '@/components/sections/ProductShowcase'
import Testimonial from '@/components/sections/Testimonial'
import FeatureHighlights from '@/components/sections/FeatureHighlights'
import TargetAudience from '@/components/sections/TargetAudience'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <ProductShowcase />
      <Testimonial />
      <FeatureHighlights />
      <TargetAudience />
      <FinalCTA />
    </main>
  )
}

