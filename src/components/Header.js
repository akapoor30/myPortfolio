import React from "react";
import profileImage from "../_DSC1155.JPG";

import resumeFile from "../Ansh Kapoor's Resume.pdf";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-title">
          <h1 style={{ fontFamily: "'Itim'" }}>ANSH KAPOOR</h1>
          <div className="parent-container">
            {/* <div className="profile-image">
              <img src={profileImage} alt="Profile" />
            </div> */}
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
