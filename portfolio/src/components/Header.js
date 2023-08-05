import React from "react";
import profileImage from "../_DSC1155.JPG";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-title">
          <h1 style={{ fontFamily: "'Itim'" }}>ANSH KAPOOR</h1>
          <nav>
            {/* Add links to different sections */}
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="#achievements">Achievements</a>
          </nav>
        </div>
        <div className="parent-container">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
