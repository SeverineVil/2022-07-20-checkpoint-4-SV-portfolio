import "./styles/Project.css";
import propTypes from "prop-types";

function Project(project) {
  const { image, name, description, url } = project;
  return (
    <div className="project-container">
      <div className="card">
        <img className="img" src={image} alt={`${name} cover`} />
        <div className="texts">
          <h2>{name}</h2>
          <p>{description}</p>
          <button type="submit">More details..{url}</button>
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
