import React from 'react';
import { cvData } from '../data/cvData';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>
          <FaUser className="section-icon" /> About Me
        </h2>
        <div className="about-grid">
          <div className="about-content">
            <div className="about-text">
              <p>{cvData.about}</p>
            </div>
            <div className="personal-info">
              <div className="info-grid">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">{cvData.personal.location}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <span className="info-label">Phone</span>
                    <span className="info-value">{cvData.personal.phone}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <span className="info-label">Email</span>
                    <span className="info-value">{cvData.personal.email}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FaGlobe className="info-icon" />
                  <div>
                    <span className="info-label">Website</span>
                    <span className="info-value">{cvData.personal.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-list">
              {cvData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-degree">{edu.degree}</div>
                  <div className="education-institution">{edu.institution}</div>
                  <div className="education-year">{edu.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;