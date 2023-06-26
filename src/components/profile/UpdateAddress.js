import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import Spinner from "../../common/Spinner";
import { Address } from "../../models/AddressModel";
import UserService from "../../services/user-service";
import { useNavigate } from "react-router";

export default function UpdateAddress(props) {
  const [loading, setLoading] = useState(false);
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [shipName, setShipName] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    initialLoad();
  }, []);

  async function initialLoad() {
    try {
      if (props.addressList) {
        setStreet(props.addressList.street);
        setApt(props.addressList.apt);
        setCountry(props.addressList.country);
        setCity(props.addressList.city);
        setState(props.addressList.state);
        setZipcode(props.addressList.zipcode);
        setPhone(props.addressList.phone);
        setShipName(props.addressList.shipname);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    setButtonDisabled(true);
    setLoading(true);
    try {
      if (props.addressList) {
        setStreet(e.target.value);
        setApt(e.target.value);
        setCountry(e.target.value);
        setCity(e.target.value);
        setState(e.target.value);
        setZipcode(e.target.value);
        setPhone(e.target.value);
        setShipName(e.target.value);
        const updatedAddress = new Address(
          shipName,
          country,
          street,
          apt,
          city,
          state,
          zipcode,
          phone,
          props.addressList.id
        );
        await UserService.updateAddress(updatedAddress);
        alert("Address Updated! Returning to Previous Page. . .");
        navigate("/account/addresses");
      }
    } catch (error) {
      alert(error.message);
    }
    setButtonDisabled(false);
    setLoading(false);
  }
  return (
    <div className="real-bg-dark">
      <Navbar></Navbar>
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
                id="submitBtn"
                disabled={buttonDisabled}
              >
                {loading ? (
                  <Spinner extraClass="change-size" />
                ) : (
                  "Update Address"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
