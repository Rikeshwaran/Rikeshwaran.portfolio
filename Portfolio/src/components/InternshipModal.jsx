import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InternshipModal = ({ internship, onClose }) => {
  if (!internship) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay d-flex align-items-center justify-content-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25 }}
          className="modal-content theme-card rounded-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header border-0 p-4">
            <div className="d-flex align-items-start justify-content-between w-100">
              <div>
                <h3 className="modal-title h3 fw-bold mb-2">{internship.title}</h3>
                <h4 className="modal-subtitle h5 theme-text-primary mb-3">{internship.company}</h4>
                <div className="d-flex flex-wrap gap-3">
                  <span className="badge bg-primary px-3 py-2">
                    <i className="bi bi-calendar me-2"></i>
                    {internship.period}
                  </span>
                  <span className="badge bg-secondary px-3 py-2">
                    <i className="bi bi-geo-alt me-2"></i>
                    {internship.location}
                  </span>
                  <span className="badge bg-accent px-3 py-2">
                    <i className="bi bi-clock me-2"></i>
                    {internship.duration || 'Full-time'}
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="btn-close btn-close-white ms-3"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
          </div>

          <div className="modal-body p-4">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="responsibilities mb-4">
                  <h5 className="h5 fw-semibold mb-3">
                    <i className="bi bi-list-task me-2 text-primary"></i>
                    Key Responsibilities
                  </h5>
                  <ul className="list-unstyled">
                    {internship.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="mb-3 p-3 rounded-3"
                        style={{ 
                          background: 'rgba(99, 102, 241, 0.05)',
                          borderLeft: '4px solid var(--primary)'
                        }}
                      >
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {internship.achievements && internship.achievements.length > 0 && (
                  <div className="achievements mb-4">
                    <h5 className="h5 fw-semibold mb-3">
                      <i className="bi bi-trophy me-2 text-warning"></i>
                      Achievements
                    </h5>
                    <ul className="list-unstyled">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-star-fill text-warning me-2"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="col-lg-4">
                <div className="skills-card p-4 rounded-4 mb-4"
                     style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                  <h5 className="h5 fw-semibold mb-3">
                    <i className="bi bi-tools me-2 text-primary"></i>
                    Technologies Used
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {internship.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="badge bg-primary px-3 py-2 mb-2"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="learning-card p-4 rounded-4"
                     style={{ background: 'rgba(6, 182, 212, 0.1)' }}>
                  <h5 className="h5 fw-semibold mb-3">
                    <i className="bi bi-lightbulb me-2 text-accent"></i>
                    Key Learnings
                  </h5>
                  <ul className="list-unstyled">
                    {internship.learnings?.map((learning, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-arrow-right-circle-fill text-accent me-2"></i>
                        {learning}
                      </li>
                    )) || [
                      "Real-world project development experience",
                      "Team collaboration and agile methodologies",
                      "Industry best practices and coding standards",
                      "Problem-solving in production environments"
                    ].map((learning, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-arrow-right-circle-fill text-accent me-2"></i>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-showcase mt-4 p-4 rounded-4"
                 style={{ 
                   background: 'var(--gradient-primary)',
                   color: 'white'
                 }}>
              <h5 className="h5 fw-semibold mb-3">
                <i className="bi bi-rocket-takeoff me-2"></i>
                Project Impact
              </h5>
              <div className="row">
                <div className="col-md-4 text-center mb-3 mb-md-0">
                  <div className="display-6 fw-bold">4+</div>
                  <div>Features Developed</div>
                </div>
                <div className="col-md-4 text-center mb-3 mb-md-0">
                  <div className="display-6 fw-bold">100%</div>
                  <div>On-time Delivery</div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="display-6 fw-bold">5+</div>
                  <div>Team Members</div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer border-0 p-4">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <small className="text-muted">
                  <i className="bi bi-info-circle me-1"></i>
                  Internship Certificate Available
                </small>
              </div>
              <div className="d-flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline-light px-4"
                  onClick={onClose}
                >
                  Close
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-light px-4"
                  onClick={() => {
                    // Add view certificate functionality
                    alert('Certificate viewing functionality would be implemented here');
                  }}
                >
                  <i className="bi bi-eye me-2"></i>
                  View Certificate
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InternshipModal;

