
import React from "react";
import React, { useEffect } from "react";

import Navbar from "../common/Navbar";
import ServiceCards from "./homepageCards/ServiceCards";
import CoverCard from "./homepageCards/CoverCard";
import ForCustomersCard from "./homepageCards/ForCustomersCard";
import EventCards from "./homepageCards/EventCards";
import ProvideServiceCard from "./homepageCards/ProvideServiceCard";
import FAQ from "./homepageCards/FAQ";

import { auth } from "../firebase/firebase";

export default function HomePage(props) {
  

  return (
    <div>
      <Navbar></Navbar>

      <CoverCard></CoverCard>
      <br></br>
      <ForCustomersCard></ForCustomersCard>
      <ServiceCards></ServiceCards>
      <EventCards></EventCards>
      <ProvideServiceCard></ProvideServiceCard>
      <p className="hr"></p>

      <p className="p service-header">
        <span className="purple-header"> Primlancers </span> At Work
      </p>
      <div className="container-prov-serv m-9">
        <iframe
          className="iframe"
          width="840"
          height="472"
          src="https://www.youtube.com/embed/SRIv2ziiO2Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p className="hr"></p>

      <FAQ></FAQ>

    </div>
  );
}
