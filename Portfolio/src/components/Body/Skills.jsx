import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="mb-5">
      <h2 className="section-title">Technical Skills</h2>
      <div className="row">
        <div className="col-md-6">
          {/* Left column */}
          <div className="skill mb-4">
            <div className="skill-header">
              <i className="fab fa-html5"></i>
              <span>HTML</span>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>

          <div className="skill mb-4">
            <div className="skill-header">
              <i className="fab fa-css3-alt"></i>
              <span>CSS</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>

          <div className="skill mb-4">
            <div className="skill-header">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>

          <div className="skill mb-4">
            <div className="skill-header">
              <i className="fab fa-react"></i>
              <span>React+Vite</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Right column */}
          <div className="skill mb-4">
            <div className="skill-header">
              <i className="fab fa-python"></i>
              <span>Python(FastAPI &amp; GraphQL)</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>

          <div className="skill mb-4">
            <div className="skill-header">
              <i className="fab fa-bootstrap"></i>
              <span>Bootstrap</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>

          <div className="skill mb-4">
            <div className="skill-header">
              <i className="fas fa-database"></i>
              <span>Database (MongoDB / SQL)</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>
          <div className="skill mb-4">
            <div className="skill-header">
              <i className="fas fa-database"></i>
              <span>C Language</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
