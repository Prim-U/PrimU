import React from "react";
import "./EventCards.css";

export default function EventCards() {
  return (
    <div className="event-container">
        <p className="hr"></p>
        <p className="p service-header">
          For
          <span className="purple-header"> More </span>
          Than just you
        </p>

      <div className="card event-bg-dark text-white mb-5">
        <img
          className="event-card-img"
          src="https://www.prim-u.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fudvzxn7no754%2F7ApOJ1QYsMn8tkHUhGqbdH%2F807902e0f29d5a62d799f83efe2274b6%2FPHOTO-2022-06-07-10-30-32_6.jpg&w=3840&q=100"
          alt="For Corporate Events"
        />
        <div className="card-img-overlay">
          <h5 className="event-card-title">CORPORATE EVENTS</h5>

          <div className="p-button">
            <p className="event-card-text">
              Presentation is everything. First impressions last. Get connected
              to Professionals that can partner with you to get your team ready
              at that crucial time where it really matters the most. The first
              step would be to download the Prim-U App.
            </p>
            {/* <button className="btn card-btn-outline-primary">Make a Booking</button> */}
            <a href='/make-booking/group-booking' className="btn card-btn-outline-primary">Make a Booking</a>
          </div>
        </div>
      </div>

      <div className="card event-bg-dark text-white mb-5">
        <img
          className="event-card-img"
          src="https://www.prim-u.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fudvzxn7no754%2Fj1HgpiBHmtfzJNHpxv5Xg%2F12d19bbc72008e481c5f8f5da2f42da7%2FWedding.png&w=3840&q=100"
          alt="For Weddings"
        />
        <div className="card-img-overlay">
          <h5 className="event-card-title">Weddings</h5>

          <div className="p-button">
            <p className="event-card-text">
              After months of planning and preparation for your very special
              day, you and your team deserve to be pampered at your convenience.
              The Prim-U App will connect you to the right Prim-U Lancers and
              businesses to get you ready.
            </p>
            {/* <button className="btn card-btn-outline-primary">Make a Booking</button> */}
            <a href='/make-booking/group-booking' className="btn card-btn-outline-primary">Make a Booking</a>
          </div>
        </div>
      </div>

      <div className="card event-bg-dark text-white mb-5">
        <img
          className="event-card-img"
          src="https://www.prim-u.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fudvzxn7no754%2F77VihVsXctpGLNhJpQuYLK%2F52b1139ca121dc2c6d2b1b7d4b2fd42b%2FGroups.png&w=3840&q=100"
          alt="For Group Bookings"
        />
        <div className="card-img-overlay">
          <h5 className="event-card-title">Group Bookings</h5>

          <div className="p-button">
            <p className="event-card-text">
              Once you download the Prim-U App you instantly get connected to
              beauty specialists who can cater for large or small groups. From
              getting ready to Fashion shows, to spoiling your mom and her
              sisters . We connect U.
            </p>
            {/* <button className="btn card-btn-outline-primary">Make a Booking</button> */}
            <a href='/make-booking/group-booking' className="btn card-btn-outline-primary">Make a Booking</a>
          </div>
        </div>
      </div>
      <p className="hr"></p>
    </div>
  );
}
