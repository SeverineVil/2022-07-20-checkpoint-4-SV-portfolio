import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";
import axios from "axios";
import swal from "sweetalert";
import ButtonReturn from "../components/ButtonReturn";

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
        confirmButtonText: "Cool",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/login`,
          { email, password },
          { withCredentials: true }
        )
        .then(() => navigate("/login/myadmin", { replace: true }))
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="login">
      <div className="buttonreturnlogin" />
      <ButtonReturn />
      <div className="formlogin">
        <form className="form-login">
          <input
            className="inputEmail"
            type="text"
            name="email"
            id="email"
            placeholder="It's me"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputLogPassword"
            type="password"
            name="password"
            id="password"
            placeholder="password please"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="logButton">
            <button
              style={{
                cursor: "pointer",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Go !
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
