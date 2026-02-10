import React, { useState, useEffect } from 'react';
import './styles/global.css';
import './styles/animations.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const dot = document.createElement("div");
      const ring = document.createElement("div");

      dot.className = "cursor-dot";
      ring.className = "cursor-ring";

      document.body.appendChild(dot);
      document.body.appendChild(ring);

      const moveCursor = (e) => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;

        ring.animate(
          [
            {
              left: ring.style.left,
              top: ring.style.top,
            },
            {
              left: `${e.clientX}px`,
              top: `${e.clientY}px`,
            },
          ],
          {
            duration: 150,
            fill: "forwards",
          }
        );
      };

      window.addEventListener("mousemove", moveCursor);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        dot.remove();
        ring.remove();
      };
    }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
    
    // Simulate loading
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  if (loading) {
    return (
      <div className="loading-screen d-flex flex-column align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h4 className="mt-3 gradient-text">Loading Portfolio...</h4>
      </div>
    );
  }

  return (
    <div className={`app-container ${theme}`}>
      <ParticlesBackground theme={theme} />
      
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />

      {/* Back to Top Button */}
      <button
        className="back-to-top btn btn-primary rounded-circle"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      <footer className="footer py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h3 className="fw-bold gradient-text">Rikeshwaran M</h3>
              <p className=" mb-0">Full Stack Developer & AI Enthusiast</p>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="social-links d-flex justify-content-center gap-3">
                {[
                  { icon: 'bi-linkedin', link: 'https://linkedin.com/in/rikeshwaran-m' },
                  { icon: 'bi-envelope', link: 'mailto:rikeshrikey@gmail.com' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link rounded-circle"
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <p className=" mb-0">
                &copy; {new Date().getFullYear()} Rikeshwaran M. All rights reserved.
              </p>
              <p className=" mb-0">Made using React</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;