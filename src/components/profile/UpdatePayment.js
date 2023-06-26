import React, { useEffect, useState } from "react";
import NavbarAuth from "../../common/Navbar";
import Spinner from "../../common/Spinner";
import UserService from "../../services/user-service";
import { useNavigate } from "react-router";
import { Payment } from "../../models/Payment";

export default function UpdatePayment(props) {
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
      if (props.updatePayment) {
        setCard(props.updatePayment.card);
        setExp(props.updatePayment.date);
        setCVV(props.updatePayment.cvv);
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
      if (props.updatePayment) {
        setCard(e.target.value);
        setExp(e.target.value);
        setCVV(e.target.value);
        const updatedPayment = new Payment(
          card,
          exp,
          cvv,
          props.updatePayment.id
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
  );
}
