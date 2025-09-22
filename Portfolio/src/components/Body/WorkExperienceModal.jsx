import React, { useEffect, useRef } from "react";

function WorkExperienceModal({ show, experience, onClose }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === wrapperRef.current) onClose();
    };
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [show, onClose]);

  if (!experience) return null;

  return (
    <div
      id="workExperienceModal"
      className="modal"
      style={{ display: show ? "block" : "none" , backgroundColor: "#00000061"}}
      ref={wrapperRef}

    >
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <div className="modal-content-wrapper">
        <h3>{experience.role}</h3>
        <p className="highlight mb-5 mt-5 large">
          <strong>Company:</strong> {experience.company}
        </p>
        <p>
          <strong>Duration:</strong> {experience.duration}
        </p>
        <p>
          <strong>Description:</strong> {experience.description}
        </p>

        {/* Optional certificate image */}
        {experience.certificate && (
          <img
            className="modal-content"
            src={experience.certificate}
            alt="Certificate"
          />
        )}
      </div>
    </div>
  );
}

export default WorkExperienceModal;
