import React, { useState } from "react";
import Navbar from "../../common/Navbar";
import { Payment } from "../../models/Payment";
import UserService from "../../services/user-service";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../common/Spinner";
import AccountSideBar from "./AccountSideBar";

export default function AddPayment() {
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCVV] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    setButtonDisabled(true);
    setLoading(true);
    try {
      const payment = new Payment(card, exp, cvv, null);
      await UserService.addPayment(payment);
      alert("Payment Added! Returning to Previous Page. . .");
      navigate("/account/payment");
    } catch (error) {
      alert(error.message);
    }
    setButtonDisabled(false);
    setLoading(false);
  }
  return (
    <div /* className="real-bg-dark" */>
      <Navbar></Navbar>
      <h1 className="mt-3 text-center" id="account-management">
        My Account
      </h1>
      <p className="text-center mt-2" id="account-management">
      <Link to="/" className="account-path">HOME</Link> / <Link to="/account" className="account-path">MY ACCOUNT</Link> / <Link to="/account/payment" className="account-path">PAYMENT METHODS</Link> / ADD PAYMENT
      </p>

      <div className="row mx-3">
        <div className="col-3 p-3 account-col">
          <AccountSideBar></AccountSideBar>
        </div>
        <div className="col-9">
          <div className="container p-4">
            <p className="text-black-50">
              Fill out payment information in the form below.
            </p>

            <form onSubmit={onFormSubmit}>
              <div className="mb-3">
                <label className="form-label">Card Number</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter card number"
                  required
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Expiration Date</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter card expiration date"
                  required
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">CVV</label>

                <input
                  type="text"
                  className="form-control mb-1"
                  placeholder="Enter 3 digits on back of the card"
                  required
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-dark mt-3"
                  id="updateButton"
                  disabled={buttonDisabled}
                >
                  {loading ? (
                    <Spinner extraClass="change-size" />
                  ) : (
                    "Add Payment Method"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5 p-3">
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
              <label className="form-label">Card Number</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter card number"
                required
                value={card}
                onChange={(e) => setCard(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Expiration Date</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter card expiration date"
                required
                value={exp}
                onChange={(e) => setExp(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">CVV</label>

              <input
                type="text"
                className="form-control mb-1"
                placeholder="Enter 3 digits on back of the card"
                required
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark mt-3"
                id="updateButton"
                disabled={buttonDisabled}
              >
                {loading ? (
                  <Spinner extraClass="change-size" />
                ) : (
                  "Add Payment Method"
                )}
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}
