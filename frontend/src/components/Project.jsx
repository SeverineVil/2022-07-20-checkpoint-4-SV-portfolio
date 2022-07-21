import "./styles/Project.css";
import propTypes from "prop-types";

// handleClick = (e) => {
//   e.preventDefault();
//   console.log("The link was clicked !");
// };

function Project({ project }) {
  return (
    <div className="project-container">
      <div className="card">
        <img className="card-img" src={project.image} alt="pic" />
        <div className="texts">
          <h2>{project.name}</h2>
          <p>{project.description}</p>

          <a href={project.url} target="_bank">
            <button className="card-button" type="button">
              View the website !
            </button>
          </a>
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
