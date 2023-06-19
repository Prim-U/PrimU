import React, { useState } from "react";
import NavbarAuth from "../../common/Navbar";
import Spinner from "../../common/Spinner";
import { Address } from "../../models/AddressModel";
import UserService from "../../services/user-service";
import { useNavigate } from "react-router";

export default function AddAddress(props) {
  const [loading, setLoading] = useState(false);
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");  
  const [phone, setPhone] = useState("");  
  const [shipName, setShipName] = useState("");

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const address = new Address(shipName, country, street, apt, city, state, zipcode, phone);
      props.createAddress(address);
      await UserService.addAddress(address);
      alert("Address Added! Returning to Previous Page. ..");
      navigate("/account/addresses");
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }
  return (
    <div className="bg-dark">
      <NavbarAuth></NavbarAuth>
      <div className="container mt-5 p-3">
        <img
          className="mx-auto d-block mb-5"
          src="https://prim-u.store/wp-content/uploads/2023/02/Prim-U-01-1.svg"
          width="100"
          height="80"
          alt=""
        />
        <div className="card p-5 mx-5">
          <form onSubmit={onFormSubmit}>

          <div className="mb-3">
              <label className="form-label">Name</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter name for shipping"
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
                type="text"
                className="form-control"
                placeholder="Enter preferred number to contact you with"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark mt-3"
                id="updateButton"
              >
                {loading ? <Spinner extraClass="change-size" /> : "Add Address"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
