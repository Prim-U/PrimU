import React, { useState } from 'react'
import NavbarAuth from '../../common/Navbar'
import { Payment } from '../../models/Payment';
import UserService from "../../services/user-service";
import { useNavigate } from 'react-router-dom';
import Spinner from '../../common/Spinner';

export default function AddPayment() {
    const [card, setCard] = useState('');
    const [exp, setExp] = useState('');
    const [cvv, setCVV] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function onFormSubmit(e) {
        e.preventDefault();
        setLoading(true);
    try {
      const payment = new Payment(card, exp, cvv);
      await UserService.addPayment(payment);
      alert("Payment Added! Returning to Previous Page. ..");
      navigate("/account/payment");
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
              >
                {loading ? <Spinner extraClass="change-size" /> : "Add Payment Method"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
