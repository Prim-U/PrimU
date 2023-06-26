import React, { useState } from "react";
import NavbarAuth from "../../common/Navbar";
import Spinner from "../../common/Spinner";
import { Profile } from "../../models/Profile";
import UserService from "../../services/user-service";
import { useNavigate } from "react-router-dom";
import FileService from '../../services/file-service';

export default function AddProfile() {
  const [profileName, setProfileName] = useState("");
  const [file, setFile] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    setButtonDisabled(true);
    setLoading(true);
    try {
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log("Upload progress: ", progress);
      });

      const profile = new Profile(profileName, downloadUrl, null);
      await UserService.addProfile(profile);
      alert("Clicked!");
      navigate("/account/profile");
    } catch (error) {
      alert(error.message);
    }
    setButtonDisabled(false);
    setLoading(false);
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
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
          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                required
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Profile Picture</label>

              <input
                onChange={onFileSelected}
                type="file"
                className="form-control"
                multiple
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark mt-3"
                id="updateButton"
                disabled={buttonDisabled}
              >
                {loading ? <Spinner extraClass="change-size" /> : "Add Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
