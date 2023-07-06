import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";

// Stylesheet
import "./Addresses.css";

import UserService from "../../services/user-service";
import { Link } from "react-router-dom";
import AccountSideBar from "./AccountSideBar";

export default function Addresses({setAddressList, addressList}) {
  const [addresses, setAddresses] = useState([]);

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
    <div>
      <Navbar></Navbar>
      <h1 className="mt-3 text-center" id="account-management">
        My Account
      </h1>
      <p className="text-center mt-2 account-path" id="account-management">
        <Link to="/" className="account-path" id="home-path">
          HOME
        </Link>{" "}
        /{" "}
        <Link to="/account" className="account-path" id="account-path">
          MY ACCOUNT
        </Link>{" "}
        / ADDRESS MANAGEMENT
      </p>

      <div className="row mx-3">
        <div className="col-3 p-3 account-col">
          <AccountSideBar></AccountSideBar>
        </div>
        <div className="col-9">
          <div className="container p-4">
            <p className="text-black-50">Set, edit, or remove addresses.</p>
            <Link to="/account/addresses/add-address">
              <div className="btn btn-secondary add-address-btn mb-3">
                ADD ADDRESS
              </div>
            </Link>

            <div className="d-flex flex-wrap">
              {addresses.map((address) => {
                return (
                  <div
                    className="card p-3 me-2 mb-2"
                    id="address-card"
                    key={address.id}
                  >
                    <div className="fs-6">{address.shipname}</div>
                    <div className="fs-6">
                      {address.street} {address.apt}
                    </div>
                    <div className="fs-6">
                      {address.city}, {address.state} {address.zipcode}
                    </div>
                    <div className="fs-6">{address.country}</div>
                    <div className="fs-6">{address.phone}</div>
                    <div className="d-grid gap-2 d-md-flex">
                      <button
                        className="btn btn-danger remove-address-btn"
                        onClick={() => {
                          removeAddress(address.id);
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>

                      <Link to="/account/address/update-address">
                        <button
                          className="btn btn-secondary edit-address-btn ms-3"
                          onClick={() => {
                            setAddressList(address);
                            console.log(addressList)
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
      </div>
    </div>
  );
}
