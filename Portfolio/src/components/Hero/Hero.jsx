import React from "react";
import { motion, setTarget } from "framer-motion";
import "./Hero.css";
import resumePdf from "../../assets/Resume/resume.pdf";

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const floatingElements = [
    { icon: "bi-code-slash", color: "#6366f1",target : "about", delay: 0 },
    { icon: "bi-cpu", color: "#8b5cf6", delay: 0.4,target : "skills" },
    { icon: "bi-database", color: "#06b6d4", delay: 0.8 ,target : "experience"},
    { icon: "bi-rocket-takeoff", color: "#f43f5e", delay: 1.6 ,target : "contact"},
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="container-fluid min-vh-100 d-flex align-items-center px-3">
        <div className="row w-100 align-items-center gy-5">
          <div className="col-lg-6 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="text-primary mb-3 fw-semibold animate-pulse-slow d-flex ms-5">
                <div className="status-indicator ms-3 me-3 mt-2"></div>
                <h5>Open to work </h5>
                
              </h6>


              <h1 className="display-2 fw-bold mb-4">
                Hi, I'm <span className="gradient-text">Rikeshwaran</span>
              </h1>

              <p className="lead mb-5">
                Junior Software Engineer with hands-on experience in full-stack development, focused on building scalable
                and maintainable applications.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-5">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn btn-primary btn-lg rounded-pill px-5 py-3"
                >
                  <i className="bi bi-rocket-takeoff me-2"></i>Start Project
                </button>
                <a
                  href={resumePdf}
                  download="Rikeshwaran_Resume.pdf"
                  className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3"
                >
                  <i className="bi bi-download me-2"></i>Resume
                </a>

              </div>

              <div className="d-flex justify-content-center justify-content-lg-start gap-4 flex-wrap">
                <div className="d-flex align-items-center ms-3">
                  <div>
                    <h5 className="fw-bold mb-0">1+ Years</h5>
                    <small className="">Experience</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="hero-visual">
              {floatingElements.map((el, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: el.delay, duration: 0.5 }}
                  className="floating-element"
                  style={{
                    top: `${15 + i * 20}%`,
                    left: `${15 + i * 15}%`,
                    cursor: "pointer"
                  }}
                  onClick={() => scrollToSection(el.target)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="floating-icon rounded-circle d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: el.color }}
                  >
                    <i className={`bi ${el.icon} text-white`}></i>
                  </div>
                </motion.div>
              ))}

              <div className="hero-graphic">
                <div className="gradient-circle">
                  <div className="inner-circle">
                    <div className="avatar">
                      <span>Developer</span>
                    </div>

                    <div
                      className="scroll-indicator-inside"
                      onClick={() => scrollToSection("about")}
                    >
                      <div className="mouse">
                        <div className="wheel"></div>
                      </div>
                      <div className="arrow">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
