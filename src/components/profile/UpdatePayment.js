import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import Spinner from "../../common/Spinner";
import UserService from "../../services/user-service";
import { useNavigate } from "react-router";
import { Payment } from "../../models/Payment";
import AccountSideBar from "./AccountSideBar";
import { Link } from "react-router-dom";

export default function UpdatePayment({updatePayment}) {
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCVV] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initialLoad();
  }, []);

  async function initialLoad() {
    try {
      if (updatePayment) {
        setCard(updatePayment.card);
        setExp(updatePayment.date);
        setCVV(updatePayment.cvv);
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
      if (updatePayment) {
        setCard(e.target.value);
        setExp(e.target.value);
        setCVV(e.target.value);
        const updatedPayment = new Payment(
          card,
          exp,
          cvv,
          updatePayment.id
        );
        await UserService.updatePayment(updatedPayment);
        alert("Payment Updated! Returning to Previous Page. . .");
        navigate("/account/payment");
      }
    } catch (error) {
      alert(error.message);
    }
    setButtonDisabled(false);
    setLoading(false);
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="mt-3 text-center" id="account-management">
        My Account
      </h1>
      <p className="text-center mt-2" id="account-management">
        <Link to="/" className="account-path">
          HOME
        </Link>{" "}
        /{" "}
        <Link to="/account" className="account-path">
          MY ACCOUNT
        </Link>{" "}
        /{" "}
        <Link to="/account/payment" className="account-path">
          PAYMENT METHODS
        </Link>{" "}
        / UPDATE PAYMENT
      </p>

      <div className="row mx-3">
        <div className="col-3 p-3 account-col">
          <AccountSideBar></AccountSideBar>
        </div>
        <div className="col-9">
          <div className="container p-4">
            <p className="text-black-50">
              Edit and update payment method in the form below.
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
                    "Update Payment Method"
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
