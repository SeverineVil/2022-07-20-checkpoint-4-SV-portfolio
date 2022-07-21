import React, { useState, useEffect } from "react";
import axios from "axios";
import Project from "../components/Project";
import "./styles/ProjectsList.css";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="projects-container">
      <div className="projects-container-title">
        What I have done
        {projects.map((e) => (
          <Project key={e.id} project={e} />
        ))}
      </div>
    </div>
  );
}
export default ProjectsList;
