import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import { Link } from "react-router-dom";
import "./DisplayProduct.css";

export default function DisplayProduct({ displayProduct }) {
  useEffect(() => {
    initialLoad();
  }, []);

  async function initialLoad() {
    try {
      if (displayProduct) {
        console.log(displayProduct);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="row">
        <div className="col mt-5">
          <img
            src={displayProduct.productImageUrl}
            alt={displayProduct.productName}
            width="392"
            height="340"
          ></img>
        </div>
        <div className="col ms-5">
          <div className="mt-5 mb-3">
            {" "}
            <Link className="account-path" to="/">
              Home
            </Link>{" "}
            / {displayProduct.category} / {displayProduct.productName}{" "}
          </div>{" "}
          <h2 className="mb-3">{displayProduct.productName}</h2>
          <h4 className="mb-3 display-price">Price: R{displayProduct.price}</h4>
          <div className="mb-3 display-description">
            {displayProduct.description}
          </div>
          <div>Is Organic? {displayProduct.status}</div>
          <div>Type? {displayProduct.category}</div>
          <form className="display-cart">
            <div className="input-group mt-5">
              <button
                className="btn btn-outline-secondary display-btn"
                type="button"
                id="button-addon1"
              >
                Add to Cart
              </button>
              <input
                type="number"
                step="1"
                min="1"
                className="form-control display-input"
                placeholder="Select Amount"
              />
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
