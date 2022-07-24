import React from "react";
import jukebox from "../assets/jukebox.jpg";
import "./styles/Admin.css";

function Admin() {
  return (
    <div className="admin-page">
      <div className="admin-top">
        <div className="backoffice-top">
          <h1>Welcome back Séverine !</h1>
          <h2>Back-office</h2>
        </div>
        <img className="logo-admin-page" src={jukebox} alt="logo" />
      </div>
      <div className="container-admin">
        <div className="container-cat-admin">
          <div className="admin-card">
            <div className="admin-category">
              <h3>Add project </h3>
            </div>
            <div className="admin-category">
              <h3>Manage</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
