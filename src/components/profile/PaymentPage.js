import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";

import UserService from "../../services/user-service";
import "./Addresses.css";
import { Link } from "react-router-dom";
import "./Payment.css";
import AccountSideBar from "./AccountSideBar";

export default function PaymentPage(props) {
  const [payments, setPayment] = useState([]);

  useEffect(() => {
    fetchPayment();
  }, []);

  async function fetchPayment() {
    try {
      const payments = await UserService.fetchPayment();
      setPayment(payments);
      console.log(payments);
    } catch (error) {
      alert(error.message);
    }
  }

  async function removePayment(paymentId) {
    try {
      await UserService.deletePayment(paymentId);

      setPayment(payments.filter((payment) => payment.id !== paymentId));
      alert("Successfully Deleted.");
    } catch (error) {
      alert(error.message);
    }
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
        / PAYMENT METHODS
      </p>

      <div className="row mx-3">
        <div className="col-3 p-3 account-col">
          <AccountSideBar></AccountSideBar>
        </div>
        <div className="col-9">
          <div className="container p-4">
            <p className="text-black-50">
              Set, edit, or remove payment methods.
            </p>
            <Link to="/account/payment/add-payment">
              <div className="btn btn-secondary add-address-btn mb-3">
                ADD PAYMENT METHOD
              </div>
            </Link>

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
                        className="btn btn-danger remove-payment-btn"
                        onClick={() => {
                          // setAddressToRemove(address)
                          removePayment(payment.id);
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>

                      <Link to="/account/payment/update-payment">
                        <button
                          className="edit-payment-btn btn btn-secondary"
                          onClick={() => {
                            props.setUpdatePayment(payment);
                            console.log(props.updatePayment);
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
      </div>
    </div>
  );
}
