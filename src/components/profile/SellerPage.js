import React from "react";
import NavbarAuth from "../../common/Navbar";
import { Link } from "react-router-dom";

export default function SellerPage() {
  return (
    <div id="account-bg">
      <NavbarAuth></NavbarAuth>
      

      <div className="container p-3">
      <h1 className="my-3 text-start" id="account-management">
        Become a Seller
      </h1>
        <div className="card p-5 me-2 mb-2 align-middle text-center">
          <div className="align-middle">
            <h3>Supplier</h3>
          </div>
          <Link to="/account/seller/supplier-registration">
            <div className="btn btn-secondary">Sign Up!</div>
          </Link>
        </div>

        <div className="card p-5 me-2 mb-2 align-middle text-center">
          <div className="align-middle">
            <h3>Primlancer</h3>
          </div>
          <Link to="/account/seller/primlancer-registration">
            <div className="btn btn-secondary">Sign Up!</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
