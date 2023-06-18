import React, { useState } from "react";

// Functions/methods
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

// Components
import NavbarAuth from "../../common/Navbar";

// Models
import { User } from "../../models/Users";

// Services
import UserService from "../../services/user-service";
import Spinner from "../../common/Spinner";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true)
    if (password === confirmPassowrd) {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const newUser = new User(name, email, userCred.user.uid);
        await UserService.addUser(newUser);
        updateProfile(userCred.user, {
          displayName: name,
        });
        navigate("/");
        alert("Register Successful!");
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("Passwords do not match.");
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
        <div className="card p-5 mx-5">
          <h1 className="mb-3">Create an account</h1>

          <form onSubmit={onFormSubmit} autoComplete="false">
            
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassowrd}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark mt-3"
                id="registerButton"
              >
                {loading ? <Spinner extraClass="change-size" /> : 'Register'}
              </button>
            </div>
          </form>

          <p className="mt-3 text-center">
            Already have an account with us? Login{" "}
            <a href="http://localhost:3000/login">here!</a>
          </p>

          <p className='text-center'>
            <Link to="/login/reset-password">Forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
