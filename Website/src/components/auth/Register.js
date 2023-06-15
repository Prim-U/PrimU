import React, {useState} from "react";
import NavbarAuth from "../../common/NavbarAuth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCred);
      navigate('/');
      document.getElementById('registerButton').disabled = true;
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="bg-dark">
      <NavbarAuth></NavbarAuth>
      <div className="container my-5">
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
                required
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark mt-3" id="registerButton">
                Continue
              </button>
            </div>
          </form>

          <p className="mt-3 text-center">
            Already have an account with us? Register <a href="http://localhost:3000/login">here!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
