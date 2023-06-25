import React from "react";

// Stylesheet
import "./Account.css";

// Funcitons/methods
import { Link } from "react-router-dom";

// Components
import NavbarAuth from "../../common/Navbar";

export default function Account() {
  return (
    <div id="account-bg">
      <NavbarAuth></NavbarAuth>
      <h1 className="mt-3 text-center" id="account-management">
        Your Account
      </h1>

      <Link
        to="/account/contact-info"
        className="text-decoration-none d-grid gap-2 col-6 mx-auto"
      >
        <button className="btn btn-dark mx-2 mt-2">
          <h3 className="text-start">
            Contact Info <i className="bi bi-person-fill"></i>
          </h3>
          <p className="text-white text-start">
            Edit your preferred name, <br></br> email address, phone number, and
            address.
          </p>
        </button>
      </Link>

      <Link
        to="/account/payment"
        className="text-decoration-none d-grid gap-2 col-6 mx-auto"
      >
        <button className="btn btn-dark mx-2 mt-2" id="payment-btn">
          <h3 className="text-start">
            Payment <i className="bi bi-credit-card-2-back-fill"></i>
          </h3>
          <p className="text-white text-start">
            Set, change, or add payment methods here.
          </p>
        </button>
      </Link>

      <Link
        to="/account/addresses"
        className="text-decoration-none d-grid gap-2 col-6 mx-auto"
      >
        <button className="btn btn-dark mx-2 mt-2" id="payment-btn">
          <h3 className="text-start">
            Addresses <i className="bi bi-house-fill"></i>
          </h3>
          <p className="text-white text-start">
            Set, edit, or remove default addresses.
          </p>
        </button>
      </Link>

      <Link to="/account/profile" className="text-decoration-none d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark mx-2 mt-2">
          <h3 className="text-start">
            Profiles <i className="bi bi-pencil-fill"></i>
          </h3>
          <p className="text-white text-start">
            Manage the user profiles on this website. <br></br>Create, delete,
            or switch accounts.
          </p>
        </button>
      </Link>

      <Link className="text-decoration-none d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark mx-2 mt-2 mb-2">
          <h3 className="text-start">
            Settings <i className="bi bi-gear-fill"></i>
          </h3>
          <p className="text-white text-start">Manage settings.</p>
        </button>
      </Link>
    </div>
  );
}
