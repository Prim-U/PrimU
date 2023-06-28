import React from "react";
import Navbar from "../../common/Navbar";
import { Link } from "react-router-dom";
import "./TreatmentServices.css";
import HairTrimming from "./HairTrimming.jpeg";

export default function TreatmentServices() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="image-container mb-3">
        <img
          src={HairTrimming}
          alt="Treatment Services"
          className="page-image"
        />

        <div className="text-container">
          <h2 className="centered-text">You deserve the pampering</h2>
          <p className="centered-text paragraph-box">
            Prim-U is your one-stop shop for beauty bookings in South Africa.
            Connect with
            <br />
            top-rated freelancers, salons, and suppliers from all over the
            country, all from the
            <br /> convenience of your own home. Book your next beauty
            appointment with ease
            <br />
            and confidence with Prim-U.
          </p>
          <div className="button-container">
            <button
              className="btn btn-primary centered-text paragraph-box"
              type="button"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="sub-headers mb-3">
          Earn extra cash by signing up as a Primlancer
        </h2>
        <p className="paragraph-box-two">
          Want to make extra money in your free time? Sign up as a Primlancer
          and start earning today!
          <br/>
           Our platform connects you with customers
          looking for beauty services, from hair styling to makeup
          <br/>
           application.
          Set your own schedule and rates, and work as much or as little as you
          want
          <br/>
           Sign up now and start earning cash as a beauty freelancer with
          Prim-U. 
          <br/>
          Experience the ultimate convenience with us! You are in charge
          of the location and time, making it easy
          <br/>
           for you to fit your needs and
          schedule. Say goodbye to the hassle and hello to flexibility and ease.
        </p>
        <div className="text-right">
          <button className="btn btn-lg btn-light custom-button" type="button">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}
