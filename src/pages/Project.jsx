import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  const { name, skills, image, desc, id } = props.project;

  const linkPath = (id) => {
    if (id == 0) {
      return "https://artists-profile-builder-client.onrender.com";
    } else if (id == 1) {
      return "https://weather-app-836j.onrender.com/";
    } else if (id == 2) {
      return "https://mern-ecommerce-stores.vercel.app/";
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
