import React from "react";
import NavbarAuth from "../../common/NavbarAuth";

export default function Contact() {
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
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="n"
                className="form-control"
                placeholder="Phone Number"
                required
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
              <button type="submit" className="btn btn-dark mt-3">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
