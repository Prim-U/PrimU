import React, { useState } from "react";
import Spinner from "../../common/Spinner";
import Navbar from "../../common/Navbar";
import { Seller } from "../../models/Seller";
import UserService from "../../services/user-service";
import FileService from "../../services/file-service";
import { useNavigate } from "react-router-dom";

export default function SupplierRegistration() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [inspectionFile, setInspectionFile] = useState(null);
  const [certificateFile, setCertificateFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    setLoading(true);
    alert("This might take a couple of seconds . . .");
    try {
      const inspectionUrl = await FileService.uploadImage(
        inspectionFile,
        (progress) => {
          console.log("Upload progress: ", progress);
        }
      );

      const certificateUrl = await FileService.uploadImage(
        certificateFile,
        (progress) => {
          console.log("Upload progress: ", progress);
        }
      );

      const seller = new Seller(
        email,
        firstName,
        lastName,
        storeName,
        country,
        street,
        apt,
        city,
        state,
        zipcode,
        phone,
        inspectionUrl,
        certificateUrl,
        null
      );
      await UserService.addSeller(seller);
      navigate("/");
      alert("Seller Successfully Registered");
    } catch (error) {
      alert(error.message);
    }
    setButtonDisabled(false);
    setLoading(false);
  }

  function onInspectionSelected(e) {
    if (e.target.files.length) {
      setInspectionFile(e.target.files[0]);
    } else {
      setInspectionFile(null);
    }
  }

  function onCertificateSelected(e) {
    if (e.target.files.length) {
      setCertificateFile(e.target.files[0]);
    } else {
      setCertificateFile(null);
    }
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
          <h1 className="mb-4">Supplier Registration</h1>
          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                placeholder="Please enter email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">First Name</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter first name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Store Name</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter store name"
                required
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Country/Region</label>

              <select
                className="form-select"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">-Select a location-</option>
                <option value="" disabled>
                  -----------------
                </option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="Kenya">Kenya</option>
                <option value="Netherlands">Netherlands</option>
                <option value="South Africa">South Africa</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>
              {/* <input
                type="text"
                className="form-control"
                placeholder="Country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              /> */}
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
              <label className="form-label">Store Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter preferred number to contact you with"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Inspection Report</label>
              <input
                type="file"
                className="form-control"
                placeholder=""
                onChange={onInspectionSelected}
                multiple
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Certificate</label>
              <input
                type="file"
                className="form-control"
                placeholder=""
                required
                onChange={onCertificateSelected}
                multiple
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark mt-3"
                id="submitBtn"
                disabled={buttonDisabled}
              >
                {loading ? <Spinner extraClass="change-size" /> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
