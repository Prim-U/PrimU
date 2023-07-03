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
          <br />
          Our platform connects you with customers looking for beauty services,
          from hair styling to makeup
          <br />
          application. Set your own schedule and rates, and work as much or as
          little as you want
          <br />
          Sign up now and start earning cash as a beauty freelancer with Prim-U.
          <br />
          Experience the ultimate convenience with us! You are in charge of the
          location and time, making it easy
          <br />
          for you to fit your needs and schedule. Say goodbye to the hassle and
          hello to flexibility and ease.
        </p>
        <div className="text-right">
          <button className="btn btn-lg btn-light custom-button" type="button">
            Signup Now
          </button>
        </div>

        <div className="row t-row">
          <div className="col-sm-4">
            <img
              src="https://prim-u.app/wp-content/uploads/2023/01/whatsapp-image-2023-01-17-at-12.48.40-pm.jpeg"
              alt="Small Image 1"
              className="small-image mb-3"
            />
            <h3 className="icon-sub-header mb-3">Convenience</h3>
            <p className="icon-paragraph-box">
              U choose the location and time.
              <br />
              The ability to set your own hours can be
              <br /> exceptionally attractive. You can set the
              <br /> time you will be available to take a
              <br /> job at your own convenience, and the time
              <br /> you will be unavailable.
            </p>
          </div>
          <div className="col-sm-4">
            <img
              src="https://prim-u.app/wp-content/uploads/2023/01/whatsapp-image-2023-01-17-at-12.48.39-pm-1.jpeg"
              alt="Small Image 2"
              className="small-image mb-3"
            />
            <h3 className="icon-sub-header mb-3">Personalisation</h3>
            <p className="icon-paragraph-box">
              The way U choose.
              <br /> It is very easy to navigate around,
              <br /> extremely user-friendly and allows you <br /> to set how
              you want your widget. You
              <br />
              can be sure of quality service because <br /> the professionals
              are vetted for <br />
              excellence. Experts are at your fingertips
              <br /> 24/7, so asking a question is easy and <br />
              convenient.
            </p>
          </div>
          <div className="col-sm-4">
            <img
              src="https://prim-u.app/wp-content/uploads/2023/01/whatsapp-image-2023-01-17-at-12.48.39-pm.jpeg"
              alt="Small Image 3"
              className="small-image mb-3"
            />
            <h3 className="icon-sub-header mb-3">Value for Money</h3>
            <p className="icon-paragraph-box">
              It assures U of steady income.
              <br /> No need to worry about getting
              <br />
              customers as you will be linked with the
              <br />
              customer that wants your service.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="subheader-container">
          <h2 className="sub-headers mb-3 mt-3">
            Are U a beauty freelancer or a Spa?
          </h2>
          <p className="paragraph-box-two">
            We connect freelancers to our network of customers. Small business?{" "}
            <br /> We want to offer U a big opportunity. Download the Prim-U app{" "}
            <br /> and we’ll instantly give U access to thousands of customers,
            salons, spas <br /> and guesthouses closest to U. So simple. So
            mobile. So rewarding. <br /> The beauty platform that benefits U.{" "}
            <br /> <br />
            For a spa Prim-U makes offering customers exceptional luxury at{" "}
            <br /> everyday prices easy. We’ll make use of your under-utilised
            space <br /> and match U with any beauty therapist U need from
            massage <br /> therapists to beauticians and hair stylists. It’s big
            businesses helping <br />
            small businesses gain even bigger opportunities. It’s a win-win.
          </p>
          <button
            className="btn btn-lg btn-light custom-button-container mb-3"
            type="button"
          >
            Signup Now
          </button>
          <img
            src="https://prim-u.app/wp-content/uploads/2023/01/brushes.png"
            alt="brush image"
            className="brush-image"
          />
        </div>
      </div>
      <div className="container-fluid mb-3">
        <div className="subheader-container">
          <img
            src="https://prim-u.app/wp-content/uploads/2023/01/haircut.png"
            alt="brush image"
            className="haircut-image"
          />
          <div className="content-container">
            <h2 className="haircut-sub-headers mb-3">For more than just U</h2>
            <p className="paragraph-box-two">
              Weddings, corporate events & Group booking: The Prim-U app is
              user-friendly and straightforward, providing video chat and
              messaging. You can contact a freelancer right away, as most are
              available after completing your booking. And you can rest assured
              that Prim-U will always find you the best prices in your area
              because they do not take any commission on the services you use.
            </p>
            <button
            className="btn btn-lg btn-light custom-button-container mb-3"
            type="button"
          >
            Book Now
          </button>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
      <div className="subheader-container">
        <h2 className="service-sub-headers">SERVICE CATEGORIES</h2>

      </div>
      </div>
    </div>
  );
}
