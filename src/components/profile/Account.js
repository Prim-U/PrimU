import React from "react";

// Stylesheet
import "./Account.css";

// Funcitons/methods
import { Link } from "react-router-dom";

// Components
import NavbarAuth from "../../common/Navbar";
import AccountSideBar from "./AccountSideBar";

export default function Account() {
  return (
    <div id="account-bg">
      <NavbarAuth></NavbarAuth>
      <h1 className="mt-3 text-center" id="account-management">
        My Account
      </h1>
      <p className="text-center mt-2" id="account-management">
        <Link to="/" className="account-path">HOME</Link> / MY ACCOUNT
      </p>

      <div className="row mx-3">
        <div className="col-3 p-3 account-col">
          <AccountSideBar></AccountSideBar>
        </div>

        <div className="col-9">
          <div className="d-flex flex-wrap">
            <Link to="/account/contact-info" className="text-decoration-none">
              <div className="btn btn-secondary dashboard-btn p-4 mx-2 mb-2">
                <div className="row">
                  <h1>
                    <i className="bi bi-person-fill"></i>
                  </h1>
                </div>
                <div className="row">
                  <div className="fs-4">Contact Info</div>
                </div>
              </div>
            </Link>

            <Link to="/account/addresses" className="text-decoration-none">
              <div className="btn btn-secondary dashboard-btn p-4 mx-2 mb-2">
                <div className="row">
                  <h1>
                    <i className="bi bi-house-fill"></i>
                  </h1>
                </div>
                <div className="row">
                  <div className="fs-4">Address</div>
                </div>
              </div>
            </Link>

            <Link to="/account/payment" className="text-decoration-none">
              <div className="btn btn-secondary dashboard-btn p-4 mx-2 mb-2">
                <div className="row">
                  <h1>
                    <i className="bi bi-credit-card-2-back-fill"></i>
                  </h1>
                </div>
                <div className="row">
                  <div className="fs-4">Payment Methods</div>
                </div>
              </div>
            </Link>

            <Link to="/account/seller" className="text-decoration-none">
              <div className="btn btn-secondary dashboard-btn p-4 mx-2 mb-2">
                <div className="row">
                  <h1>
                    <i class="bi bi-box-fill"></i>
                  </h1>
                </div>
                <div className="row">
                  <div className="fs-4">Become a Seller</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <Link
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

      <Link to="/account/seller" className="text-decoration-none d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark mx-2 mt-2 mb-2">
          <h3 className="text-start">
            Become a Seller <i className="bi bi-box-fill"></i>
          </h3>
          <p className="text-white text-start">Discover the conveneience of selling<br></br> with Prim-U as either a Supplier or Primlancer!</p>
        </button>
      </Link> */}
    </div>
  );
}
