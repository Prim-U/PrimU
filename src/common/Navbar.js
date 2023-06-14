import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/">
            <img
              src="https://prim-u.store/wp-content/uploads/2023/02/Prim-U-01-1.svg"
              alt=""
              width="100"
              height="50"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link active">Products</Link>
              <Link className="nav-link active">Book Services</Link>
              <Link className="nav-link active" to="/profile">
                Profile
              </Link>
              <Link className="nav-link active">FAQ/Customer Support</Link>
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
