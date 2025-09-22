import React from "react";
import htmlTraining from "../../assets/Certifications/html-training.pdf"; 
import novitechfullstack from "../../assets/Certifications/novitech-fsd-course.pdf";
import kamarajPaperPresentation from "../../assets/Certifications/paperpresentation-kamaraju.pdf";

export default function Achievements({ onOpenCertificate }) {
  return (
    <section id="achievements" className="mb-5">
      <h2 className="section-title">Achievements &amp; Certifications</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate("", "Infosys Springboard","https://drive.google.com/drive/folders/1dZN3_2PYQED_0QP5ZlB_1Ng_yOW9TGnW?usp=drive_link")}>
            <i className="fas fa-certificate"></i>
            <h5>Infosys Springboard</h5>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate(htmlTraining, "HTML Training" )}>
            <i className="fas fa-certificate"></i>
            <h5>HTML Training</h5>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate(novitechfullstack,"FULL STACK DEVELOPMENT")}>
            <i className="fas fa-certificate"></i>
            <h5>Full Stack Course - Novitech</h5>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate(kamarajPaperPresentation, "Paper Presentation - KAMARAJ UNIVERSITY")}>
            <i className="fas fa-certificate"></i>
            <h5>Paper Presentation - KAMARAJ UNIVERSITY </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
