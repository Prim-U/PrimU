import React from "react";
import { Link } from "react-router-dom";

export default function AccountSideBar() {
  return (
    <div>
      <h5 className="fw-bold">MY ACCOUNT</h5>
      <hr></hr>
      <div className="row">
        <Link to="/account" className="sidebar-link">
          <div className="fs-6 fw-semibold">
            {" "}
            <i className="bi bi-back"></i> Dashboard
          </div>
        </Link>
      </div>

      <div className="row">
        <Link to="/account/contact-info" className="sidebar-link">
          <div className="fs-6 fw-semibold">
            {" "}
            <i className="bi bi-person-fill"></i> Contact Info
          </div>
        </Link>
      </div>
      <div className="row">
        <Link to="/account/addresses" className="sidebar-link">
          <div className="fs-6 fw-semibold">
            {" "}
            <i className="bi bi-house-fill"></i> Addresses
          </div>
        </Link>
      </div>
      <div className="row">
        {" "}
        <Link to="/account/payment" className="sidebar-link">
          <div className="fs-6 fw-semibold">
            {" "}
            <i className="bi bi-credit-card-2-back-fill"></i> Payment Methods
          </div>
        </Link>
      </div>
    </div>
  );
}
