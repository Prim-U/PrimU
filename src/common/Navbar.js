import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="top-bar">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to="/register">
            <button className="btn btn-dark">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-dark">Login</button>
          </Link>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="http://localhost:3000/">
            <img
              src="https://prim-u.store/wp-content/uploads/2023/02/Prim-U-01-1.svg"
              alt=""
              width="100"
              height="84"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Book Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/profile">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  FAQ/Customer Support
                </a>
              </li>
            </ul>
          </div>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
