import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";

// Stylesheet
import "./Addresses.css";

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

  async function removeAddress(addressId) {
    try {
      await UserService.deleteAddress(addressId);

      setAddresses(addresses.filter((address) => address.id !== addressId));
      alert("Successfully Deleted.");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="bg">
      <Navbar></Navbar>
      <div className="container mt-5 p-3">
        <h1 className="mb-3 text-light">Manage Addresses</h1>

        <div className="d-flex flex-wrap">
          <div
            className="card p-5 me-2 mb-2 align-middle text-center add-card"
            id="add-address-card"
          >
            <a
              href="http://localhost:3000/account/addresses/add-address"
              alt="add"
              className="text-decoration-none text-black text-center"
            >
              <div className="row">
                <i className="fa fa-plus fa-4x mt-4" aria-hidden="true"></i>
              </div>

              <div className="align-middle">
                <h2>Add Address</h2>
              </div>
            </a>
          </div>

          {addresses.map((address) => {
            return (
              <div
                className="card p-3 me-2 mb-2"
                id="address-card"
                key={address.id}
              >
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
                    className="btn btn-danger"
                    onClick={() => {
                      setAddressToRemove(address);
                      removeAddress(address.id);
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>

                  <Link to="/account/address/update-address">
                    <button
                      className="edit-button btn btn-secondary"
                      onClick={() => {
                        props.setAddressList(address);
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
