import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
// import ReorderIcon from "@material-ui/icons/Reorder";
import { House, DotsThreeOutline, X, DotsNine } from "phosphor-react";
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const setNavs = () => {
    return {
      home: true,
      experience: false,
      contacts: false,
      projects: false,
    };
  };

  const [navsActive, setNavsActive] = useState(setNavs());

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleHome = () => {
    setNavsActive((prev) => ({
      home: true,
      experience: false,
      projects: false,
      contacts: false,
    }));
  };
  const handleContacts = () => {
    setNavsActive((prev) => ({
      home: false,
      experience: false,
      projects: false,
      contacts: true,
    }));
  };
  const handleProjects = () => {
    setNavsActive((prev) => ({
      home: false,
      experience: false,
      projects: true,
      contacts: false,
    }));
  };
  const handleExperience = () => {
    setNavsActive((prev) => ({
      home: false,
      experience: true,
      projects: false,
      contacts: false,
    }));
  };

  return (
    <div className="navbar" id={expandNavbar ? "close" : "open"}>
      <div className="topIntro">
        <h3>RastaDevelopers</h3>
      </div>
      {/* <div className="toggleButton">

        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {expandNavbar ? <X /> : <DotsNine />}
        </button>
      </div> */}

      <div className="links">
        <Link
          className={`test ${navsActive.home ? "active" : null}`}
          to="/"
          onClick={() => {
            handleHome();
          }}
        >
          Home
        </Link>

        <Link
          className={`test ${navsActive.projects ? "active" : null}`}
          to="/projects"
          onClick={() => {
            handleProjects();
          }}
        >
          Projects
        </Link>

        <Link
          className={`test ${navsActive.experience ? "active" : null}`}
          to="/experience"
          onClick={() => {
            handleExperience();
          }}
        >
          Experience
        </Link>

        <Link
          className={`test ${navsActive.contacts ? "active" : null}`}
          to="/contacts"
          onClick={() => {
            handleContacts();
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
