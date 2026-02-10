import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements = [
    {
      title: "Paper Presentation - Kamaraj University",
      description: "Presented research paper on 'Recent Trends in Science , Engineering and Technology'",
      year: "2024",
      icon: "bi-file-earmark-text",
      category: "academic"
    },
    // {
    //   title: "Metro KIDATHON Volunteer - JCI Erode Metro",
    //   description: "Volunteered in KIDATHON program organized by JCI Erode Metro",
    //   year: "2023",
    //   icon: "bi-people-fill",
    //   category: "volunteer"
    // },
    {
      title: "NCC Group Level Selection",
      description: "Selected for NCC group level selection camp, participated in many shooting competitions",
      year: "2024",
      icon: "bi-shield-fill",
      category: "extracurricular"
    },
  ];

  const activities = [
    "NCC Cadet – Actively participated in training camps and related programs",
    "Participated in battalion-level shooting competitions in Erode",
    "Volunteer at Kidathon event organized by JCI Erode Metro"
  ];


  return (
    <section id="achievements" className="achievements-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-5"
        >
          <h6 className="section-subtitle text-primary mb-2">Recognition</h6>
          <h2 className="section-title fw-bold display-5">Achievements & Activities</h2>
          <p className="section-description mx-auto">
            Achievements and contributions beyond academics
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="tabs-navigation mb-5">
          <div className="d-flex justify-content-center gap-3">
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              <i className="bi bi-trophy me-2"></i>
              Achievements
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`}
              onClick={() => setActiveTab('activities')}
            >
              <i className="bi bi-people me-2"></i>
              Activities
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="tab-content">
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="achievements-grid"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="achievement-card"
                >
                  <div className="achievement-icon">
                    <i className={`bi ${achievement.icon}`}></i>
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                    <div className="achievement-meta">
                      <span className="year">{achievement.year}</span>
                      <span className={`category ${achievement.category}`}>
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'activities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="activities-section"
            >
              <div className="activities-list">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="activity-item"
                  >
                    <div className="activity-icon">
                      <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <span className="activity-text">{activity}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="leadership-section mt-5">
                <h4 className="text-center mb-4">Leadership & Soft Skills</h4>
                <div className="skills-cloud">
                  {[
                    'Team Leadership', 'Event Management',
                    'Communication', 'Problem Solving', 'Time Management',
                    'Adaptability', 'Collaboration', 'Mentoring'
                  ].map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      className="leadership-skill"
                      style={{
                        fontSize: `${Math.random() * 0.5 + 0.8}rem`,
                        opacity: Math.random() * 0.3 + 0.7
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;