import React from "react";

export default function Projects({ onOpenCertificate }) {
  return (
    <section id="projects" className="mb-5">
      <h2 className="section-title">Projects</h2>
      <h6 className="section-title">Real time Projects Cannot be shared</h6>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div
            className="project-card"
            onClick={() =>
              onOpenCertificate(
                "/images/My blog - Google Chrome 26-03-2025 15_07_11.png",
                "Developed with the help of AI",
                "https://github.com/Rikeshwaran/login-page.git"
              )
            }
          >
            <h4>Login page using MERN stack - sample</h4>
            <p>Developed a secure login page using MERN stack, ensuring user authentication and data security.</p>
            <div className="tech-used">
              <span className="badge bg-primary">MongoDB</span>
              <span className="badge bg-info">Express</span>
              <span className="badge bg-warning">React</span>
              <span className="badge bg-success">Node.js</span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div
            className="project-card"
            onClick={() =>
              onOpenCertificate(
                "/images/HMS - Google Chrome 27-03-2025 16_23_15.png",
                "Developed with the help of AI",
                "https://github.com/Rikeshwaran/simple-Hospital-Management-system.git"
              )
            }
          >
            <h4>Simple Hospital Management System - sample</h4>
            <p>Developed a Simple Hospital Management System containing details of Appointment, Patient and Doctor.</p>
            <div className="tech-used">
              <span className="badge bg-primary">HTML/CSS</span>
              <span className="badge bg-secondary">JavaScript</span>
              <span className="badge bg-info">PHP</span>
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
