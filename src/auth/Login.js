import React from 'react'
import NavbarAuth from '../common/NavbarAuth'
import { Link } from 'react-router-dom'

export default function Login() {
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
          <h1 className='mb-3'>Login to your account</h1>

          <form>

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
                required
              />
            </div>


            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark mt-3">
                Continue
              </button>
            </div>
          </form>

          <p className="mt-3 text-center">
            Don't have an account? Create one <Link to="/register">here!</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
