import React from "react";
import { Link } from "react-router-dom";

import './BookingPage.css'

export default function BookingPage() {
  return (
    <div>
      <div className="bg-light" id="nav-padding">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/">
              <img
                src="https://prim-u.store/wp-content/uploads/2023/02/Prim-U-01-1.svg"
                alt=""
                width="50"
                height="50"
              />
            </a>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Prim Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/account">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <row>
          <h1 className="me-2 my-4">Make a Booking</h1>
        </row>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card p-3" id="offer-card">
              <a href="#" className="text-decoration-none text-black">
                <div className="row">
                  <div className="col-4">
                    <i className="fa fa-gift fa-5x" aria-hidden="true"></i>
                  </div>
                  <div className="col-8">
                    <h5 className="text-start">Offers</h5>
                    <div className="text-black-50 text-start fs-6 text">
                      Check out our latest offers from nearby salons, nail
                      technicians, and hairstylists.
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col">
            <div className="card p-3" id="offer-card">
              <a href="#" className="text-decoration-none text-black">
                <div className="row">
                  <div className="col-4">
                    <i className="fa fa-leaf fa-5x" aria-hidden="true"></i>
                  </div>
                  <div className="col-8">
                    <h5 className="text-start">Ingredients</h5>
                    <div className="text-black-50 text-start fs-6 text">
                      Learn about the ingredients that go into the products that enhance your beauty.
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="card p-3" id="offer-card">
              <Link to="/treatment-services" className="text-decoration-none text-black">
                <div className="row">
                  <div className="col-4">
                    <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
                  </div>
                  <div className="col-8">
                    <h5 className="text-start">Treatment Services</h5>
                    <div className="text-black-50 text-start fs-6 text">
                      Find services and locations the treat your beauty needs and desires to make you feel your best.
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="card p-3" id="offer-card">
              <Link to="/become-seller" className="text-decoration-none text-black">
                <div className="row">
                  <div className="col-4">
                    <i className="fa fa-shopping-basket fa-5x" aria-hidden="true"></i>
                  </div>
                  <div className="col-8">
                    <h5 className="text-start">Become Supplier</h5>
                    <div className="text-black-50 text-start fs-6 text">
                      Become a registered seller with us and use this platform to spread your business.
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
