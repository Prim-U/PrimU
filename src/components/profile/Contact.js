import React, { useState } from "react";

// Components
import NavbarAuth from "../../common/Navbar";

// Functions/methods
import { auth } from "../../firebase/firebase";
import { updateEmail, updatePhoneNumber, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [changeEmail, setChangeEmail] = useState("");
  const [updateName, setUpdateName] = useState("");
  //const [updatePhone, setUpdatePhone] = useState("");

  const user = auth.currentUser;
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await updateEmail(user, changeEmail);
      await updateProfile(user, { displayName: updateName });
      //await updatePhoneNumber(user, updatePhone );
      navigate("/profile");
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  function TestUser() {
    console.log(user);
    console.log(user.password);
  }

  console.log(user);

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
          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="Name"
                required
                value={updateName}
                onChange={(e) => setUpdateName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
                //value={updatePhone}
                //onChange={(e) => setUpdatePhone(e.target.value)}
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
                value={changeEmail}
                onChange={(e) => setChangeEmail(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark mt-3" id="updateButton">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
