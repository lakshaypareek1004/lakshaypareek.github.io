import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import useScrollFadeIn from './hooks/useScrollFadeIn';
import './App.css';
import profileImg from './image.jpg';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lakshay-pareek-67923a389/', icon: '🔗' },
  { name: 'GitHub', url: 'https://github.com/lakshaypareek1004', icon: '🐱' },
  { name: 'Instagram', url: 'https://www.instagram.com/lakshay_pareek2025/', icon: '📸' }
];

const profileData = {
  name: 'Lakshay Pareek',
  contact: '9509893469',
  email: 'lakshay.pareek1004@gmail.com',
  summary: `Bachelor of Computer Applications (2023-2027) | Christ University, Bangalore
Certified in Machine Learning, Deep Learning, Cloud, Cybersecurity, Android/Kotlin via Infosys, AWS Academy, L&T Edutech.
Passionate about Python, AI, cloud computing, cybersecurity.`,
  skills: [
    { name: 'Python' },
    { name: 'Java' },
    { name: 'JavaScript' },
    { name: 'MySQL' },
    { name: 'Amazon Web Services (AWS)' },
    { name: 'Google Cloud Basics' },
    { name: 'Network Security' },
    { name: 'Firewalls' },
    { name: 'Ethical Hacking' },
    { name: 'Microsoft Office' },
    { name: 'Communication' },
    { name: 'Project Management' },
    { name: 'Problem Solving' },
    { name: 'Teamwork' },
    { name: 'Time Management' }
  ],
  projects: [
    {
      title: 'EMPOWER360',
      description: 'A comprehensive platform for personal and professional development, offering tools for goal tracking, skill building, and mentorship.',
      link: 'https://empower-360.vercel.app/',
      icon: '🟨',
      tech: ['React', 'JavaScript', 'CSS', 'HTML']
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built in HTML, hosted via GitHub Pages.',
      link: 'https://github.com/lakshaypareek1004/lakshaypareek.github.io',
      icon: '🌐',
      tech: ['React', 'JavaScript', 'CSS', 'HTML']
    },
    {
      title: 'Selenium-Iframe-ShadowDom-Playground', // <-- FIXED: Removed stray '<' character
      description: 'Developed a full Selenium test suite and custom HTML playground to practice resilient automation across iFrames, Shadow DOM, and complex DOM structures.',
      link: 'https://github.com/lakshaypareek1004/Selenium-Iframe-ShadowDom-Playground',
      icon: '🟨',
      tech: ['Selenium', 'C#', 'JavaScript', 'CSS', 'HTML']
    }
  ],
  certifications: [
    { title: 'Tech A Transition: Java/Kotlin to Android', description: 'Infosys, Oct 2024. Android development and Kotlin.', icon: '📱' },
    { title: 'Kotlin - Beginners, Kotlin', description: 'Infosys, Jul 2024. Kotlin course.', icon: '📝' },
    { title: 'Data Structures & Algorithms (Java)', description: 'Infosys, Mar-Apr 2025. DSA theory and implementation.', icon: '📚' },
    { title: 'Machine Learning with Python', description: 'Infosys, May 2025. ML certification and Python hands-on.', icon: '🤖' },
    { title: 'Deep Learning with Keras', description: 'Infosys, May 2025. Deep neural networks.', icon: '🧠' },
    { title: 'Cloud Foundations', description: 'AWS Academy, Sep 2025. Cloud badge.', icon: '☁️' },
    { title: 'Ethical Hacking', description: 'L&T Edutech, May 2024. Cybersecurity training.', icon: '🛡️' },
    { title: 'Introduction to Python', description: 'Infosys, Sep 2024. Python fundamentals and certification.', icon: '🐍' },
    { title: 'Big Data 101', description: 'Infosys, Apr 2025. Big data analytics.', icon: '💾' },
    { title: 'Internet of Things 101', description: 'Infosys, Feb 2025. IoT foundations.', icon: '🌐' }
  ]
};

// SkillBar: shows only the skill name (no bar, no percentage)
function SkillBar({ name }) {
  return (
    <div className="skill-container">
      <span className="skill-label">{name}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div className="project-card-vibrant"
      whileHover={{ scale: 1.09, boxShadow: "0 0 80px #63deff" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 270, damping: 20 }}
    >
      <span className="project-icon">{project.icon}</span>
      <h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >{project.title}</a>
      </h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech) => (
          <span className="tech-badge" key={tech}>{tech}</span>
        ))}
      </div>
    </motion.div>
  );
}

function CertificationCard({ cert }) {
  return (
    <motion.div className="project-card-vibrant"
      whileHover={{ scale: 1.07, boxShadow: "0 0 80px #a273ff" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 270, damping: 20 }}
    >
      <span className="project-icon">{cert.icon}</span>
      <h3>{cert.title}</h3>
      <p>{cert.description}</p>
    </motion.div>
  );
}

export default function App() {
  const fadeIn1 = useScrollFadeIn();
  const fadeIn2 = useScrollFadeIn();
  const fadeIn3 = useScrollFadeIn();
  const fadeIn4 = useScrollFadeIn();
  const fadeIn5 = useScrollFadeIn();

  return (
    <div className="vibrant-bg">
      <header className="dev-header-ext">
        <motion.img
          src={profileImg}
          alt="Lakshay Pareek"
          className="profile-img-hero"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.42 }}
        />
        <motion.div
          className="dev-hero"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="dev-tag">&lt;</span>
          <span className="dev-tagname">{profileData.name}</span>
          <span className="dev-tag">/&gt;</span>
        </motion.div>
        <nav className="dev-nav">
          <Link to="about" smooth duration={500} offset={-50}>About</Link>
          <Link to="skills" smooth duration={500} offset={-50}>Skills</Link>
          <Link to="projects" smooth duration={500} offset={-50}>Projects</Link>
          <Link to="certifications" smooth duration={500} offset={-50}>Certifications</Link>
          <Link to="contact" smooth duration={500} offset={-50}>Contact</Link>
        </nav>
      </header>
      <main className="main-content-box">
        <section id="about" {...fadeIn1} className="main-section about">
          <h2>About Me</h2>
          <p>{profileData.summary}</p>
          <div className="social-row">
            {socialLinks.map((l) => (
              <motion.a
                whileHover={{ scale: 1.13, boxShadow: "0 0 25px #39ffd7" }}
                whileTap={{ scale: 0.98 }}
                href={l.url} target="_blank" rel="noopener noreferrer" className="social-btn-vibrant" key={l.name}
              >
                {l.icon} {l.name}
              </motion.a>
            ))}
          </div>
        </section>
        <section id="skills" {...fadeIn2} className="main-section skills">
          <h2>Skills</h2>
          <div className="columns-box">
            {profileData.skills.map(s => (
              <SkillBar key={s.name} name={s.name} />
            ))}
          </div>
        </section>
        <section id="projects" {...fadeIn3} className="main-section projects">
          <h2>Projects</h2>
          <div className="columns-box">
            {profileData.projects.map(proj => (
              <ProjectCard key={proj.title} project={proj} />
            ))}
          </div>
        </section>
        <section id="certifications" {...fadeIn4} className="main-section certifications">
          <h2>Certifications</h2>
          <div className="columns-box">
            {profileData.certifications.map(cert => (
              <CertificationCard key={cert.title} cert={cert} />
            ))}
          </div>
        </section>
        <section id="contact" {...fadeIn5} className="main-section contact">
          <h2>Contact</h2>
          <div className="contact-grid contact-vertical">
            <div>
              <span className="contact-label">Phone:</span>
              <a className="contact-link" href={`tel:${profileData.contact}`}>{profileData.contact}</a>
            </div>
            <div>
              <span className="contact-label">Email:</span>
              <a className="contact-link" href={`mailto:${profileData.email}`}>{profileData.email}</a>
            </div>
            <div>
              <span className="contact-label">LinkedIn:</span>
              <a className="contact-link" href={socialLinks[0].url} target="_blank" rel="noopener noreferrer">
                lakshay-pareek-67923a389
              </a>
            </div>
            <div>
              <span className="contact-label">GitHub:</span>
              <a className="contact-link" href={socialLinks[1].url} target="_blank" rel="noopener noreferrer">
                lakshaypareek1004
              </a>
            </div>
            <div>
              <span className="contact-label">Instagram:</span>
              <a className="contact-link" href={socialLinks[2].url} target="_blank" rel="noopener noreferrer">
                lakshay_pareek2025
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="dev-footer-ext">
        &copy; {new Date().getFullYear()} {profileData.name}.
      </footer>
    </div>
  );
}
