import React from "react";

// Functions/methods
import { Link } from "react-router-dom";

// Stylesheet
import './Navbar.css';

export default function NavbarAuth() {
  return (
    <div className="p-3 bg-light">
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
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active">Book Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/account">
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active">FAQ/Customer Support</Link>
              </li>
            </ul>
          </div>

          <form className="d-flex ms-2">
            <button className="search-button me-1" type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
}
