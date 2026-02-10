import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import fakeReviewImg from '../../assets/images/fakereview.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Fake Review Detection System",
      category: "ai-ml",
      description: "Built a machine learning–based system to detect fake reviews on social media using NLP techniques. The model analyzes text patterns and sentiment to identify AI-generated and human-generated fake reviews, improving review authenticity.",
      technologies: ["Python", "NLP", "Machine Learning", "React", "SQL", "Java"],
      features: [
        "Real-time review analysis with accuracy",
        "Sentiment analysis and pattern recognition",
        "User-friendly dashboard for monitoring",
        "Testing Reviews"
      ],
      image: fakeReviewImg,
      github: "#",
      demo: "#",
      status: "completed"
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: 'bi-grid' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-5"
        >
          <h2 className="section-title fw-bold display-5">Featured Projects</h2>
          <p className="section-description  mx-auto">
            The below is the college project, Work experience projects cannot be shared.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="filter-buttons mb-5">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <i className={`bi ${category.icon} me-2`}></i>
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-wrapper">
                  <div 
                    className="project-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="project-overlay">
                    <span className={`project-status ${project.status}`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  
                  <div className="project-footer">
                    <div className="project-features">
                      <small className="">
                        <i className="bi bi-list-check me-1"></i>
                        {project.features.length} features
                      </small>
                    </div>
                    <div className="project-actions">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="btn-view"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-section">
            <h3 className="modal-title">{project.title}</h3>
            <div className="modal-category">
              <span className="badge bg-primary">{project.category.toUpperCase()}</span>
              <span className={`project-status ${project.status}`}>
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ rotate: 90 }}
            className="modal-close"
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </motion.button>
        </div>

        <div className="modal-body">
          <div className="modal-image">
            <div 
              className="image-wrapper"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </div>
          
          <div className="modal-details">
            <div className="description-section">
              <h4>Project Description</h4>
              <p>{project.description}</p>
            </div>
            
            <div className="features-section">
              <h4>Key Features</h4>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="technologies-section">
              <h4>Technologies Used</h4>
              <div className="technologies-grid">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="technology-badge"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="project-links">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-github me-2"></i>
              View Code (No Access)
            </motion.a>
            {/* <motion.a
              whileHover={{ scale: 1.05 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              <i className="bi bi-eye me-2"></i>
              Live Demo
            </motion.a> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;