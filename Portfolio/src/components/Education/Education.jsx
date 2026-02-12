import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Vellalar College of Engineering and Technology",
      location: "Erode, Tamil Nadu",
      period: "2021 - 2025",
      cgpa: "7.83 CGPA",
      icon: "bi-mortarboard",
      achievements: [
        "Built an NLP-based machine learning system to detect fake reviews on social media",
        "Participated in Master Class on Full Stack Development by NoviTech R&D Pvt. Ltd.",
        "Completed HTML Training by IIT Bombay with score of 72.50%",
        "Active member of National Cadet Corps (NCC)",
        "Participated in various technical workshops and seminars"
      ],
      projects: [
        "Fake Review Detection System"
      ]
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Kongu Vellalar Matric HSS",
      location: "Chennimalai, Tamil Nadu",
      period: "2020 - 2021",
      percentage: "84.4%",
      icon: "bi-book",
      achievements:[]      
    },
    {
      degree: "SSLC (10th)",
      institution: "Kongu Vellalar Matric HSS",
      location: "Chennimalai, Tamil Nadu",
      period: "2018 - 2019",
      percentage: "86.7%",
      icon: "bi-pencil",
      achievements: []
    }
  ];

  const certifications = [
    {
      title: "Full Stack Development Master Class",
      issuer: "NoviTech R&D Pvt. Ltd.",
      year: "2024",
      icon: "bi-award"
    },
    {
      title: "HTML Training Program",
      issuer: "IIT Bombay",
      year: "2023",
      icon: "bi-filetype-html"
    },
    {
      title: "Artificial Intelligence Workshop",
      issuer: "Top Engineers",
      year: "2023",
      icon: "bi-cpu"
    },
    {
      title: "Introduction to NLP",
      issuer: "Infosys Springboard",
      year: "2024",
      icon: "bi-award"
    }
  ];

  return (
    <section id="education" className="education-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-5"
        >
          <h6 className="section-subtitle text-primary mb-2">Education</h6>
          <h2 className="section-title fw-bold display-5">Academic Journey</h2>
          <p className="section-description mx-auto">
            Building a strong foundation through quality education
          </p>
        </motion.div>

        <div className="timeline-wrapper">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-marker">
                <i className={`bi ${edu.icon}`}></i>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="timeline-content theme-card p-4 rounded-4"
              >
                <div className="education-header mb-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="h4 mb-2 fw-bold">{edu.degree}</h3>
                      <h4 className="h5 text-primary mb-1">{edu.institution}</h4>
                      <div className="d-flex align-items-center gap-3">
                        <span className="">
                          <i className="bi bi-geo-alt me-1"></i>
                          {edu.location}
                        </span>
                        <span className="">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    <div>
                      {edu.cgpa||edu.percentage?<span className="fw-bold">{edu.cgpa?edu.cgpa:edu.percentage}</span>:null}
                    </div>
                  
                  </div>
                </div>

                <div className="education-body">
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="achievements mb-4">
                      <h5 className="h6 mb-3">
                        <i className="bi bi-trophy me-2 text-warning"></i>
                        Key Achievements
                      </h5>
                      <ul className="achievements-list">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}


                  {edu.projects && (
                    <div className="projects">
                      <h5 className="h6 mb-3">
                        <i className="bi bi-laptop me-2 text-primary"></i>
                        Academic Projects
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {edu.projects.map((project, idx) => (
                          <span key={idx} className="project-tag">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="certifications-section mt-5"
        >
          <h3 className="text-center mb-4">Certifications</h3>
          <div className="row g-4">
            {certifications.map((cert, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="certification-card text-center p-4 rounded-4"
                >
                  <div className="cert-icon mb-3">
                    <i className={`bi ${cert.icon} fs-1`}></i>
                  </div>
                  <h5 className="h6 fw-bold mb-2">{cert.title}</h5>
                  <p className=" mb-2">{cert.issuer}</p>
                  <span className="cert-year badge bg-primary">{cert.year}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Developed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="skills-developed mt-5"
        >
          <h4 className="text-center mb-4">Skills Developed</h4>
          <div className="skill-bubbles d-flex flex-wrap justify-content-center gap-3">
            {[
              'Frontend' , 'Backend' , 'Database' , 'API Integration' , 
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="skill-bubble"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;