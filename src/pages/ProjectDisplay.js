import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
// import GitHubIcon from "@material-ui/icons/GitHub";
import { Link, ShoppingCart } from "phosphor-react";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();

  const refToFunc = (id) => {
    if (id == 0) {
      return "https://ecommerce-stores-umber.vercel.app/";
    } else if (id == 1){
      return "https://level-up-weld.vercel.app";
    }
  };

  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={refToFunc(id)} rel="noreferrer" target="_blank">
        <span>
          Live Demo <Link size={20} />
        </span>
      </a>
    </div>
  );
}

export default ProjectDisplay;
