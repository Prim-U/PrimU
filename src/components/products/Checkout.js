import React, { useEffect, useState } from "react";

import "./Checkout.css";
import { Link } from "react-router-dom";

export default function Checkout({ order, setOrder }) {

  function onProductRemove(item) {
    setOrder(order.filter((x) => x.id !== item.id));
  }

  const list = [];
  order.forEach((item) => list.push(item.subtotal));
  const itemSubtotal = list.reduce((a, b) => a + b, 0);
  const shipping = 100;
  const total = itemSubtotal + shipping;

  return (
    <div>
      <></>
      <div className="container-fluid">
        <div className="row">
          <div className="text-center mt-5">
            <h4 className="fw-bold">
              <Link className="checkout-path" id="product-path" to="/products">
                PRODUCTS
              </Link>{" "}
              <i className="bi bi-arrow-right"></i>{" "}
              <Link
                className="checkout-path"
                id="shopping-cart-path"
                to="/cart"
              >
                SHOPPING CART
              </Link>{" "}
              <i className="bi bi-arrow-right"></i>
              <Link
                to="/place-order"
                className="checkout-path ms-2"
                id="checkout-cart-path"
              >
                {" "}
                CHECKOUT
              </Link>{" "}
            </h4>
          </div>
          <div className="col-7 cart-table ">
            <form>
              <table className="table ms-2">
                <thead>
                  <tr>
                    <th className="text-white ms-5">Remove item</th>
                    <th className="text-white">Product Thumbnail</th>
                    <th className="col-3">PRODUCTS</th>
                    <th className="col-3">PRICE</th>
                    <th className="col-3">QUANTITY</th>
                    <th className="col-3">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <button
                            className="remove-product-btn mt-3"
                            type="button"
                            onClick={() => {
                              onProductRemove(item);
                            }}
                          >
                            <i className="bi bi-x-lg"></i>
                          </button>
                        </td>
                        <td>
                          <img
                            src={item.image}
                            width="80"
                            height="80"
                            alt={item.productName}
                          ></img>
                        </td>
                        <td>
                          <div className="mt-4">{item.productName}</div>
                        </td>
                        <td>
                          <div className="mt-4">R{item.price}</div>
                        </td>
                        <td>
                          <div className="mt-4">x{item.qty}</div>
                        </td>
                        <td>
                          <div className="mt-4">R{item.subtotal}</div>
                        </td>
                      </tr>
                    );
                  })}
                  <tr></tr>
                </tbody>
              </table>
            </form>
          </div>

          <div className="col-5 cart-card">
            {" "}
            <div>
              <div className="card p-4 m-3 checkout-cart">
                <h4 className="fw-bold">CART TOTALS</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>
                        <span>R{itemSubtotal}</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Shipping Fee</th>
                      <td>
                        <span>R{shipping}</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="fw-bold">Total</th>
                      <td>
                        <span className="fw-bold">R{total}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <Link to="/place-order" id="proceed-checkout-path">
                  {" "}
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary proceed-checkout-btn">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
