import React from "react";

function WorkExperience({ onOpenWorkExperience }) {
  return (
    <section id="workexperience" className="mb-5">
      <h2 className="section-title">Experience</h2>
      <div className="row">
        {/* Younderbots Experience */}
        <div className="col-md-6 mb-4">
          <div
            className="workexperience-card"
            onClick={() =>
              onOpenWorkExperience({
                role: "Software Developer",
                company: "Younderbots OPC Private Limited",
                duration: "April 2025 - Present",
                description:
                  "Working as a Software Developer",
                certificate: "", 
              })
            }
          >
            <i className="fas fa-briefcase"></i>
            <h4>Software Developer</h4>
            <p>April 2025 - Present</p>
            <br />
            <h5>Younderbots OPC Private Limited</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
