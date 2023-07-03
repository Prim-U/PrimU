import React, { useState } from "react";
import UserService from "../../services/user-service";
import { auth } from "../../firebase/firebase";

export default function AddressOrder({setShippingAddress}) {
  const [addresses, setAddresses] = useState([]);
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [shipName, setShipName] = useState("");
  const [email, setEmail] = useState("");
  const [selectAddressButton, setSelectAddressButton] = useState(false);
  const user = auth.currentUser;

  async function showAddresses() {
    setSelectAddressButton(true);
    try {
      const addresses = await UserService.fetchAddress();
      setAddresses(addresses);
    } catch (err) {
      alert(err.message);
    }
  }

  function fillInAddressForm(address) {
    setStreet(address.street);
    setApt(address.apt);
    setCountry(address.country);
    setCity(address.city);
    setState(address.state);
    setZipcode(address.zipcode);
    setPhone(address.phone);
    setShipName(address.shipname);
    setEmail(user.email);
    alert("Address Selected!");
  }
  return (
    <div>
      <h3 className="mb-3 fw-bold">SHIPPING ADDRESS</h3>
      <button
        className="btn btn-primary mb-2"
        type="button"
        onClick={() => showAddresses()}
        disabled={selectAddressButton}
      >
        CHOOSE ADDRESS
      </button>
      <div className="d-flex flex-wrap mb-2">
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
              <button
                className="btn btn-primary mt-5"
                type="button"
                onClick={() => {
                  setShippingAddress(address);
                  fillInAddressForm(address);
                }}
              >
                SELECT ADDRESS
              </button>
            </div>
          );
        })}
      </div>
      <div className="mb-3">
        <label className="form-label">Name</label>

        <input
          type="text"
          className="form-control"
          placeholder="Please enter full name"
          required
          value={shipName}
          onChange={(e) => setShipName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Country/Region</label>

        <input
          type="text"
          className="form-control"
          placeholder="Country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Street Address</label>

        <input
          type="text"
          className="form-control mb-1"
          placeholder="Street address or PO Box"
          required
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Apartment, suite, building, unit, floor, etc."
          required
          value={apt}
          onChange={(e) => setApt(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          placeholder="City"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">State/Province/Region</label>
        <input
          type="text"
          className="form-control"
          placeholder="State/Province/Region"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">ZipCode</label>
        <input
          type="text"
          className="form-control"
          placeholder="Zipcode"
          required
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Enter preferred number to contact you with"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}
