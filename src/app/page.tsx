import React from 'react'
import Hero from "@/components/Hero"
import Ide from '@/components/Ide'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import Explore from '@/components/Explore'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <section className='bg-background text-foreground overflow-hidden'>
      <Hero />
      <Features />
      <Ide />
      <Explore />
      <Testimonial />
      <Pricing />
      <Faq />
      <Footer />
    </section>
  )
}
