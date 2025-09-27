import React, { useEffect, useRef, useState, useCallback } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/Body/About";
import Career from "./components/Body/Career";
import Education from "./components/Body/Education";
import Skills from "./components/Body/Skills";
import Projects from "./components/Body/Projects";
import Achievements from "./components/Body/Achievements";
import Internship from "./components/Body/Internship";
import VolunteerExtracurricularActivities from "./components/Body/VolunteerExtracurricularActivities";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import WorkExperience from "./components/Body/WorkExperience";
import WorkExperienceModal from "./components/Body/WorkExperienceModal";

/** Cursor & particles are global like your original HTML */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const move = (e) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      dot.style.left = x;
      dot.style.top = y;
      ring.style.left = x;
      ring.style.top = y;
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor-dot" id="cursorDot" ref={dotRef} />
      <div className="cursor-ring" id="cursorRing" ref={ringRef} />
    </>
  );
}

/** Particle system (ported from your script.js) */
function ParticleBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const particlesRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = document.createElement("canvas");
    canvasRef.current = canvas;
    canvas.className = "particles-canvas";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles (logic equivalent to your script)
    const colors = [
      (a) => `rgba(99, 102, 241, ${a})`,
      (a) => `rgba(81, 72, 90, ${a})`,
      (a) => `rgba(236, 72, 153, ${a})`,
    ];

    const random = (min, max) => Math.random() * (max - min) + min;

    const makeParticle = () => ({
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      vx: random(-0.3, 0.3),
      vy: random(-0.3, 0.3),
      size: random(1.2, 2.4),
      alpha: random(0.2, 0.8),
      colorFunc: colors[Math.floor(Math.random() * colors.length)],
    });

    particlesRef.current = Array.from({ length: 110 }, makeParticle);

    const animate = () => {
      const ctx = ctxRef.current;
      const particles = particlesRef.current;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.colorFunc(p.alpha);
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      container.removeChild(canvas);
    };
  }, []);

  return <div className="particles" ref={containerRef} />;
}

/** Certificate Modal (matches your HTML structure & IDs for CSS) */
function CertificateModal({ show, image, text, link, onClose }) {
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

  return (
    <div
      id="certificateModal"
      className="modal"
      style={{ display: show ? "block" : "none" }}
      ref={wrapperRef}
    >
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <div className="modal-content-wrapper">
        {image && image.endsWith(".pdf") ? (
          <iframe
            src={image}
            title="Certificate PDF"
            className="modal-content"
            style={{ width: "100%", height: "80vh", border: "none" }}
          />
        ) : image ? (
          <img
            className="modal-content"
            id="certificateImage"
            src={image}
            alt="Certificate"
          />
        ) : null}


        <div className="certificate-info">
          {text && <p id="certificateText">{text}</p>}
          {link && (
            <a
              id="certificateLink"
              href={link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-3"
            >
              View 
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ScrollEffects() {
  const location = useLocation();
  useEffect(() => {
    // initial style
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
      section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    const checkScroll = () => {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const h = window.innerHeight;
        if (top < h * 0.75) {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll);

    // Smooth-scroll for in-page hashes
    const links = document.querySelectorAll('a[href^="#"]');
    const handler = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const el = document.querySelector(targetId);
      if (!el) return;
      e.preventDefault();
      const nav = document.querySelector(".navbar");
      const offset = nav ? nav.offsetHeight + 10 : 70;
      window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });

      // Close mobile menu if open
      const collapse = document.querySelector(".navbar-collapse");
      if (collapse && collapse.classList.contains("show")) {
        document.querySelector(".navbar-toggler")?.click();
      }
    };
    links.forEach((a) => a.addEventListener("click", handler));

    return () => {
      window.removeEventListener("scroll", checkScroll);
      links.forEach((a) => a.removeEventListener("click", handler));
    };
  }, [location.pathname]);

  return null;
}
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${visible ? "show" : ""}`}
    >
      ↑
    </button>
  );
}

function HomePage() {
  const [modal, setModal] = useState({ show: false, image: "", text: "", link: "" });
  const openModal = useCallback((image, text, link = "") => {
    setModal({ show: true, image, text, link });
  }, []);
  const openWorkExperienceModal = useCallback((experience) => {
    setModal({ show: true, experience });
  }, []);
  const closeWorkExperienceModal = useCallback(
    () => setModal((m) => ({ ...m, show: false })),
    []
  );
  const closeModal = useCallback(() => setModal((m) => ({ ...m, show: false })), []);

  return (
    <>
      {/* <ParticleBackground /> */}
      <Header />
      <Navigation />
      <main className="container py-5">
        <About />
        <Career />
        <Education />
        <Skills />
        <WorkExperience onOpenWorkExperience={openWorkExperienceModal} />
        <Internship onOpenCertificate={openModal} />
        {/* Pass openModal to components that need it */}
        <Projects onOpenCertificate={openModal} />
        <Achievements onOpenCertificate={openModal} />
        <VolunteerExtracurricularActivities />
      </main>
      <Footer />
      <CertificateModal
        show={modal.show}
        image={modal.image}
        text={modal.text}
        link={modal.link}
        onClose={closeModal}
      />
      <WorkExperienceModal
        show={modal.show}
        experience={modal.experience}
        onClose={closeWorkExperienceModal}
      />
      <ScrollEffects />
    </>
  );
}

export default function App() {
  return (
    
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={
          <div className="container py-5 text-center">
            <h1 className="mb-3">404</h1>
            <p>Page not found</p>
            <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
          </div>
        }/>
      </Routes>
      <ScrollToTopButton />
    </>
  );
}
