import React, { useState } from "react";
import "./Contact.css";

// Components
import Navbar from "../../common/Navbar";
import UserService from "../../services/user-service";

// Functions/methods
import { auth } from "../../firebase/firebase";
import { updateEmail, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../common/Spinner";
import AccountSideBar from "./AccountSideBar";

export default function Contact() {
  const [changeEmail, setChangeEmail] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  //const [updatePhone, setUpdatePhone] = useState("");

  const user = auth.currentUser;
  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    setButtonDisabled(true);
    setLoading(true);
    try {
      await updateEmail(user, changeEmail);
      await updateProfile(user, { displayName: updateName });
      await UserService.updateUser(auth.currentUser);
      //await updatePhoneNumber(user, updatePhone );
      navigate("/account");
      alert("Contact Details Updated. Returning to Previous Page. . .");
      window.location.reload();
    } catch (error) {
      alert('Login Required. Please Logout and Login Again.');
    }
    setButtonDisabled(false);
    setLoading(false);
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="mt-3 text-center" id="account-management">
        My Account
      </h1>
      <p className="text-center mt-2" id="account-management">
        <Link to="/" className="account-path">
          HOME
        </Link>{" "}
        /{" "}
        <Link to="/account" className="account-path">
          MY ACCOUNT
        </Link>{" "}
        / CONTACT INFORMATION
      </p>

      <div className="row mx-3">
        <div className="col-3 p-3 account-col">
          <AccountSideBar></AccountSideBar>
        </div>
        <div className="col-9">
          <div className="container p-4">
            <p className="text-black-50">
              Edit your preferred name, email address, phone number, and
              address.
            </p>

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
                  type="tel"
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
                <button
                  type="submit"
                  className="btn btn-dark mt-3"
                  id="updateButton"
                  disabled={buttonDisabled}
                >
                  {loading ? <Spinner extraClass="change-size" /> : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
