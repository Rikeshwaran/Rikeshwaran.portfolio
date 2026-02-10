import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const skillCategories = {
    web: {
      name: 'Web Technologies',
      icon: 'bi-globe',
      skills: [
        { name: 'React.js', level: 95, icon: 'bi-braces', color: '#61DAFB' },
        { name: 'HTML', level: 90, icon: 'bi-filetype-html', color: '#E34F26' },
        { name: 'CSS', level: 88, icon: 'bi-filetype-css', color: '#1572B6' },
        { name: 'JavaScript', level: 85, icon: 'bi-filetype-js', color: '#F7DF1E' },
        { name: 'Bootstrap', level: 90, icon: 'bi-bootstrap', color: '#7952B3' },
        { name: 'Responsive Design', level: 92, icon: 'bi-phone', color: '#3DDC84' }
      ]
    },
    backend: {
      name: 'Backend & APIs',
      icon: 'bi-server',
      skills: [
        { name: 'FastAPI', level: 85, icon: 'bi-lightning', color: '#009688' },
        { name: 'GraphQL', level: 80, icon: 'bi-diagram-3', color: '#E10098' },
        { name: 'Python', level: 90, icon: 'bi-filetype-py', color: '#3776AB' }
      ]
    },
    database: {
      name: 'Database',
      icon: 'bi-database',
      skills: [
        { name: 'MongoDB', level: 85, icon: 'bi-file-earmark-binary', color: '#47A248' },
        { name: 'SQL', level: 82, icon: 'bi-table', color: '#336791' }
      ]
    },
    tools: {
      name: 'Tools & DevOps',
      icon: 'bi-tools',
      skills: [
        { name: 'Git', level: 90, icon: 'bi-git', color: '#F05032' },
        { name: 'GitHub', level: 88, icon: 'bi-github', color: '#8d8989' },
        { name: 'MongoDB Compass', level: 75, icon: 'bi-box', color: '#2496ED' },
        { name: 'Mysql Workbench', level: 90, icon: 'bi-code', color: '#007ACC' },
        { name: 'Postman', level: 85, icon: 'bi-send', color: '#FF6C37' }
      ]
    },
    soft: {
      name: 'Soft Skills',
      icon: 'bi-people',
      skills: [
        { name: 'Problem Solving', level: 90, icon: 'bi-puzzle', color: '#8B5CF6' },
        { name: 'Communication', level: 88, icon: 'bi-chat', color: '#06B6D4' },
        { name: 'Team Collaboration', level: 92, icon: 'bi-people-fill', color: '#10B981' },
        { name: 'Time Management', level: 85, icon: 'bi-clock', color: '#F59E0B' },
        { name: 'Adaptability', level: 90, icon: 'bi-arrow-repeat', color: '#6366F1' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-5"
        >
          <h6 className="section-subtitle text-primary mb-2">Skills & Expertise</h6>
          <h2 className="section-title fw-bold display-5">Technical Proficiencies</h2>
          <p className="section-description text-muted mx-auto">
            Mastery across the full stack development spectrum
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="category-tabs mb-5">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <i className={`bi ${category.icon} me-2`}></i>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="skills-grid mb-5"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-card"
            >
              <div className="skill-header d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div 
                    className="skill-icon rounded-3 d-flex align-items-center justify-content-center"
                    style={{ 
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                      width: '50px',
                      height: '50px'
                    }}
                  >
                    <i className={`bi ${skill.icon} fs-4`}></i>
                  </div>
                  <div>
                    <h4 className="h5 mb-0">{skill.name}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="additional-skills"
        >
          <h4 className="text-center mb-4">Additional Competencies</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              'Unit Testing', 'Debugging', 'API Integration', 'API Design', 'Database Management'
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="additional-skill-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;