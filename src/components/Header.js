import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faLeetcode } from "@fortawesome/free-solid-svg-icons";
import resumeFile from "../Ansh Kapoor's Resume.pdf";
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-title">
          <h1 style={{ fontFamily: "'Itim'" }}>ANSH KAPOOR</h1>
          <div className="parent-container">
            <div className="profile-image">
              <img src="https://i.ibb.co/cy3fLXw/DSC1155.jpg" alt="Profile" />
            </div>
          </div>
          <nav>
            {/* Add links to different sections */}
            <a href="#about">About</a>
            <a href={resumeFile} download="Ansh_Kapoor_Resume.pdf">
              Resume
            </a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="#achievements">Achievements</a>
            <a href="#certificates">Certificates</a>
            {/* GitHub profile */}
            <a
              href="https://github.com/akapoor30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {/* linkdin profile */}
            <a
              href="https://www.linkedin.com/in/ansh-kapoor-6200b9214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
