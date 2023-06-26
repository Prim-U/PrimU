import React from "react";
import Navbar from "../../common/Navbar";
import { Link } from "react-router-dom";
import "./SellerPage.css";

export default function SellerPage() {
  return (
    <div id="account-bg">
      <Navbar></Navbar>

      <div className="container p-3">
        <h1 className="my-3 text-start" id="account-management">
          Become a Seller
        </h1>

        <div className="row">
          <div className="col">
            <div className="card supplier-card p-5 me-2 mb-2">
              <div className="row mt-5 mx-auto">
                <div className="col">
                  <h3 className="fw-bolder text-light">Supplier</h3>
                </div>
              </div>
              <div className="row mx-auto mt-5">
                <div className="col">
                  <Link to="/account/seller/-registration">
                    <btn className="btn btn-dark seller-btn">SIGN UP HERE</btn>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card primlancer-card p-5 me-2 mb-2">
              <div className="row mt-5 mx-auto">
                <div className="col">
                  <h3 className="text-light fw-bolder">Primlancer</h3>
                </div>
              </div>
              <div className="row mx-auto mt-5">
                <div className="col">
                  <Link to="/account/seller/primlancer-registration">
                    <btn className="btn btn-dark seller-btn">SIGN UP HERE</btn>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
