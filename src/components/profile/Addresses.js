import React, { useEffect, useState } from "react";
import NavbarAuth from "../../common/Navbar";

// Stylesheet
import "./Addresses.css";
import { auth } from "../../firebase/firebase";

import UserService from "../../services/user-service";
import { Link } from "react-router-dom";

export default function Addresses(props) {
  const [addresses, setAddresses] = useState([]);
  const [addressToRemove, setAddressToRemove] = useState(null);

  useEffect(() => {
    fetchAddress();
  }, []);

  async function fetchAddress() {
    try {
      const addresses = await UserService.fetchAddress();
      setAddresses(addresses);
      console.log(addresses);
    } catch (err) {
      console.log(err);
    }
  }

  async function logData(address) {
    console.log(address);
  }

  async function removeAddress(address) {
    try {
      // delete Movie from firebase firestore
      await UserService.deleteAddress(address.id);

      // update the movies array
      setAddresses(addresses.filter((address) => address.id !== addressToRemove.id));
      alert('Successfully Deleted.')
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="bg">
      <NavbarAuth></NavbarAuth>
      <div className="container mt-5 p-3">
        <h1 className="mb-3 text-light">Manage Addresses</h1>

        <div className="d-flex flex-wrap">
          <div
            className="card p-5 me-2 mb-2 align-middle text-center"
            id="add-card"
          >
            <a
              href="http://localhost:3000/account/addresses/address-default"
              alt="add"
              className="text-decoration-none text-black text-center"
            >
              <div className="row">
                <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
              </div>

              <div className="align-middle">
                <h2>Add Address</h2>
              </div>
            </a>
          </div>

          {addresses.map((address) => {
            return (
              <div className="card p-3 me-2" id="address-card" key={address.id}>
                <h5>{address.shipname}</h5>
                <h5>
                  {address.street} {address.apt}
                </h5>
                <h5>
                  {address.city}, {address.state} {address.zipcode}
                </h5>
                <h5>{address.country}</h5>
                <h5>{address.phone}</h5>
                <div className="d-grid gap-2 d-md-flex">
                  <button
                    className="remove-button btn btn-danger"
                    onClick={() => {
                      setAddressToRemove(address)
                      removeAddress(address)
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>

                  <Link to="/account/addresses/address-default">
                    <button
                      className="remove-button btn btn-secondary"
                      onClick={() => {
                        logData(address)
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
