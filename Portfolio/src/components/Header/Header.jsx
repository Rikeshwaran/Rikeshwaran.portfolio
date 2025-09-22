import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/Resume/RIKESHWARAN_M_RESUME.pdf";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h1>RIKESHWARAN M</h1>
            <p>Computer Science and Engineering</p>
            <div className="header-buttons">
              <Link className="btn btn-outline-light btn-lg me-3" to="/contact">Hire Me</Link>
              <a className="btn btn-outline-light btn-lg" href={resume} download="RIKESHWARAN M RESUME">Resume</a>

            </div>
          </div>
          <img src="/images/your-photo.jpg" alt="Profile Photo" className="profile-pic" />
        </div>
      </div>
    </header>
  );
}
