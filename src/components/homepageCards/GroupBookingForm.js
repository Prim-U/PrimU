import React, { useState } from "react";
import Navbar from "../../common/Navbar";
import Spinner from "../../common/Spinner";
import { useNavigate } from "react-router";
import { GroupBooking } from "../../models/GroupBooking";
import UserService from "../../services/user-service";
import { auth } from "../../firebase/firebase";

export default function GroupBookingForm() {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [groupType, setGroupType] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [mainContact, setMainContact] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [allGuests, setAllGuests] = useState("");
  const [termsConditions, setTermsConditions] = useState(false);
  const [informGroup, setInformGroup] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    setButtonDisabled(true);
    setLoading(true);
    try {
      const uid = auth.currentUser.uid;
      const booking = new GroupBooking(
        firstName,
        lastName,
        email,
        phone,
        addressOne,
        addressTwo,
        city,
        state,
        zipCode,
        country,
        company,
        groupType,
        date,
        startTime,
        numGuests,
        mainContact,
        creditCard,
        allGuests,
        additionalInfo,
        termsConditions,
        informGroup,
        uid
      );
      await UserService.addBooking(booking);
      alert("Booking Submitted, you'll hear back from us soon! Returning to Previous Page . . .");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
    setButtonDisabled(false);
    setLoading(false);
  }

  const handleTermsToggle = () => {
    setTermsConditions(!termsConditions);
  };

  const handleInformToggle = () => {
    setInformGroup(!informGroup);
  };

  return (
    <div>
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
            <h1>Group Booking Request Form</h1>
            <form onSubmit={onFormSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
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
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address 1</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address 1"
                  required
                  value={addressOne}
                  onChange={(e) => setAddressOne(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address 2"
                  required
                  value={addressTwo}
                  onChange={(e) => setAddressTwo(e.target.value)}
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
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">ZipCode / Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ZipCode / Postal Code"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
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
                <label className="form-label">Company or Group Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company or Group Name"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Type of group (bridal, birthday, etc.)
                </label>
                <input
                  type="text"
                  className="form-control mb-1"
                  placeholder="Type of group"
                  required
                  value={groupType}
                  onChange={(e) => setGroupType(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Your ideal date and start time for the group event:
                </label>
                <input
                  type="date"
                  className="form-control"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Ideal start time for the group (local time):
                </label>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Ideal start time for the group:"
                  required
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Number of guests in your group:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Number of guests"
                  required
                  value={numGuests}
                  onChange={(e) => setNumGuests(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Main contact name & phone number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Main contact name & phone number"
                  required
                  value={mainContact}
                  onChange={(e) => setMainContact(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Credit Card Number (to hold reservation):
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Credit Card Number"
                  required
                  value={creditCard}
                  onChange={(e) => setCreditCard(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" for="allGuests">
                  Please enter the first and last name of EVERY guest, a phone
                  number for each guest and which services they would like to
                  receive:
                </label>
                <textarea
                  className="form-control"
                  required
                  cols="40"
                  id="allGuests"
                  value={allGuests}
                  name="allGuests"
                  rows="10"
                  onChange={(e) => setAllGuests(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Thank you! If there is any other information please include it
                  below. Once you select submit your form will be sent to our
                  Group Booking Coordinator. If you require assistance call us
                  at +27-060-070-3045 or email info@prim-u.com
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Additional Information"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                />
              </div>
              <br></br>

              <div className="mb-3">
                <label className="form-label">
                  GROUP BOOKING TERMS & CONDITIONS: 18% gratuity will be added
                  to parties of 4 or more people. To cancel the group booking we
                  require 5 days notice, after that time a 50% charge for each
                  service will be charged to the card on file. To modify an
                  appointment, 48 hours notice is required. Less than this will
                  result in a charge of 50% of the cost of the service to the
                  credit card on file. We require each guest to arrive 15
                  minutes early for their appointment. If guests are late, their
                  service may be shortened depending on time and staff available
                  and they will be charged for the original service booked.
                </label>

                <input
                  className="m-2"
                  type="checkbox"
                  id="termsConditions"
                  name="termsConditions"
                  value={termsConditions}
                  onChange={handleTermsToggle}
                  required
                ></input>
                <label for="termsConditions" className="form-label">
                  I agree to the terms & conditions above.
                </label>

                <br></br>

                <input
                  className="m-2"
                  type="checkbox"
                  id="informGroup"
                  name="informGroup"
                  value={informGroup}
                  onChange={handleInformToggle}
                  required
                ></input>
                <label for="informGroup" className="form-label">
                  I agree to inform all members of my group of the terms.
                </label>
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
                    "Submit Booking"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
