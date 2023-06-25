import React, { useEffect, useState } from "react";
import NavbarAuth from "../../common/Navbar";

import UserService from "../../services/user-service";
import "./Addresses.css";
import { Link } from "react-router-dom";
import './Payment.css';

export default function PaymentPage(props) {

  const [payments, setPayment] = useState([]);

  useEffect(() => {
    fetchPayment();
  }, [])

  async function fetchPayment() {
    try {
      const payments = await UserService.fetchPayment();
      setPayment(payments)
      console.log(payments);
    } catch (error) {
      alert(error.message)
    }
  }

  async function removePayment(paymentId) {
    try {
      await UserService.deletePayment(paymentId);

      setPayment(payments.filter((payment) => payment.id !== paymentId));
      alert('Successfully Deleted.')
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="bg">
      <NavbarAuth></NavbarAuth>
      <div className="container mt-5 p-3">
        <h1 className="mb-3 text-light">Manage Wallet</h1>

        <div className="d-flex flex-wrap">
          <div
            className="card p-5 me-2 mb-2 align-middle text-center"
            id="add-card"
          >
            <a
              href="http://localhost:3000/account/payment/add-payment"
              alt="add"
              className="text-decoration-none text-black text-center"
            >
              <div className="row">
                <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
              </div>

              <div className="align-middle">
                <h2>Add a Payment Method</h2>
              </div>
            </a>
          </div>

          {payments.map((payment) => {
            return (
              <div className="card p-3 me-2" id="payment-card" key={payment.id}>
                <h5>Debit card ending in **** {payment.card.slice(-4)}</h5>
                <div className="d-grid gap-2 d-md-flex">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      // setAddressToRemove(address)
                      removePayment(payment.id)
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>

                  <Link to="/account/payment/update-payment">
                    <button
                      className="edit-button btn btn-secondary"
                      onClick={() => {
                        props.setUpdatePayment(payment);
                        console.log(props.updatePayment)
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
