import React from 'react'
import Hero from "@/components/Hero"
import Showcase from "@/components/Showcase"
import Ide from '@/components/Ide'
import Features from '@/components/Features'

export default function page() {
  return (
    <section className='bg-background text-foreground'>
      <Hero />
      <Features />
      <Ide />
    </section>
  )
}
