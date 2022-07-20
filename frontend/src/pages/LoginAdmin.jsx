import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/LoginAdmin.css";
import axios from "axios";
import swal from "sweetalert";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      swal({
        title: "Error!",
        text: "Merci de renseigner votre pseudo ET votre email",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/login`,
          { email, password },
          { withCredentials: true }
        )
        .then(() => navigate("/adminaccount", { replace: true }))
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="loginadmin">
      <div className="admin-login-top">
        <h1>Bienvenue Aline et Lila</h1>
        <img
          className="logo-admin-rond-login"
          // src={logoCircle}
          alt="logo Dear rond"
        />
      </div>
      <div className="formloginadmin">
        <form className="form-login-admin">
          <input
            className="inputPseudoAdmin"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Lila ou Aline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputLogPasswordAdmin"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="logButton">
            <button
              style={{
                marginBottom: "5vh",
                cursor: "pointer",
              }}
              className="regbutton"
              type="submit"
              onClick={handleSubmit}
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
