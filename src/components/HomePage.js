import React from 'react'
import Navbar from '../common/Navbar'
import ServiceCards from './homepageCards/ServiceCards'
import CoverCard from './homepageCards/CoverCard'
import ForCustomersCard from './homepageCards/ForCustomersCard'
import EventCards from './homepageCards/EventCards'
import ProvideServiceCard from './homepageCards/ProvideServiceCard'
import FAQ from './homepageCards/FAQ'

export default function HomePage(props) {
  return (
    <div>
      <Navbar></Navbar>

        <CoverCard></CoverCard>
        <br></br>
        <ForCustomersCard></ForCustomersCard>
        <ServiceCards></ServiceCards>
        {/* <hr></hr> */}
        <EventCards></EventCards>
        <ProvideServiceCard></ProvideServiceCard>
        <FAQ></FAQ>

    </div>
  )
}
