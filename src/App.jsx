import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from './assets/1000060953.jpg';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [codeElements, setCodeElements] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Generate coding-related floating elements
  useEffect(() => {
    const generateCodeElements = () => {
      const elements = ['{', '}', '(', ')', ';', '=', 'import', 'class', 'public', 'static', 'void', 'main', 'System.out.println', 'if', 'else', 'for', 'while', 'try', 'catch', '<div>', '</div>', 'React', 'Spring', 'Java', 'MySQL'];
      const newElements = [];
      
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          symbol: elements[Math.floor(Math.random() * elements.length)],
          size: Math.random() * 20 + 10,
          left: Math.random() * 100,
          top: Math.random() * 100,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      setCodeElements(newElements);
    };

    generateCodeElements();
  }, []);

  // Cursor tracking
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnterHandler = () => {
      setCursorVariant('hover');
    };

    const mouseLeaveHandler = () => {
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .skill-item, .project-card, .certification-item, .education-item, .timeline-content');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnterHandler);
      element.addEventListener('mouseleave', mouseLeaveHandler);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnterHandler);
        element.removeEventListener('mouseleave', mouseLeaveHandler);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Cursor variants
  const cursorVariants = {
    default: {
      width: '30px',
      height: '30px',
    },
    hover: {
      width: '40px',
      height: '40px',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const followerVariants = {
    default: {
      width: '6px',
      height: '6px',
      backgroundColor: 'var(--primary-color)'
    },
    hover: {
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="portfolio">
      {/* Custom Cursor */}
      <motion.div 
        className="cursor"
        variants={cursorVariants}
        animate={cursorVariant}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      <motion.div 
        className="cursor-follower"
        variants={followerVariants}
        animate={cursorVariant}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />

      {/* Coding-related Floating Elements */}
      {codeElements.map((element) => (
        <motion.div
          key={element.id}
          className="code-element"
          style={{
            position: 'fixed',
            fontSize: element.size,
            left: `${element.left}%`,
            top: `${element.top}%`,
            opacity: element.opacity,
            color: '#8b5cf6',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            zIndex: 0,
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.symbol}
        </motion.div>
      ))}

      {/* Navigation */}
      <motion.nav 
        className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <motion.div 
            className="nav-logo" 
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shaik Mohammad Khaleel
          </motion.div>
          <div className="nav-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <motion.li key={item} whileHover={{ y: -2 }}>
                <a 
                  onClick={() => scrollToSection(item)} 
                  className={activeSection === item ? 'active' : ''}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="hero-title"
              variants={fadeInUp}
            >
              Shaik Mohammad Khaleel
            </motion.h1>
            <motion.h2 
              className="hero-subtitle"
              variants={fadeInUp}
            >
              Java Full Stack Developer
            </motion.h2>
            <motion.p 
              className="hero-description"
              variants={fadeInUp}
            >
              Motivated Java Full Stack Developer skilled in building responsive web applications with Java, Spring Boot, React.js, Node.js, and MySQL.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              variants={fadeInUp}
            >
              <motion.button 
                className="btn primary" 
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button 
                className="btn secondary" 
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image"
          >
            <div className="profile-placeholder">
              <div className="profile-image" style={{ backgroundImage: `url(${profileImage})` }}></div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-down" 
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="scroll-icon"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="about-content"
            variants={fadeInUp}
          >
            <div className="about-text">
              <p>
                I'm a passionate Java Full Stack Developer with expertise in building responsive web applications. 
                With a strong foundation in Data Structures and Algorithms, I focus on creating efficient and 
                scalable solutions using modern technologies.
              </p>
              <p>
                My experience at BlueStock Fintech allowed me to develop and deploy RESTful APIs using Spring Boot 
                and integrate them with React.js frontend for dynamic dashboard updates. I'm always eager to learn 
                new technologies and contribute to innovative projects.
              </p>
              <div className="career-objective">
                <h3>Career Objective</h3>
                <p>
                  Motivated Java Full Stack Developer skilled in building responsive web applications with Java, Spring Boot, 
                  React.js, Node.js, and MySQL. Experienced in developing REST APIs and optimizing performance. 
                  Eager to contribute and grow in a collaborative environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Technical Skills
          </motion.h2>
          <div className="skills-container">
            {[
              { title: 'Languages', skills: ['C', 'Java', 'JavaScript', 'Python'] },
              { title: 'Frontend', skills: ['HTML', 'CSS', 'React.js'] },
              { title: 'Backend', skills: ['Spring Boot', 'Node.js', 'REST APIs'] },
              { title: 'Database', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
              { title: 'Concepts', skills: ['Data Structures and Algorithms', 'OOPs'] }
            ].map((category, index) => (
              <motion.div 
                className="skill-category"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      className="skill-item" 
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Internship Experience
          </motion.h2>
          <div className="timeline">
            <motion.div 
              className="timeline-item"
              variants={fadeInUp}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Software Development Engineer (SDE)</h3>
                <h4>BlueStock Fintech</h4>
                <p className="timeline-date">01 Aug 2025 - 30 Sep 2025</p>
                <ul className="experience-list">
                  <li>Developed and deployed RESTful APIs using Spring Boot for financial data services.</li>
                  <li>Integrated APIs with React.js frontend for dynamic dashboard updates.</li>
                  <li>Optimized database queries in MySQL, improving response time by ~25%.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Projects
          </motion.h2>
          <div className="projects-grid">
            {[
              {
                title: 'E-commerce Web Application (Java Full Stack)',
                date: 'March 2025 – June 2025',
                description: 'Developed a full-stack e-commerce web application using Java, Spring Boot, React.js, and MySQL. Implemented user authentication, product management, and payment integration features ensuring a seamless online shopping experience.',
                tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
                demoUrl: '#'
              },
              {
                title: 'Personal Portfolio Website (React.js)',
                date: 'September 2024',
                description: 'Built a responsive personal portfolio website using React.js, HTML, and CSS to showcase projects, skills, and achievements. Focused on clean UI design, optimized performance, and cross-device compatibility.',
                tags: ['React.js', 'HTML', 'CSS'],
                demoUrl: '#'
              }
            ].map((project, index) => (
              <motion.div 
                className="project-card"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span className="tag" key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <motion.a 
                      href={project.demoUrl}
                      className="btn secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ marginTop: '20px', display: 'inline-block' }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Education
          </motion.h2>
          <div className="education-container">
            {[
              {
                degree: 'BTech (CSE)',
                institution: 'Narasaraopeta Engineering College',
                date: '2022 - present',
                details: 'CGPA: 7.9'
              },
              {
                degree: 'Class 12th',
                institution: 'AP Board at Narayana Junior College',
                date: '2021',
                details: 'Percentage: 85.4%'
              },
              {
                degree: 'Class 10th',
                institution: 'AP Board at Viswabharathi EM High School',
                date: '2019',
                details: 'CGPA: 9.7'
              }
            ].map((edu, index) => (
              <motion.div 
                className="education-item"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="education-date">{edu.date}</p>
                <p className="education-details">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        id="certifications" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Certifications
          </motion.h2>
          <div className="certifications-container">
            {[
              { title: 'Data Structure and Algorithms Using Java', source: 'NPTEL', certificateUrl: 'https://drive.google.com/file/d/1zq-CLuAlIj_WJoRj4kFEVeXJ0B2S3ugM/view' },
              { title: 'Java Full Stack with AI', source: 'DataValley', certificateUrl: '#' },
              { title: 'Full Stack Development', source: 'MindLuster', certificateUrl: 'https://www.mindluster.com/student/certificate/5010563b' },
              { title: 'Software Engineer', source: 'HackerRank', certificateUrl: 'https://www.hackerrank.com/certificates/a57cd070ae1e' }
            ].map((cert, index) => (
              <motion.div 
                className="certification-item"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3>{cert.title}</h3>
                <p className="certification-source">{cert.source}</p>
                <motion.a 
                  href={cert.certificateUrl}
                  className="btn secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    marginTop: 'auto', 
                    display: 'inline-block',
                    position: 'absolute',
                    bottom: '20px'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Contact
          </motion.h2>
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              variants={fadeInUp}
            >
              <h3>Get In Touch</h3>
              <p>I'm currently available for freelance work or full-time positions. Feel free to reach out!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong> 
                  <a href="mailto:khaleelshaik7040@gmail.com">khaleelshaik7040@gmail.com</a>
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> 
                  <a href="tel:+918341160898">+91 8341160898</a>
                </div>
                <div className="contact-item">
                  <strong>LinkedIn:</strong> 
                  <a href="https://www.linkedin.com/in/shaik-mohammad-khaleel-173534289" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/shaik-mohammad-khaleel
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="contact-form"
              variants={fadeInUp}
            >
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="btn primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Shaik Mohammad Khaleel. All rights reserved.</p>
          <p className="last-updated">Last updated: November 2, 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;