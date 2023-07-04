import React from "react";
import "./ServiceCards.css";

export default function ServiceCards() {
  return (
    <div>

      <div className="conatiner">

        <p className="p service-header">
          Treat Yourself with
          <span className="purple-header"> Our Services</span>
        </p>

        <div className="wrap">
          <div className="box one">
            <a
              className="text-decoration-none"
              href="/treatment-services" //add male grooming link here
            >
              <h1>Male Grooming</h1>
            </a>
          </div>

          <div className="box two">
            <a
              className="text-decoration-none"
              href="/treatment-services" //add waxing link here
            >
              <h1>Waxing</h1>
            </a>
          </div>

          <div className="box three">
            <a
              className="text-decoration-none"
              href="/treatment-services" //add makeup link here
            >
              <h1>Makeup</h1>
            </a>
          </div>

          <div className="box four">
            <a
              className="text-decoration-none"
              href="/treatment-services" //add manicure link here
            >
              <h1>Manicure</h1>
            </a>
          </div>

          <div className="box five">
            <a
              className="text-decoration-none"
              href="/treatment-services" //add hair link here
            >
              <h1>Hair</h1>
            </a>
          </div>

          <div className="box six">
            <a
              className="text-decoration-none"
              href="/treatment-services" //add massage link here
            >
              <h1>Massage</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
