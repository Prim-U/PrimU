import React from "react";
import NavbarAuth from "../../common/Navbar";

// Stylesheet
import "./Addresses.css";

export default function Addresses() {
  return (
    <div className="bg">
      <NavbarAuth></NavbarAuth>
      <div className="container mt-5 p-3">
        <h1 className="mb-3">Manage Addresses</h1>
        <div className="row">
          <div className="col">
            <div className="card p-5">
              <a
                href="http://localhost:3000/account/addresses/address-default"
                alt="add"
                className="text-decoration-none text-black text-center"
              >
                <div className="row">
                  <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
                </div>
                <div className="row text-center">
                  <h2>Add Address</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card p-5">
              <a
                href="#"
                alt="add"
                className="text-decoration-none text-black text-center"
              >
                <div className="row">
                  <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
                </div>
                <div className="row text-center">
                  <h2>Hello</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card p-5">
              <a
                href="#"
                alt="add"
                className="text-decoration-none text-black text-center"
              >
                <div className="row">
                  <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
                </div>
                <div className="row text-center">
                  <h2>Hello</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
