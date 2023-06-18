import React from "react";

// Functions/methods
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

// Stylesheet
import "./TopBar.css";

export default function TopBar(props) {
  const user = auth.currentUser;
  async function onLogoutClicked() {
    await signOut(auth);
  }
  return (
    <div>
      <div className="top-bar">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          {props.user ? (
            <>
              <div className="align-middle me-auto">
                <p className="align-middle">
                  <i class="bi bi-person-fill"></i> Welcome, {user.displayName}!
                </p>
              </div>
              <button className="btn btn-dark" onClick={onLogoutClicked}>
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="align-middle me-auto">
                <p className="align-middle">
                  <i class="bi bi-person-fill"></i> Welcome!
                </p>
              </div>
              <Link to="/register">
                <button className="btn btn-dark">Register</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-dark">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="middle-bar">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
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

          <button className="bag-button me-3" id="bag-btn">
            <i class="bi bi-bag"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
