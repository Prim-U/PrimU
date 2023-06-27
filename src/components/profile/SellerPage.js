import React from "react";
import Navbar from "../../common/Navbar";
import { Link } from "react-router-dom";
import "./SellerPage.css";

export default function SellerPage() {
  return (
    <div /*id="account-bg"*/>
      <Navbar></Navbar>

      <div className="container p-3">
        <h1
          className="mt-3 mb-5 text-center header-seller-text" /*id="account-management"*/
        >
          Become A Seller
        </h1>
        <div className="row">
          <div className="col">
            <div className="seller-card">
              <img
                className="supplier-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOq8uLc7g5srAEEZn0QLsJ4M1ZUVLYJY_FXQ&usqp=CAU"
                alt="Become Supplier"
              ></img>
              <div className="supplier-card-text mx-auto">
                <h2 className="fw-bolder">SUPPLIER</h2>
              </div>
              <Link to="/account/seller/supplier-registration">
                <div className="btn btn-dark seller-card-btn">SIGN UP HERE</div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="seller-card">
              <img
                className="primlancer-image"
                src="https://www.bagley.msstate.edu/wp-content/uploads/Remote-Work.jpg"
                alt="Become Supplier"
              ></img>
              <div className="primlancer-card-text mx-auto">
                <h2 className="fw-bolder">PRIMLANCER</h2>
              </div>
              <Link to="/account/seller/primlancer-registration">
                <div className="btn btn-dark seller-card-btn">SIGN UP HERE</div>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="card text-white">
          <img
            src="https://www.bagley.msstate.edu/wp-content/uploads/Remote-Work.jpg"
            alt="Become Supplier"
          ></img>
          <div className="card-image-overlay">
            <h5 className="seller-card-title">CORPORATE EVENTS</h5>

            <div className="p-button">
              <p className="seller-card-text">
                Presentation is everything. First impressions last. Get
                connected to Professionals that can partner with you to get your
                team ready at that crucial time where it really matters the
                most. The first step would be to download the Prim-U App.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col">
            <div className="card supplier-card p-5 me-2 mb-2">
              <div className="row mt-5 mx-auto">
                <div className="col">
                  <h3 className="fw-bolder text-light">Supplier</h3>
                </div>
              </div>
              <div className="row mx-auto mt-5">
                <div className="col">
                  <Link to="/account/seller/supplier-registration">
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
        </div> */}
      </div>
    </div>
  );
}
