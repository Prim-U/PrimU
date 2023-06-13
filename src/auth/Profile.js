import React from "react";
import Navbar from "../common/Navbar";

export default function Profile() {
  return (
    <div id="profile-bg">
      <Navbar></Navbar>
      <h1 className="mt-3 text-center" id="profile-management">
        Profile Management
      </h1>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark mx-1 mt-2">
          <h3 className="text-start">
            Contact Info <i class="bi bi-person-fill"></i>
          </h3>
          <p className="text-white text-start">
            Update
            your preferred name,  <br></br> email address, phone number, and address.
          </p>
        </button>
      </div>

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
            Users <i class="bi bi-pencil-fill"></i>
          </h3>
          <p className="text-white text-start">
            Manage the users on this website. <br></br>Create, delete, or switch
            accounts.
          </p>
        </button>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-dark mx-2 mt-2">
          <h3 className="text-start">
            Settings <i class="bi bi-gear-fill"></i>
          </h3>
          <p className="text-white text-start">Manage settings.</p>
        </button>
      </div>
    </div>
  );
}
