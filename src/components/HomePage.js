import React from 'react'
import Navbar from '../common/Navbar'
import NavbarAuth from '../common/NavbarAuth'
import ServiceCards from './homepageCards/ServiceCards'

export default function HomePage(props) {
  return (
    <div>
        <Navbar></Navbar>
      <ServiceCards></ServiceCards>
    </div>
  )
}
