import React, { useEffect, useState } from "react";

// Stylesheet
import "./Account.css";

// Funcitons/methods
import { Link } from "react-router-dom";

// Components
import NavbarAuth from "../../common/Navbar";
import AccountSideBar from "./AccountSideBar";
import UserService from "../../services/user-service";
import { auth } from "../../firebase/firebase";
import { User } from "../../models/Users";

export default function Account() {
  const [primlancers, setPrimlancers] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const user = await UserService.fetchUser();
      console.log(user.isSupplier);
      console.log(auth.currentUser)
      // console.log(primlancer);
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <div id="account-bg">
      <NavbarAuth></NavbarAuth>
      <h1 className="mt-3 text-center" id="account-management">
        My Account
      </h1>
      <p className="text-center mt-2" id="account-management">
        <Link to="/" className="account-path" id="home-path">
          HOME
        </Link>{" "}
        / MY ACCOUNT
      </p>

      <div className="row mx-3">
        <div className="col-3 p-3 account-col">
          <AccountSideBar></AccountSideBar>
        </div>

        <div className="col-9">
          <div className="d-flex flex-wrap">
            <Link to="/account/contact-info" className="text-decoration-none">
              <div className="btn btn-secondary dashboard-btn p-4 mx-2 mb-2">
                <div className="row">
                  <h1>
                    <i className="bi bi-person-fill"></i>
                  </h1>
                </div>
                <div className="row">
                  <div className="fs-4">Contact Info</div>
                </div>
              </div>
            </Link>

            <Link to="/account/addresses" className="text-decoration-none">
              <div className="btn btn-secondary dashboard-btn p-4 mx-2 mb-2">
                <div className="row">
                  <h1>
                    <i className="bi bi-house-fill"></i>
                  </h1>
                </div>
                <div className="row">
                  <div className="fs-4">Address</div>
                </div>
              </div>
            </Link>

            <Link to="/account/payment" className="text-decoration-none">
              <div className="btn btn-secondary dashboard-btn p-4 mx-2 mb-2">
                <div className="row">
                  <h1>
                    <i className="bi bi-credit-card-2-back-fill"></i>
                  </h1>
                </div>
                <div className="row">
                  <div className="fs-4">Payment Methods</div>
                </div>
              </div>
            </Link>

            <Link to="/account/seller" className="text-decoration-none">
              <div className="btn btn-secondary dashboard-btn p-4 mx-2 mb-2">
                <div className="row">
                  <h1>
                    <i className="bi bi-box-fill"></i>
                  </h1>
                </div>
                <div className="row">
                  <div className="fs-4">Become a Seller</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
