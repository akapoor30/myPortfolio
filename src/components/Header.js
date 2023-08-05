import React from "react";

import profileImage from "../_DSC1155.JPG";

import resumeFile from "../Ansh Kapoor's Resume.pdf";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-title">
          <h1 style={{ fontFamily: "'Itim'" }}>ANSH KAPOOR</h1>
          {/* <div className="parent-container">
            <div className="profile-image">
              <img src={profileImage} alt="Profile" />
            </div>
          </div> */}
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
            <a
              href="your-linkedin-profile-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* Add GitHub profile */}
            <a
              href="your-github-profile-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            {/* Add LeetCode profile */}
            <a
              href="your-leetcode-profile-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-leetcode"></i>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
