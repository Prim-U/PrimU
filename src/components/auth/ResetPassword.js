import React, { useState } from "react";
import NavbarAuth from "../../common/Navbar";
import Spinner from "../../common/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../../firebase/firebase";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      navigate('/');
      alert('Reset Password email has been sent.')
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }
  return (
    <div className="bg-dark">
      <NavbarAuth></NavbarAuth>
      <div className="container mt-5 p-3">
        <img
          className="mx-auto d-block mb-5"
          src="https://prim-u.store/wp-content/uploads/2023/02/Prim-U-01-1.svg"
          width="100"
          height="80"
          alt=""
        />
        <div className="card p-5 mx-5 mb-5">
          <h1 className="mb-3">Password Reset</h1>

          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark mt-3">
                {loading ? (
                  <Spinner extraClass="change-size" />
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
          </form>

          <p className="mt-3 text-center">
            Don't have an account? Create one <Link to="/register">here!</Link>
          </p>

          <p className="text-center">
            Already have an account? Login{" "}
            <Link to="/login">here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
