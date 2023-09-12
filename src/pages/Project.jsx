import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  const { name, skills, image, desc, id } = props.project;

  console.log(id);

  const linkPath = (id) => {
    if (id == 0) {
      return "https://artists-profile-builder-client.onrender.com";
    }
  };

  return (
    <div className="project">
      <button className="view-btn">
        <Link to={linkPath(id)} target="_blank">
          View Project
        </Link>
      </button>

      <img src={image} alt={name} />
      <h4>
        <span>Name: </span>
        {name}
      </h4>
      <p>
        <span>Skills :</span> {skills}
      </p>
      <p>
        <span>Description :</span> {desc}
      </p>
    </div>
  );
};

export default Project;
