import React from 'react'
import NavbarAuth from '../common/Navbar'
import ServiceCards from './homepageCards/ServiceCards'
import CoverCard from './homepageCards/CoverCard'
import ForCustomersCard from './homepageCards/ForCustomersCard'

export default function HomePage(props) {
  return (
    <div>
      <NavbarAuth></NavbarAuth>

        <CoverCard></CoverCard>
        <br></br>
        <ForCustomersCard></ForCustomersCard>
        <ServiceCards></ServiceCards>


    </div>
  )
}
