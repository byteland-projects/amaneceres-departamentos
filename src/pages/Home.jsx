import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Departments from '../components/Departments'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
       <Hero />
       <Info />
       <Departments />
       <Services />
    </div>
  )
}
