import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import ProjectsList from "./ProjectsList";
import Contact from "./Contact";

import AboutMe from "./AboutMe";

function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/login/myadmin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default Body;
