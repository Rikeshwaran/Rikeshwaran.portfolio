import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedInternship, setSelectedInternship] = useState(null);

  const experience = {
    current: {
      position: "Junior Software Engineer",
      company: "Younder Bots (OPC) Private Limited",
      period: "Apr 2025 – Present",
      location: "Kovilpatti, Tamil Nadu",
      icon: "bi-briefcase",
      responsibilities: [
        "Developed web and software applications using Python (FastAPI), React, Bootstrap, and GraphQL",
        "Implemented frontend and backend features, handled and integrated REST APIs",
        "Performed database operations using MongoDB and SQL",
        "Collaborated with senior developers to deliver scalable solutions following industry best practices"
      ],
      technologies: ["React", "FastAPI", "GraphQL", "MongoDB", "SQL", "Bootstrap"]
    }
  };

  const internships = [
    {
      title: "Full Stack Development Intern",
      company: "Velga Creative PowerHouse",
      period: "Dec 2024 – Apr 2025",
      location: "On-site",
      icon: "bi-code-slash",
      responsibilities: [
        "Built dynamic web applications using React for frontend and FastAPI for backend services",
        "Integrated MongoDB and SQL databases with proper schema design",
        "Implemented REST APIs, JWT authentication, and authorization systems",
        "Developed responsive UI components with modern design principles"
      ],
      technologies: ["React", "FastAPI", "MongoDB", "SQL", "Bootstrap"]
    },
    {
      title: "Full Stack Development Intern",
      company: "NoviTech R&D Pvt Ltd",
      period: "Oct 2024 – Dec 2024",
      // location online
      location: "Remote",
      icon: "bi-laptop",
      responsibilities: [
        "Developed full-stack applications using MERN stack (MongoDB, Express.js, React.js, Node.js)",
        "Designed responsive React components and managed application state with Context API",
        "Worked on database design, optimization, and query performance"
      ],
      technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Web Development Intern",
      company: "Code Hunters",
      period: "June 2024 – July 2024",
      location: "Remote",
      icon: "bi-globe",
      responsibilities: [
        "Built responsive web pages using HTML5, CSS3, and JavaScript",
        "Implemented interactive UI components with smooth animations",
        "Developed form validation systems and error handling",
        "Followed clean coding practices and Git version control"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-5"
        >
          <h6 className="section-subtitle text-primary mb-2">Experience</h6>
          <h2 className="section-title fw-bold display-5">My Professional Journey</h2>
        </motion.div>

        {/* Tab Navigation */}
        <div className="tab-navigation mb-5">
          <div className="d-flex justify-content-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <i className="bi bi-briefcase me-2"></i>Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
              onClick={() => setActiveTab('internships')}
            >
              <i className="bi bi-mortarboard me-2"></i>Internships
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-timeline">
                <div className="timeline-item current">
                  <div className="timeline-marker">
                    <i className="bi bi-rocket-takeoff"></i>
                  </div>
                  <div className="timeline-content glass p-4 rounded-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h3 className="h4 mb-1">{experience.current.position}</h3>
                        <h4 className="h5 text-primary mb-2">{experience.current.company}</h4>
                        <div className="align-items-center gap-3">
                          <span className="">
                            <i className="bi bi-calendar me-1"></i>
                            {experience.current.period}
                          </span>
                          <br />
                          <span className="">
                            <i className="bi bi-geo-alt me-1"></i>
                            {experience.current.location}
                          </span>
                        </div>
                      </div>
                      <span className="badge bg-primary px-3 py-2">Current</span>
                    </div>
                    
                    <ul className="responsibilities mb-4">
                      {experience.current.responsibilities.map((resp, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="mb-2"
                        >
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="technologies">
                      <h5 className="h6 mb-2">Technologies Used:</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {experience.current.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="tech-tag"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'internships' && (
            <motion.div
              key="internships"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="row g-4">
                {internships.map((internship, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="internship-card h-100"
                      onClick={() => setSelectedInternship(internship)}
                    >
                      <div className="internship-header">
                        <div className="internship-icon">
                          <i className={`bi ${internship.icon}`}></i>
                        </div>
                        <div>
                          <h4 className="h5 mb-1">{internship.title}</h4>
                          <h5 className="h6 text-primary mb-2">{internship.company}</h5>
                        </div>
                      </div>
                      
                      <div className="internship-body">
                        <div className="d-flex justify-content-between mb-3">
                          <span className="">
                            <i className="bi bi-calendar me-1"></i>
                            {internship.period}
                          </span>
                          <span className="">
                            {internship.location}
                          </span>
                        </div>
                        
                      </div>
                      
                      <div className="internship-footer">
                        <span className="view-details">
                          View Details <i className="bi bi-arrow-right"></i>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Internship Modal */}
        <AnimatePresence>
          {selectedInternship && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setSelectedInternship(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <div>
                    <h3 className="modal-title">{selectedInternship.title}</h3>
                    <h4 className="modal-subtitle text-primary">{selectedInternship.company}</h4>
                  </div>
                  <button className="modal-close" onClick={() => setSelectedInternship(null)}>
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
                
                <div className="modal-body">
                  <div className="modal-info mb-4">
                    <div className="info-item">
                      <i className="bi bi-calendar"></i>
                      <span>{selectedInternship.period}</span>
                    </div>
                    <div className="info-item">
                      <i className="bi bi-geo-alt"></i>
                      <span>{selectedInternship.location}</span>
                    </div>
                  </div>
                  
                  <div className="responsibilities mb-4">
                    <h5>Responsibilities:</h5>
                    <ul>
                      {selectedInternship.responsibilities.map((resp, idx) => (
                        <li key={idx}>
                          <i className="bi bi-check-circle text-success me-2"></i>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h5>Technologies Used:</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedInternship.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;