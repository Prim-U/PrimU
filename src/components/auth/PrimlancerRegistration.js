import React, { useState } from "react";
import Navbar from "../../common/Navbar";
import Spinner from "../../common/Spinner";
import { Primlancer } from "../../models/Primlancer";
import UserService from "../../services/user-service";
import FileService from "../../services/file-service";
import { useNavigate } from "react-router-dom";

export default function PrimlancerRegistration() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [employmentHistory, setEmploymentHistory] = useState("");
  const [education, setEducation] = useState("");
  const [reference, setreference] = useState("");
  const [referenceFile, setReferenceFile] = useState(null);
  const [qualifications, setQualifications] = useState("");
  const [qualificationFiles, setQualificationFiles] = useState(null);
  const [availibility, setAvaibility] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setButtonDisabled(true);
    try {
      const referenceUrl = await FileService.uploadImage(
        referenceFile,
        (progress) => {
          console.log("Upload progress: ", progress);
        }
      );

      const qualificationsUrl = await FileService.uploadImage(
        qualificationFiles,
        (progress) => {
          console.log("Upload progress: ", progress);
        }
      );
      const primlancer = new Primlancer(
        email,
        firstName,
        lastName,
        phone,
        dob,
        country,
        street,
        apt,
        city,
        state,
        zipcode,
        education,
        employmentHistory,
        reference,
        referenceUrl,
        qualifications,
        qualificationsUrl,
        availibility,
        null
      );
      await UserService.addPrimlancer(primlancer);
      navigate("/");
      alert("Your application has been submitted, thank you!");
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
    setButtonDisabled(false);
  }

   function onReferenceSelected(e) {
    if (e.target.files.length) {
      setReferenceFile(e.target.files[0]);
    } else {
      setReferenceFile(null);
    }
  }

  function onResumeSelected(e) {
    if (e.target.files.length) {
      setQualificationFiles(e.target.files[0]);
    } else {
      setQualificationFiles(null);
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
          <h1 className="mb-3">Become a Primlancer</h1>

          <form onSubmit={onFormSubmit} autoComplete="false">
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
              <label className="form-label">Phone Number</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter last name"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Date of Birth</label>

              <input
                type="text"
                className="form-control"
                placeholder="DD/MM/YYYY"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
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
              <label className="form-label">Employment History</label>

              <textarea
                className="form-control"
                placeholder="Previous employers, job titles, dates of employment, and duties"
                required
                value={employmentHistory}
                onChange={(e) => setEmploymentHistory(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Education</label>

              <textarea
                className="form-control"
                placeholder="High school, college, trade schools, technical certification, or other relevant training"
                required
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Reference</label>

              <textarea
                className="form-control"
                placeholder="Names, contact information, and professional relationship of reference"
                required
                value={reference}
                onChange={(e) => setreference(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">
                References (Optional to Submit File)
              </label>
              <input
                type="file"
                className="form-control"
                placeholder=""
                onChange={onReferenceSelected}
                multiple
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Skills and Qualifications</label>

              <textarea
                className="form-control"
                placeholder="Specialised skills, training, or certifications relevant to the position"
                required
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Resume (Optional to Submit File)
              </label>
              <input
                type="file"
                className="form-control"
                placeholder=""
                onChange={onResumeSelected}
                multiple
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Availibility</label>

              <textarea
                className="form-control"
                placeholder="Days and hours available to work"
                required
                value={availibility}
                onChange={(e) => setAvaibility(e.target.value)}
              ></textarea>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark mt-3"
                id="registerButton"
                disabled={buttonDisabled}
              >
                {loading ? (
                  <Spinner extraClass="change-size" />
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
