import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ThreeDots } from 'react-loader-spinner';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS (Replace with your actual public key)
      emailjs.init('Moz8ADX3_57NgzpTD'); // Get from EmailJS dashboard

      const result = await emailjs.send(
        'service_ltrp3gk', 
        'template_4u1qgqc', 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Rikeshwaran',
          reply_to: formData.email
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      details: 'rikeshrikey@gmail.com',
      link: 'mailto:rikeshrikey@gmail.com',
      color: '#06B6D4'
    },
    {
      icon: 'bi-phone-fill',
      title: 'Phone',
      details: '+91 9629040311',
      link: 'tel:+919629040311',
      color: '#10B981'
    },
    {
      icon: 'bi-linkedin',
      title: 'LinkedIn',
      details: 'linkedin.com/in/rikeshwaran-m',
      link: 'https://linkedin.com/in/rikeshwaran-m',
      color: '#0A66C2'
    }
  ];

  const socialLinks = [
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header text-center mb-5"
        >
          <h6 className="section-subtitle text-primary mb-2">Get In Touch</h6>
          <h2 className="section-title fw-bold display-5">Let's Work Together</h2>
          <p className="section-description  mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="contact-info-card theme-card p-5 rounded-4 h-100"
            >
              <h3 className="h3 fw-bold mb-4 theme-text-primary">Contact Information</h3>
              
              <div className="contact-info-list mb-5">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="contact-info-item d-flex align-items-start mb-4"
                  >
                    <div 
                      className="contact-icon me-3"
                      style={{ backgroundColor: `${info.color}20`, color: info.color }}
                    >
                      <i className={`bi ${info.icon}`}></i>
                    </div>
                    <div className="contact-details">
                      <h5 className="h6 fw-semibold mb-1">{info.title}</h5>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="mb-0">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h5 className="h6 fw-semibold mb-3">Connect with me</h5>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link rounded-circle d-flex align-items-center justify-content-center"
                      aria-label={social.label}
                    >
                      <i className={`bi ${social.icon}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="availability mt-5 p-4 rounded-4"
                   style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="status-indicator me-3"></div>
                  <div>
                    <h6 className="fw-semibold mb-0">Currently Available to work</h6>
                    <small className="">Response time: Within 24 hours</small>
                  </div>
                </div>
                <p className="small mb-0">
                  Open to full-time opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="contact-form-card theme-card p-5 rounded-4"
            >
              <h3 className="h3 fw-bold mb-4 theme-text-primary">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="name" className="form-label fw-semibold">
                      <i className="bi bi-person me-2"></i>
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">
                      <i className="bi bi-envelope me-2"></i>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    <i className="bi bi-chat-left-text me-2"></i>
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    <i className="bi bi-chat-left-dots me-2"></i>
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary btn-lg w-100 py-3"
                >
                  {isSubmitting ? (
                    <ThreeDots
                      height="24"
                      width="24"
                      radius="9"
                      color="#ffffff"
                      ariaLabel="three-dots-loading"
                      visible={true}
                    />
                  ) : (
                    <>
                      <i className="bi bi-send me-2"></i>
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Message sent successfully! I'll get back to you soon.
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus(null)}
                  ></button>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <i className="bi bi-exclamation-circle-fill me-2"></i>
                  Failed to send message. Please try again or email directly.
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus(null)}
                  ></button>
                </motion.div>
              )}

            </motion.div>

            {/* Map */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="map-section mt-5"
            >
              <div className="map-placeholder p-4 rounded-4 theme-card text-center">
                <i className="bi bi-geo-alt-fill display-1 text-primary mb-3"></i>
                <h5 className="mb-2">Location: Erode, Tamil Nadu</h5>
                <p className=" mb-0">
                  Available for remote work worldwide
                </p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;