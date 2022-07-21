import "./styles/ButtonReturn.css";
import { useNavigate } from "react-router-dom";
import annuler from "../assets/annuler.png";

export default function ButtonReturn() {
  const navigate = useNavigate();

  return (
    <div className="returnbutton">
      <button
        className="buttonreturn"
        type="button"
        onClick={() => navigate(-1)}
      >
        <img className="arrow-return" src={annuler} alt="arrow-return-white" />
      </button>
    </div>
  );
}
