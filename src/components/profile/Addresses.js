import React from "react";
import NavbarAuth from "../../common/Navbar";

// Stylesheet
import "./Addresses.css";
import { auth } from "../../firebase/firebase";

export default function Addresses(props) {
  const user = auth.currentUser;
  return (
    <div className="bg">
      <NavbarAuth></NavbarAuth>
      <div className="container mt-5 p-3">
        <h1 className="mb-3">Manage Addresses</h1>
        <div className="row">
          <div className="col">
            <div className="card p-5" id="add-card">
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

          {props.addresses.map((address) => {
            return (
              <div className="col">
                <div className="card p-5" id="card">
                  <a
                    href="#"
                    alt="add"
                    className="text-decoration-none text-black text-center"
                  >
                    <div className="row"></div>
                    <div className="row text-start">
                      <h3>{address.shipname}</h3>
                      <h3>
                        {address.street} {address.apt}
                      </h3>
                      <h3>
                        {address.city}, {address.state} {address.zipcode}
                      </h3>
                      <h3>{address.country}</h3>
                      <h3>{address.phone}</h3>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
