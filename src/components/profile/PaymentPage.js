import React from "react";
import NavbarAuth from "../../common/Navbar";

export default function PaymentPage() {
  return (
    <div className="bg">
      <NavbarAuth></NavbarAuth>
      <div className="mt-5 p-3">
        <h1 className="mb-3">Manage Payment Methods</h1>
        <div className="row">
          <div className="col">
            <div className="card p-5" id="add-card">
              <a
                href="http://localhost:3000/account/payment/payment-details"
                alt="add"
                className="text-decoration-none text-black text-center"
              >
                <div className="row">
                  <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
                </div>
                <div className="row text-center">
                  <h2>Add Method</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
