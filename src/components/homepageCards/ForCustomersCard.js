import React from "react";
import "./ForCustomersCard.css";

export default function ForCustomersCard() {
  return (
    <div>
      <div class="card bg-dark text-white mb-5">
        <img
          className="card-img"
          src="https://www.prim-u.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fudvzxn7no754%2F3nnqnDzSJL5AaOMdxaEete%2Fd579139c048f00881430b98b95ac0798%2FFor-customers.png&w=3840&q=100"
          alt="For Customers Service"
        />
        <div className="card-img-overlay">
          <h5 className="card-title">For Customers</h5>
          <p className="card-text">Enjoy beauty treatments wherever U are</p>
          <br></br>

          <div className="p-button">
            <p className="card-text">
              Struggling to find the time to pamper yourself? With just one
              click, Prim-U will connect U to the right primlancer, at the right
              time, right in the comfort of your home. On holiday? Book an
              expert primlancer closest to U. Simply click, pick a treatment and
              we'll come to U.
            </p>
            <button className="btn btn-outline-primary">Make a Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
}
