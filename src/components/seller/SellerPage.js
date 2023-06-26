import React from "react";
import { Link } from "react-router-dom";
import "./SellerPage.css";
import BeautyImage from "./BeautyImage.jpg"

export default function SellerPage() {
  const Card = ({ title, description, imageUrl, learnMoreUrl }) => {
    return (
      <div className="card">
        <div className="card-image-container">
          <img src={imageUrl} alt="Card" className="card-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <button className="card-learn-more btn btn-purple">
            <Link to={learnMoreUrl} className="btn-link">
              Learn More
            </Link>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-light" id="nav-padding">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/">
              <img
                src="https://prim-u.store/wp-content/uploads/2023/02/Prim-U-01-1.svg"
                alt=""
                width="50"
                height="50"
              />
            </a>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Prim Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/account">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="card-container">
        <Card
          title="PRIM
          NATURALS"
          description="Your one-stop shop for beauty bookings in South Africa.
          Connect with top-rated freelancers, salons and suppliers from all over the country, all from the convenience of your home town."
          imageUrl={BeautyImage}
          learnMoreUrl="/seller"
        />
      </div>
      <h2 className="Seller-Header">Start Your Prim-U Journey</h2>
      <h2 className="Shopping">Shop By:</h2>
    </div>
  
  );
}
