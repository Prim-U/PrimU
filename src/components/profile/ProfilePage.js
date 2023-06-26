import React, { useEffect, useState } from "react";
import UserService from "../../services/user-service";
import NavbarAuth from "../../common/Navbar";
import "./ProfilePage.css";

export default function ProfilePage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    try {
      const profiles = await UserService.fetchProfile();
      setProfiles(profiles);
      console.log(profiles);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="bg">
      <NavbarAuth></NavbarAuth>
      <div className="container mt-5 p-3">
        <h1 className="mb-3 text-light">Manage Profiles</h1>
        <div className="d-flex flex-wrap">
          <div
            className="card p-5 me-2 mb-2 align-middle text-center"
            id="add-profile-card"
          >
            <a
              href="http://localhost:3000/account/profile/add-profile"
              alt="add"
              className="text-decoration-none text-black text-center"
            >
              <div className="row">
                <i className="fa fa-plus fa-4x" aria-hidden="true"></i>
              </div>

              <div className="align-middle">
                <h3>Add A Profile</h3>
              </div>
            </a>
          </div>

          <div className="d-flex flex-wrap">
        {profiles.map((profile) => {
          return (
            <div key={profile.id} className="card me-2 mb-2" id="profile-card">
              <img
                src={profile.imageUrl}
                className="card-img-top movie-img"
                alt="movie cover"
              />
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
              </div>

              <div
                className="remove-button btn btn-secondary"
                onClick={() => {
                  
                }}
              >
                <i className="bi bi-trash"></i>
              </div>
            </div>
          );
        })}
      </div>
        </div>
      </div>
    </div>
  );
}
