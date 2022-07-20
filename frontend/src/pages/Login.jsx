import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";
import axios from "axios";
import swal from "sweetalert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      swal({
        title: "Error!",
        text: "Merci de renseigner votre mail ET votre mot de passe",
        icon: "error",
        button: "OK",
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
    <div className="login">
      <div className="buttonreturnlogin" />
      <div className="formlogin">
        <form className="form-login">
          <input
            className="inputEmail"
            type="text"
            name="email"
            id="email"
            placeholder="me"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputLogPassword"
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

export default Login;
