import { Route, Routes } from "react-router-dom";
import Neon from "../components/Neon";

function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Neon />} />
      </Routes>
    </div>
  );
}

export default Body;
