import React, { useState } from "react";
import { ProductData } from "../../models/ProductData";
import { Link } from "react-router-dom";
import "./DisplayProduct.css";

export default function DisplayProduct({ setOrder, displayProduct, order }) {
  const [quantity, setQuantity] = useState(1);

  function decrementCart() {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  }

  function incrementCart() {
    if (quantity < 15) {
      setQuantity((prevCount) => prevCount + 1);
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const subtotal = displayProduct.price * quantity;
    const item = new ProductData(
      displayProduct.productName,
      displayProduct.price,
      quantity,
      subtotal,
      displayProduct.productImageUrl,
      displayProduct.id
    );
    setOrder((orderList) => [...orderList, item]);
    alert("Items Added to Cart.");
  }

  return (
    <div>
      <div className="row mb-2">
        <div className="col mt-5">
          <img
            src={displayProduct.productImageUrl}
            alt={displayProduct.productName}
            width="392"
            height="340"
          ></img>
        </div>

        <div className="col ms-5">
          <div className="mt-5 mb-4">
            {" "}
            <Link className="account-path" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="account-path me-1" to="/products">
              Shop
            </Link>
            / {displayProduct.category} / {displayProduct.productName}{" "}
          </div>{" "}
          <h2 className="mb-3">{displayProduct.productName}</h2>
          <h4 className="mb-3 display-price">Price: R{displayProduct.price}</h4>
          <div className="mb-3 display-description">
            {displayProduct.summary}
          </div>
          <div>Is Organic? {displayProduct.status}</div>
          <div className="mb-5">Type? {displayProduct.category}</div>
          <div className="input-group quantity-holder mb-3">
            <button
              className="edit-quantity-btn btn btn-primary"
              onClick={decrementCart}
            >
              -
            </button>
            <div className="form-control text-center">{quantity}</div>
            <button
              className="edit-quantity-btn btn btn-primary"
              onClick={incrementCart}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-primary submit-cart-btn"
            type="submit"
            onClick={onFormSubmit}
          >
            Add to Cart
          </button>
          <Link to="/cart">
            <button className="btn btn-primary ms-3 submit-cart-btn">
              Go To Cart
            </button>
          </Link>
        </div>
        <div className="col"></div>
      </div>
      <hr className="mt-3"></hr>

      <div className="text-start container mt-3">
        <div className="row mt-2">
          <div className="col">
            {" "}
            <h3 className="info-labels text-center mt-3 mb-3">DESCRIPTION</h3>
            <h4 className="text-cenetr">{displayProduct.description}</h4>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col text-center">
            {" "}
            <h3 className="info-labels mt-3 mb-3">PRODUCT LABEL</h3>
            <img
              src={displayProduct.productLabelUrl}
              alt={displayProduct.productName}
              width="700"
              height="473"
              className="mx-auto mb-4"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
