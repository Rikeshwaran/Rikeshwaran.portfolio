import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['about', 'education', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: 'bi-person' },
    { id: 'education', label: 'Education', icon: 'bi-mortarboard' },
    { id: 'skills', label: 'Skills', icon: 'bi-code-slash' },
    { id: 'experience', label: 'Experience', icon: 'bi-briefcase' },
    { id: 'projects', label: 'Projects', icon: 'bi-laptop' },
    { id: 'achievements', label: 'Achievements', icon: 'bi-trophy' },
    { id: 'contact', label: 'Contact', icon: 'bi-envelope' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`navbar navbar-expand-lg fixed-top py-3 ${
          isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
        }`}
      >
        <div className="container">
          <div className="d-flex me-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="navbar-brand fw-bold fs-3 gradient-text"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              RIKESH<span className="text-primary">WARAN</span>
            </motion.a>
            <div className="d-flex align-items-center gap-3 me-2 toggle-button" >
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-2`}></i>
            </motion.div>
          </button>

            <div className={`navbar-collapse ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navItems.map((item) => (
                <li className="nav-item mx-2" key={item.id}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`nav-link position-relative px-3 py-2 rounded-pill ${
                      activeSection === item.id ? 'active' : ''
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <i className={`bi ${item.icon} me-2`}></i>
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="active-indicator"
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '30px',
                          height: '3px',
                          background: 'var(--gradient-primary)',
                          borderRadius: '2px'
                        }}
                      />
                    )}
                  </motion.button>
                </li>
              ))}
            </ul>

            
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-overlay d-lg-none"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;