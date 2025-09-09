import React from "react";

export default function Education() {
  return (
    <section id="education" className="mb-5">
      <h2 className="section-title">Education</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="education-card">
            <h4>B.E. Computer Science and Engineering</h4>
            <p>Vellalar College of Engineering and Technology, Erode (2021 - 2025)</p>
            <p className="highlight">CGPA: 7.71 (Till 7th Semester)</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="education-card">
            <h4>Higher Secondary</h4>
            <p>Kongu Vellalar Matric HSS, Chennimalai (2020 - 2021)</p>
            <p className="highlight">Percentage: 84.4%</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="education-card">
            <h4>SSLC</h4>
            <p>Kongu Vellalar Matric HSS, Chennimalai (2018 - 2019)</p>
            <p className="highlight">Percentage: 86.7%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
