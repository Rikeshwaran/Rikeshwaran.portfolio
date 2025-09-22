import React from "react";

export default function Projects({ onOpenCertificate }) {
  return (
    <section id="projects" className="mb-5">
      <h2 className="section-title">Projects</h2>
      <h6 className="section-title">Real time Projects Cannot be shared here, To get sample Projects : <a  className="btn m-1" href="#contact">click here </a></h6>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div
            className="project-card"
            onClick={() =>
              onOpenCertificate(
                "",
                "Developed with the help of AI",
                "https://github.com/Rikeshwaran/user-data-mangement-with-profile.git"
              )
            }
          >
            <h4>User Data Management - sample</h4>
            <p>Developed a User Data Management System containing details of Users.</p>
            <div className="tech-used">
              <span className="badge bg-primary">MongoDB</span>
              <span className="badge bg-info">python(FastAPI)</span>
              <span className="badge bg-warning">HTML / CSS</span>
              <span className="badge bg-success">js</span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div
            className="project-card"
            onClick={() =>
              onOpenCertificate(
                "",
                "Developed with the help of AI",
                "https://github.com/Rikeshwaran/adminDashboard.git"
              )
            }
          >
            <h4>Project Management System - sample</h4>
            <p>Developed a Project Management System containing details of Projects.</p>
            <div className="tech-used">
              <span className="badge bg-primary">MongoDB</span>
              <span className="badge bg-info">python(FastAPI)</span>
              <span className="badge bg-warning">HTML / CSS</span>
              <span className="badge bg-success">js</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div
            className="project-card"
            onClick={() =>
              onOpenCertificate(
                "",
                "4 Templates included",
                "https://github.com/Rikeshwaran/resume-builder-.git"
              )
            }
          >
            <h4>Resume Builder</h4>
            <p>Developed a Resume Builder which can be used to create resumes.</p>
            <div className="tech-used">
              <span className="badge bg-info">python(FastAPI)</span>
              <span className="badge bg-warning">HTML / CSS</span>
              <span className="badge bg-success">js</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div
            className="project-card"
            onClick={() =>
              onOpenCertificate(
                "",
                "Automated Field Water Drain System"
              )
            }
          >
            <h4>Automated Field Water Drain System</h4>
            <p>Designed for agriculture fields to automatically drain excess water during heavy rains to prevent waterlogging.</p>
            <div className="tech-used">
              <span className="badge bg-dark">IoT</span>
              <span className="badge bg-secondary">Arduino</span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div
            className="project-card"
            onClick={() =>
              onOpenCertificate(
                "",
                "Fake Review Detection"
              )
            }
          >
            <h4>Fake Review Detection</h4>
            <p>A project to detect fake reviews on Social Media using NLP and machine learning algorithms.</p>
            <div className="tech-used">
              <span className="badge bg-primary">Python</span>
              <span className="badge bg-secondary">NLP</span>
              <span className="badge bg-success">Machine Learning</span>
              <span className="badge bg-danger">Java</span>
              <span className="badge bg-warning">SQL</span>
              <span className="badge bg-info">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
