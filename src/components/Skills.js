import React from 'react';
import { cvData } from '../data/cvData';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const Skills = () => {
  const getIcon = (category) => {
    switch (category) {
      case 'Frontend': return <FaCode />;
      case 'Backend': return <FaServer />;
      case 'Database': return <FaDatabase />;
      case 'DevOps': return <FaCloud />;
      case 'Tools': return <FaTools />;
      default: return <FaCode />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(cvData.skills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {getIcon(category)}
                </div>
                <h3>{category}</h3>
              </div>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: `${Math.min(90, 70 + Math.random() * 25)}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;