import React from "react";

export default function Internship({ onOpenCertificate }) {
  return (
    <section id="internship" className="mb-5">
      <h2 className="section-title">Internships</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div
            className="internship-card"
            onClick={() => onOpenCertificate("/images/Document from ~ འìҟҽʂհ.png", "Practiced Full Stack Development only at basic level")}
          >
            <i className="fas fa-briefcase"></i>
            <h4>CODE HUNTERS</h4>
            <p>Internship for WEB DEVELOPMENT in CODE HUNTERS using HTML,CSS,JS.</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div
            className="internship-card"
            onClick={() => onOpenCertificate("/images/Document from ~ འìҟҽʂհ.png", "Practiced Full Stack Development only at basic level")}
          >
            <i className="fas fa-briefcase"></i>
            <h4>Novitech R&amp;D private limited</h4>
            <p>Internship for FULL STACK DEVELOPMENT in NoviTech R&amp;D Pvt Ltd using MERN stack</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div
            className="internship-card"
            onClick={() => onOpenCertificate("/images/Screenshot 2025-04-18 150144.png")}
          >
            <i className="fas fa-briefcase"></i>
            <h4>VELGA CREATIVE POWERHOUSE</h4>
            <p>Internship for FULL STACK DEVELOPMENT in VELGA : Creative PowerHouse, Erode. using React &amp; FastAPI with MongoDB and SQL.</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="internship-card" onClick={() => onOpenCertificate("")}>
            <p>Internship for FULL STACK DEVELOPMENT with React, Vite, Bootstrap, FastAPI, GraphQL, SQL, MongoDB.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
