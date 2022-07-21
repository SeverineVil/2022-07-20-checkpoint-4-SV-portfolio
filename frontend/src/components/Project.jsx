import "./styles/Project.css";
import propTypes from "prop-types";

function Project({ project }) {
  return (
    <div className="project-container">
      <div className="card">
        <img className="card-img" src={project.image} alt="pic" />
        <div className="texts">
          <h2>{project.name}</h2>
          <p>{project.description}</p>

          <button className="card-button" type="submit">
            More details..{project.url}
          </button>
        </div>
      </div>
    </div>
  );
}
Project.propTypes = {
  project: propTypes.shape({
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
  }).isRequired,
};
export default Project;
