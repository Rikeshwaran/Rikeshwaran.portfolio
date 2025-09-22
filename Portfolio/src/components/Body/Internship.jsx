import React from "react";
import codehuntersFSD from "../../assets/Internship/codehunters-internship.png";
import novitecAI from "../../assets/Internship/novitechai inter_page-0001.jpg";
import novitechFSD from "../../assets/Internship/novitech-internship_page-0001.jpg";
import velgaFSD from "../../assets/Internship/velga-internship.png";

export default function Internship({ onOpenCertificate }) {
  return (
    <section id="internship" className="mb-5">
      <h2 className="section-title">Internships</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div
            className="internship-card"
            onClick={() => onOpenCertificate(codehuntersFSD, "Practiced Full Stack Development only at basic level")}
          >
            <i className="fas fa-briefcase"></i>
            <h4>CODE HUNTERS</h4>
            <p>Internship for WEB DEVELOPMENT in CODE HUNTERS using HTML,CSS,JS.</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div
            className="internship-card"
            onClick={() => onOpenCertificate(novitechFSD, "Practiced Full Stack Development only at basic level")}
          >
            <i className="fas fa-briefcase"></i>
            <h4>Novitech R&amp;D private limited</h4>
            <p>Internship for FULL STACK DEVELOPMENT in NoviTech R&amp;D Pvt Ltd using MERN stack</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div
            className="internship-card"
            onClick={() => onOpenCertificate(novitecAI, "Practiced Artificial Intelligence basics , prompting etc")}
          >
            <i className="fas fa-briefcase"></i>
            <h4>Novitech R&amp;D private limited</h4>
            <p>Internship for Artificial Intelligence in NoviTech R&amp;D Pvt Ltd using MERN stack</p>
          </div>
        </div>


        <div className="col-md-6 mb-4">
          <div
            className="internship-card"
            onClick={() => onOpenCertificate(velgaFSD)}
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
