import React, { useEffect } from "react";
import Navbar from "../../common/Navbar";
import "./Checkout.css";
import { Link } from "react-router-dom";

export default function Checkout({ order }) {
  useEffect(() => {
    initialLoad();
  }, []);

  async function initialLoad() {
    try {
      console.log(order);
    } catch (error) {
      alert(error.message);
    }
  }

  const list = [];
  order.forEach((item) => list.push(item.subtotal));
  const itemSubtotal = list.reduce((a, b) => a + b, 0);
  const shipping = 100;
  const total = itemSubtotal + shipping;

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h4>
          <Link className="checkout-path" to="/cart">
            SHOPPING CART
          </Link>
          <Link className="checkout-path"> CHECKOUT</Link>
          <Link className="checkout-path"> ORDER COMPLETE</Link>
        </h4>
      </div>
      <div className="row">
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
                      <td>{item.productName}</td>
                      <td>R{item.price}</td>
                      <td>x{item.qty}</td>
                      <td>R{item.subtotal}</td>
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
            <div className="card p-5 m-3 checkout-cart">
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
                    <th>Shipping</th>
                    <td>
                      <span>R{shipping}</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="fw-bold">Total</th>
                    <td>
                      <span>R{total}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="d-grid gap-2">
                <Link to="/place-order">
                  {" "}
                  <button className="btn btn-primary proceed-checkout-btn">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
