import React from 'react'
import Hero from "@/components/Hero"
import Showcase from "@/components/Showcase"
import Demo from "@/components/Demo"
export default function page() {
  return (
    <section className=''>
      <Hero />
      {/* <Demo /> */}
      <Showcase />
    </section>
  )
}
