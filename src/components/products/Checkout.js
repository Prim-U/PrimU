import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import "./Checkout.css";
import { Link } from "react-router-dom";

export default function Checkout({ order, setOrder }) {
  useEffect(() => {
    initialLoad();
  });

  /*  function quantityList() {
    for ()
  }
 */
  async function initialLoad() {
    try {
      // console.log(order);
    } catch (error) {
      alert(error.message);
    }
  }

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
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="text-center mt-5">
            <h4 className="fw-bold">
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
              <i className="bi bi-arrow-right"></i>
              <Link className="checkout-path ms-2" id="order-complete-path">
                {" "}
                ORDER COMPLETE
              </Link>
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
                        <td></td>
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
                          <div className="input-group quantity-holder mt-3 me-4">
                            <button
                              type="button"
                              className="edit-quantity-btn btn btn-primary"
                            >
                              -
                            </button>
                            <div className="form-control text-center">
                              {item.qty}
                            </div>
                            <button
                              type="button"
                              className="edit-quantity-btn btn btn-primary"
                            >
                              +
                            </button>
                          </div>
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
