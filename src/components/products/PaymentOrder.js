import React, { useState } from "react";
import UserService from "../../services/user-service";

export default function PaymentOrder({ setBillingDetails }) {
  const [payments, setPayments] = useState([]);
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCVV] = useState("");
  const [selectPaymentButton, setSelectPaymentButton] = useState(false);

  function fillInPaymentForm(payment) {
    setCard(payment.card);
    setCVV(payment.cvv);
    setExp(payment.date);
    alert("Payment Selected!");
  }

  async function showPayment() {
    setSelectPaymentButton(true);
    try {
      const payments = await UserService.fetchPayment();
      setPayments(payments);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h3 className="mb-3 fw-bold">BILLING DETAILS</h3>
      <button
        className="btn btn-primary mb-2"
        type="button"
        onClick={() => showPayment()}
        disabled={selectPaymentButton}
      >
        CHOOSE PAYMENT METHOD
      </button>

      <div className="d-flex flex-wrap">
        {payments.map((payment) => {
          return (
            <div
              className="card p-3 me-2 mb-2"
              id="payment-card"
              key={payment.id}
            >
              <h5>Debit card ending in **** {payment.card.slice(-4)}</h5>
              <div className="d-grid gap-2 d-md-flex">
                <button
                  className="btn btn-primary mt-3"
                  type="button"
                  onClick={() => {
                    setBillingDetails(payment);
                    fillInPaymentForm(payment);
                  }}
                >
                  SELECT PAYMENT
                </button>
              </div>
            </div>
          );
        })}
      </div>

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
    </div>
  );
}
