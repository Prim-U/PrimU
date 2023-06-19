import React from "react";
import './ServiceCards.css'

export default function ServiceCards() {
  return (
    <div>
      <div class="conatiner">
        <div class="wrap">
          <div class="box one">
            <a
              className="text-decoration-none"
              href="/male-grooming-link" //add male grooming link here
            >
              <h1>Male Grooming</h1>
            </a>
          </div>

          <div class="box two">
            <a
              className="text-decoration-none"
              href="/waxing-link" //add waxing link here
            >
              <h1>Waxing</h1>
            </a>
          </div>

          <div class="box three">
            <a
              className="text-decoration-none"
              href="/Makeup-link" //add makeup link here
            >
              <h1>Makeup</h1>
            </a>
          </div>

          <div class="box four">
            <a
              className="text-decoration-none"
              href="/manicure-link" //add manicure link here
            >
              <h1>Manicure</h1>
            </a>
          </div>

          <div class="box five">
            <a
              className="text-decoration-none"
              href="/hair-link" //add hair link here
            >
              <h1>Hair</h1>
            </a>
          </div>

          <div class="box six">
            <a
              className="text-decoration-none"
              href="/massage-link" //add massage link here
            >
              <h1>Massage</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
