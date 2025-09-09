import React from "react";

export default function Achievements({ onOpenCertificate }) {
  return (
    <section id="achievements" className="mb-5">
      <h2 className="section-title">Achievements &amp; Certifications</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate("/cert1.jpg", "AI & NLP - Infosys Springboard")}>
            <i className="fas fa-certificate"></i>
            <h5>AI &amp; NLP - Infosys Springboard</h5>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate("/ai_workshop.jpg", "AI Workshop - Top Engineers")}>
            <i className="fas fa-certificate"></i>
            <h5>AI Workshop - Top Engineers</h5>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate("/paper_presentation.jpg", "Paper Presentation - KCET")}>
            <i className="fas fa-certificate"></i>
            <h5>Paper Presentation - KCET</h5>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate("/hackathon.jpg", "Hackathon Finalist - VCET")}>
            <i className="fas fa-certificate"></i>
            <h5>Hackathon Finalist - VCET</h5>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate("/cybersecurity.jpg", "Cyber Security Workshop - The Tech Unique")}>
            <i className="fas fa-certificate"></i>
            <h5>Cyber Security Workshop</h5>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="cert-card" onClick={() => onOpenCertificate("/java_html_arduino.jpg", "Java, HTML & Arduino Training - IIT Bombay")}>
            <i className="fas fa-certificate"></i>
            <h5>Java, HTML &amp; Arduino Training</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
