import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProjectsList from "./ProjectsList";
import Header from "../components/Header";
import AboutMe from "./AboutMe";

function Body() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Body;
