import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

export default function TopBar(props) {
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
                <p className="align-middle"><i class="bi bi-person-fill"></i> {props.user.email}</p>
              </div>
              <button className="btn btn-dark" onClick={onLogoutClicked}>
                Logout
              </button>
            </>
          ) : (
            <>
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
    </div>
  );
}
