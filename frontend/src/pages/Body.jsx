import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Body;
