import React from "react";
import Navbar from "../../common/Navbar";
import { Link } from "react-router-dom";
import "./SellerPage.css";
import { useEffect } from "react";
import UserService from "../../services/user-service";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

export default function SellerPage() {
  const navigate = useNavigate(); 

  async function handleOnClick() {
    try {
      const user = await UserService.fetchUser();
      if (user.isSupplier !== "yes") {
        navigate('/account/seller/supplier-registration');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div /*id="account-bg"*/>

      <div className="container p-3">
        <h1
          className="mt-3 mb-5 text-center header-seller-text" /*id="account-management"*/
        >
          Become A Seller
        </h1>
        <div className="row">
          <div className="col">
            <div className="seller-card supplier-card">
              <img
                className="supplier-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOq8uLc7g5srAEEZn0QLsJ4M1ZUVLYJY_FXQ&usqp=CAU"
                alt="Become Supplier"
              ></img>
              <div className="supplier-card-text mx-auto">
                <h2 className="fw-bolder">SUPPLIER</h2>
              </div>
              <Link to="/account/seller/supplier-registration">
                <div className="btn btn-dark seller-card-btn mb-5">
                  SIGN UP HERE
                </div>
              </Link>
              <Link to="/products/post-products">
                <div
                  className="btn btn-dark seller-card-btn mt-5"
                  // onClick={() => handleOnClick()}
                >
                  POST PRODUCTS
                </div>
              </Link>
            </div>
          </div>

          <div className="col">
            <div className="seller-card primlancer-card">
              <img
                className="primlancer-image"
                src="https://www.bagley.msstate.edu/wp-content/uploads/Remote-Work.jpg"
                alt="Become a Primlancer"
              ></img>
              <div className="primlancer-card-text mx-auto">
                <h2 className="fw-bolder">PRIMLANCER</h2>
              </div>
              <Link to="/account/seller/primlancer-registration">
                <div className="btn btn-dark seller-card-btn">SIGN UP HERE</div>
              </Link>
              <Link to="/treatment-services">
                <div className="btn btn-dark seller-card-btn mt-5">
                  POST SERVICES
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="text-center fw-medium">
            We're currently accepting seller application for individuals and
            businesses established <br></br> in France, Germany, Japan, Kenya,
            Netherlands, U.K and South Africa.
          </h4>
        </div>
      </div>

      <div className="row bg-pink mt-3 p-3">
        <h1 className="text-center why-sell-color mt-4">Why Sell on PRIM-U</h1>
        <div className="row mt-3">
          <div className="col mx-2 text-center">
            <div className="container">
              <img
                src="	https://prim-u.app/wp-content/uploads/2023/02/lowfees_100-1.webp"
                alt="Low Fees"
                width="107"
                height="107"
                className="mb-3"
              />
            </div>
            <div className="container">
              <h2 className="mb-3">Low Fees</h2>
            </div>
            <div className="container">
              <p>
                It doesn’t take much to list your items and once you make a
                sale, marketplace fee is just 10%. There is no listing fee, no
                payment gateway transaction fee, no seller earnings payout fee.
              </p>
            </div>
          </div>

          <div className="col mx-2 text-center">
            <div className="container">
              <img
                src="https://prim-u.app/wp-content/uploads/2023/02/powerfultools_100-1.webp"
                alt="Easy management over your business"
                width="107"
                height="107"
                className="mb-3"
              />
            </div>
            <div className="container">
              <h2 className="mb-3">Powerful Tools</h2>
            </div>
            <div className="container">
              <p>
                PRIM-U Seller Portal tools and services make it easy to manage,
                promote and grow your business. Easily manage products and
                orders. Print shipping labels directly from the Seller Portal
              </p>
            </div>
          </div>

          <div className="col mx-2 text-center">
            <div className="container">
              <img
                src="https://prim-u.app/wp-content/uploads/2023/02/quicksupport_100-1.webp"
                alt="Quick, reliable support"
                width="107"
                height="107"
                className="mb-3"
              />
            </div>
            <div className="container">
              <h2 className="mb-3">Quick Support</h2>
            </div>
            <div className="container">
              <p>
                Friendly and professional support team is available to assist.
                We answer all support emails within 24 hours, usually within
                just a few hours or less. Access our support ticket system to
                get help quickly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-3 mt-4">
        <video
          width="872"
          height="490"
          src="http://prim-u.app/wp-content/uploads/2023/02/prim-u-make-up.mp4"
          alt="video of woman receiving makeup"
          autoPlay
          loop
          muted="muted"
        ></video>
        <div className="row mt-5 p-3">
          <h1 className="text-center why-sell-color">
            Here's what you get for your fee:
          </h1>
        </div>
        <div className="container fee-container fs-5 mt-4">
          <ul className="text-black-50">
            <li className="mb-2">
              Multiple channels of marketing included to reach millions and
              millions of shoppers.
            </li>
            <li className="mb-2">
              Shipping labels you can print at home or warehouse, with big
              discounts on postage. You can even integrate ShipStation to your
              seller account.
            </li>
            <li className="mb-2">
              Seller protection and customer support to help you sell your
              product.
            </li>
            <li className="mb-2">
              Marketplace Fee is based on item selling price when the product is
              sold.
            </li>
            <li>
              Customer cashback is paid by WiiShoppe to customer’s Digital
              Wallet, which can be spent to make a purchase or withdraw to their
              bank account.
            </li>
          </ul>
        </div>
      </div>

      <div className="row bg-pink p-3 mt-3">
        <div className="container text-center p-3 mt-3">
          <img
            src="https://prim-u.app/wp-content/uploads/2023/02/vender2-1.webp"
            alt="Process payments via all major credit cards"
            width="140"
            height="128"
          />
        </div>
        <div className="container text-center p-5">
          <h4 className="mx-5">
            We process payments via all major credit cards and an external
            payments gateway that allows you to process transactions with a
            variety of payment methods. Funds from sales on PRIM-U will be
            deposited into your Bank Account.
          </h4>
        </div>
      </div>
    </div>
  );
}
