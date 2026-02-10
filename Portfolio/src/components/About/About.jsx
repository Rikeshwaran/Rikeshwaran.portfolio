import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    { value: '1+', label: 'Years Experience', icon: 'bi-clock' },
    { value: '10+', label: 'Technologies', icon: 'bi-code-slash' }
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-5"
        >
          <h6 className="section-subtitle text-primary mb-2">About Me</h6>
          <h2 className="section-title fw-bold display-5">Get to Know Me</h2>
          <p className="section-description text-muted mx-auto">
            Passionate developer crafting digital solutions with modern technologies
          </p>
        </motion.div>

        <div className="row g-5">
          <div className="col-lg-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="about-card glass p-5 rounded-4 h-100"
            >
              <motion.h3 variants={itemVariants} className="mb-4">
                <i className="bi bi-person-circle me-2 text-primary"></i>
                Personal Profile
              </motion.h3>
              <motion.p variants={itemVariants} className="mb-4">
                I'm a passionate computer science graduate with strong problem-solving skills 
                and a deep interest in software development. My vision is to create 
                impactful solutions that leverage technology for the betterment of society.
              </motion.p>
              <motion.p variants={itemVariants} className="mb-5">
                A learner with excellent communication and team collaboration 
                skills, always eager to take on new challenges and learn cutting-edge technologies.
              </motion.p>

              <motion.div variants={itemVariants}>
                <h4 className="h5 mb-4">
                  <i className="bi bi-bullseye me-2 text-primary"></i>
                  Career Objectives
                </h4>
                <p>
                  To secure a challenging position in a reputable organization to expand my 
                  learning, knowledge, and skills. I aim to contribute towards the development 
                  of technology while growing professionally in the software industry.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="stats-grid mb-5"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="stat-card text-center p-4 rounded-4"
                >
                  <div className="stat-icon mb-3">
                    <i className={`bi ${stat.icon} fs-2`}></i>
                  </div>
                  <h3 className="stat-value fw-bold mb-2">{stat.value}</h3>
                  <p className="stat-label mb-0">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="info-card p-4 rounded-4"
            >
              <h4 className="h5 mb-4">Quick Info</h4>
              <div className="row g-3">
                {[
                  { icon: 'bi-envelope', label: 'Email', value: 'rikeshrikey@gmail.com', link: 'mailto:rikeshrikey@gmail.com' },
                  { icon: 'bi-phone', label: 'Phone', value: '+91 9629040311', link: 'tel:+919629040311' },
                  { icon: 'bi-geo-alt', label: 'Location', value: 'Chennimalai, Erode, India' },
                  { icon: 'bi-linkedin', label: 'LinkedIn', value: 'rikeshwaran-m', link: 'https://linkedin.com/in/rikeshwaran-m' }
                ].map((info, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="info-item d-flex align-items-center p-3 rounded-3">
                      <div className="info-icon me-3">
                        <i className={`bi ${info.icon} fs-5 text-primary`}></i>
                      </div>
                      <div>
                        <small className="d-block">{info.label}</small>
                        {info.link ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            {info.value}
                          </a>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="tech-stack mt-5"
        >
          <h4 className="text-center mb-4">Tech Stack</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {['React', 'Bootstrap', 'JavaScript', 'FastAPI', 'Python', 'GraphQL', 'MongoDB', 'SQL' ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="tech-badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;