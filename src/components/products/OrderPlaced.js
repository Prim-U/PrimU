import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../common/Spinner";
import { PendingOrder } from "../../models/PendingOrder.";
import "./OrderPlaced.css";
import AddressOrder from "./AddressOrder";
import PaymentOrder from "./PaymentOrder";
import UserService from "../../services/user-service";
import { auth } from "../../firebase/firebase";

export default function OrderPlaced({ order, sendOrder, setSendOrder }) {
  const [shippingAddress, setShippingAddress] = useState([]);
  const [billingDetails, setBillingDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const user = auth.currentUser;
  const navigate = useNavigate();

  // useEffect(() => {
  //   initialLoad();
  // });

  // async function initialLoad() {
  //   try {
  //     console.log(order);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  const list = [];
  order.forEach((item) => list.push(item.subtotal));
  const itemSubtotal = list.reduce((a, b) => a + b, 0);
  const shipping = 100;
  const total = itemSubtotal + shipping;

  async function onFormSubmit(e) {
    e.preventDefault();

    setButtonDisabled(true);
    setLoading(true);
    try {
      const pendingOrder = new PendingOrder(
        order,
        total,
        shippingAddress.shipname,
        user.email,
        shippingAddress.country,
        shippingAddress.street,
        shippingAddress.apt,
        shippingAddress.city,
        shippingAddress.state,
        shippingAddress.zipcode,
        shippingAddress.phone,
        billingDetails.card,
        billingDetails.date,
        billingDetails.cvv,
        null
      );
      setSendOrder((orderList) => [...orderList, pendingOrder]);
      await UserService.addOrder(pendingOrder);
      navigate("/");
      alert("Order Placed!");
    } catch (error) {
      alert(error.message);
    }
    setButtonDisabled(false);
    setLoading(false);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center mt-5">
        <h4 className="fw-bold">
          <Link className="checkout-path" id="shopping-cart-path" to="/cart">
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

      <div className="row p-3">
        <div className="col-6 p-4">
          <form onSubmit={onFormSubmit}>
            <AddressOrder
              setShippingAddress={setShippingAddress}
            ></AddressOrder>
            <PaymentOrder setBillingDetails={setBillingDetails}></PaymentOrder>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                id="place-order-btn"
                disabled={buttonDisabled}
              >
                {loading ? <Spinner extraClass="change-size" /> : "PLACE ORDER"}
              </button>
            </div>
          </form>
        </div>

        <div className="col-6">
          <div className="card p-3 place-order-card" id="outer-checkout-card">
            <h3 className="text-center fw-bold">YOUR ORDER</h3>
            <div className="p-3 card place-order-card" id="inner-checkout-card">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          x{item.qty} {item.productName}
                        </td>
                        <td>R{item.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>Shipping Fee</th>
                    <td>
                      <span>
                        <bdi>R100</bdi>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <h3>Total</h3>
                    </th>
                    <td>
                      <span>
                        <h3>
                          <bdi>R{total}</bdi>
                        </h3>
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
