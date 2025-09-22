import React from "react";

export default function Footer() {
  return (
    <footer id="footer-contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
            <p>📍 Chennimalai, Perundurai, Erode, India - 638051</p>
          </div>
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-envelope fa-2x mb-3"></i>
            <p>📧 rikeshrikey@gmail.com</p>
          </div>
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-phone fa-2x mb-3"></i>
            <p>📞 +91 9629040311</p>
          </div>
        </div>
        <div className="social-links text-center mt-4">
          <a href="https://linkedin.com/in/rikeshwaran-m" target="_blank" rel="noreferrer" className="btn btn-outline-light mx-2">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/Rikeshwaran" target="_blank" rel="noreferrer" className="btn btn-outline-light mx-2">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
