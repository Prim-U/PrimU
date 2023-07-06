import React from "react";

// Functions/methods
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

// Stylesheet
import "./TopBar.css";

export default function TopBar(props) {
  const navigate = useNavigate();
  const user = auth.currentUser;
  async function onLogoutClicked() {
    await signOut(auth);
    window.location.reload();
    navigate("/");
  }
  return (
    <div>
      <div className="top-bar">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          {props.user ? (
            <>
              <div className="align-middle me-auto">
                <p className="align-middle">
                  <i className="bi bi-person-fill"></i> Welcome{" "}
                  {user.displayName}!
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
                  <i className="bi bi-person-fill"></i> Welcome!
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
          <div className="me-auto mt-2">+27-0600703045</div>
          <div className="mt-2">
            Got questions? Email us at{" "}
            <a
              className="text-decoration-none text-black-50 email-link"
              href="mailto:info@prim-u.com"
            >
              info@prim-u.com
            </a>
          </div>
          <Link to="/cart">
            <button className="bag-button me-3" id="bag-btn">
              <i className="bi bi-bag fs-4"></i>
              <span className="bag-counter">{props.order.length}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
