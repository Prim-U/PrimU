import React from 'react'
import NavbarAuth from '../common/Navbar'
import ServiceCards from './homepageCards/ServiceCards'

export default function HomePage(props) {
  return (
    <div>
      <NavbarAuth></NavbarAuth>
      <ServiceCards></ServiceCards>
    </div>
  )
}
