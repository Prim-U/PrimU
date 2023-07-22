import React, { useState } from "react";
import Spinner from "../../common/Spinner";
import { Booking } from "../../models/Booking";
import UserService from "../../services/user-service";
import { useNavigate } from "react-router-dom";

export default function BookingRegistration() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [desiredService, setDesiredService] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setButtonDisabled(true);
    try{
        const booking = new Booking(
        email,
        firstName,
        lastName,
        phone,
        address,
        country,
        city,
        desiredService,
        date,
        startTime,
        null
        );
        await UserService.addBooking(booking);
        navigate("/");
        alert("Your booking has been completed!");
    }   catch(error) {
        alert(error.message);
    }
    setLoading(false);
    setButtonDisabled(false);
  }

  return (
    <div className="real-bg-dark">
      <div className="container mt-5 p-3">
        <img
          className="mx-auto d-block mb-5"
          src="https://prim-u.store/wp-content/uploads/2023/02/Prim-U-01-1.svg"
          width="100"
          height="80"
          alt=""
        />
        <div className="card p-5 mx-5">
          <h1 className="mb-3">Create A Booking</h1>
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
                placeholder="Please enter mobile phone number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Street Address</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter your street adress"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Country</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter current country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter current city"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Desired Service</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter the type of service that you are in need of"
                required
                value={desiredService}
                onChange={(e) => setDesiredService(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Service</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter the date you want to receive this service"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Start Time</label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter the time you want to receive this service"
                required
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
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
                  "Submit Booking"
                )}
              </button>
            </div>

            </form>
          </div>
      </div>
    </div>
  );
}
