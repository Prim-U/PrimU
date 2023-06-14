import React from "react";
import Navbar from "../../common/Navbar";
import { Link } from "react-router-dom";
import NavbarAuth from "../../common/NavbarAuth";

export default function Profile() {
  return (
    <div id="profile-bg">
      <NavbarAuth></NavbarAuth>
      <h1 className="mt-3 text-center" id="profile-management">
        Your Account
      </h1>
      <Link to="/contact-info" className="text-decoration-none">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-dark mx-1 mt-2">
            <h3 className="text-start">
              Contact Info <i class="bi bi-person-fill"></i>
            </h3>
            <p className="text-white text-start">
              Edit your preferred name, <br></br> email address, phone number,
              and address.
            </p>
          </button>
        </div>
      </Link>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark mx-2 mt-2">
          <h3 className="text-start">
            Payment <i class="bi bi-credit-card-2-back-fill"></i>
          </h3>
          <p className="text-white text-start">
            Set, change, or add payment methods here.
          </p>
        </button>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark mx-2 mt-2">
          <h3 className="text-start">
            Profiles <i class="bi bi-pencil-fill"></i>
          </h3>
          <p className="text-white text-start">
            Manage the user profiles on this website. <br></br>Create, delete, or switch
            accounts.
          </p>
        </button>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark mx-2 mt-2 mb-2">
          <h3 className="text-start">
            Settings <i class="bi bi-gear-fill"></i>
          </h3>
          <p className="text-white text-start">Manage settings.</p>
        </button>
      </div>
    </div>
  );
}
