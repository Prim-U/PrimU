import React from 'react'
import NavbarAuth from '../common/Navbar'
import ServiceCards from './homepageCards/ServiceCards'
import CoverCard from './homepageCards/CoverCard'

export default function HomePage(props) {
  return (
    <div>
      <NavbarAuth></NavbarAuth>

        <CoverCard></CoverCard>
        <br></br>
        <ServiceCards></ServiceCards>


    </div>
  )
}
