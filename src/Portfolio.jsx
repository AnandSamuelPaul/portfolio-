import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Code, Shield, Award, Briefcase, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'certifications'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    'Security & Penetration Testing': [
      'Network Security Architecture',
      'Penetration Testing (Network, Application, IoT)',
      'Vulnerability Assessment',
      'Digital Forensics',
      'Malware Analysis',
      'IDS/IPS Deployment',
      'Incident Response'
    ],
    'Programming & Development': [
      'Python',
      'C/C++',
      'JavaScript/React',
      'Node.js',
      'SQL/MongoDB',
      'Assembly (ARM, x86)',
      'Embedded C'
    ],
    'Security Tools': [
      'Burp Suite',
      'Metasploit',
      'Wireshark',
      'Nmap',
      'Ghidra',
      'IDA Pro',
      'Frida',
      'OWASP ZAP'
    ],
    'Cloud & Infrastructure': [
      'Docker',
      'Kubernetes',
      'Cloud Security',
      'Linux/Windows',
      'Git/GitHub',
      'RESTful APIs'
    ]
  };

  const projects = [
    {
      title: 'Digital Forensics in AI Applications',
      description: 'Pioneered forensic methodology for investigating modern AI chat applications (ChatGPT, Perplexity, DeepSeek, Grok). Developed semi-automated workflow for acquiring and analyzing Electron/Chromium artifacts.',
      tags: ['Forensics', 'AI', 'Privacy'],
      tools: 'FTK Imager, Autopsy, SQLite, PowerShell'
    },
    {
      title: 'IoT Penetration Test – Amazon Echo Dot',
      description: 'Performed black-box penetration test identifying 7 critical vulnerabilities including SSL pinning bypass, unauthenticated transaction enumeration, and reflected XSS. Mapped attack paths using MITRE ATT&CK framework.',
      tags: ['IoT', 'PenTest', 'MITRE ATT&CK'],
      tools: 'Nmap, Burp Suite, Frida, Wireshark, Metasploit'
    },
    {
      title: 'Malware Analysis – Ransomware Case',
      description: 'Reverse-engineered Windows ransomware to understand attacker methodology and file encryption workflow (AES-CBC). Built custom Python decryptor demonstrating analysis to remediation capability.',
      tags: ['Malware', 'Reverse Engineering', 'Python'],
      tools: 'Ghidra, x64dbg, Python'
    },
    {
      title: 'Secure Cloud File Storage',
      description: 'Designed secure cloud storage system with hybrid cryptography and blockchain hashing. Implemented file splitting, encryption, and multi-location distribution to mitigate single-point compromise.',
      tags: ['Cloud Security', 'Cryptography', 'Blockchain'],
      tools: 'AES, RC6, RSA, Custom Backend'
    }
  ];

  const experience = [
    {
      title: 'Engineering Intern',
      company: 'Guru Services (Voltas Authorized)',
      period: 'Dec 2022 – Dec 2023',
      points: [
        'Managed databases, servers, and cloud storage with secure access controls and encryption',
        'Developed Python/SQL ETL pipelines improving data accuracy and reducing manual processing time',
        'Implemented cybersecurity practices including access controls, firewall updates, and system monitoring',
        'Reduced project cycle time by 25% through improved task scheduling and risk tracking'
      ]
    },
    {
      title: 'Engineering Trainee',
      company: 'Besant Technologies',
      period: 'Jan 2024 – Jun 2024',
      points: [
        'Completed intensive full-stack web development training on real client projects',
        'Built responsive web applications with HTML5, CSS3, JavaScript, React, and Node.js',
        'Contributed to backend development including RESTful APIs and database integration',
        'Followed Agile/Scrum workflows with Git version control and code reviews'
      ]
    }
  ];

  return (
    <div className="portfolio-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&family=Syne:wght@400;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #0a0a0f;
          --bg-secondary: #12121a;
          --bg-tertiary: #1a1a27;
          --accent-primary: #00ff88;
          --accent-secondary: #00d4ff;
          --accent-tertiary: #ff0080;
          --text-primary: #e8e8f0;
          --text-secondary: #a8a8b8;
          --text-muted: #606070;
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .portfolio-container {
          position: relative;
          min-height: 100vh;
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          z-index: 9999;
          transition: width 0.1s ease;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 3rem;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          z-index: 1000;
          border-bottom: 1px solid rgba(0, 255, 136, 0.1);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--accent-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          transition: width 0.3s ease;
        }

        .nav-link.active::after,
        .nav-link:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 0 3rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: 
            repeating-linear-gradient(0deg, transparent, transparent 2px, var(--accent-primary) 2px, var(--accent-primary) 3px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, var(--accent-primary) 2px, var(--accent-primary) 3px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .hero-content {
          max-width: 900px;
          z-index: 1;
          animation: fadeInUp 0.8s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          color: var(--accent-primary);
          margin-bottom: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 0.8s ease 0.3s both;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 500;
          animation: fadeInUp 0.8s ease 0.4s both;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 3rem;
          max-width: 700px;
          animation: fadeInUp 0.8s ease 0.5s both;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease 0.6s both;
        }

        .btn {
          padding: 1rem 2rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: var(--accent-primary);
          color: var(--bg-primary);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 2px solid var(--accent-primary);
        }

        .btn-secondary:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          transform: translateY(-2px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          cursor: pointer;
          color: var(--accent-primary);
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        /* Section Styles */
        .section {
          padding: 8rem 3rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 700px;
          line-height: 1.8;
        }

        /* About Section */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-photo {
          width: 250px;
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          border: 3px solid var(--accent-primary);
          box-shadow: 0 20px 60px rgba(0, 255, 136, 0.2);
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease 0.3s both;
        }

        .about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: var(--text-secondary);
        }

        .about-text strong {
          color: var(--accent-primary);
          font-weight: 600;
        }

        .contact-info {
          background: var(--bg-secondary);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
        }

        .profile-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 2rem;
          display: block;
          border: 3px solid var(--accent-primary);
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          color: var(--accent-primary);
          transform: translateX(5px);
        }

        .contact-item svg {
          color: var(--accent-primary);
        }

        .contact-item a {
          color: inherit;
          text-decoration: none;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 255, 136, 0.2);
        }

        .social-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border: 1px solid rgba(0, 255, 136, 0.2);
          border-radius: 12px;
          color: var(--accent-primary);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          transform: translateY(-5px);
        }

        /* Experience Section */
        .experience-grid {
          display: grid;
          gap: 3rem;
        }

        .experience-card {
          background: var(--bg-secondary);
          border: 1px solid rgba(0, 255, 136, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .experience-card:hover::before {
          transform: scaleY(1);
        }

        .experience-card:hover {
          border-color: rgba(0, 255, 136, 0.3);
          transform: translateX(10px);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .experience-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .experience-company {
          color: var(--accent-primary);
          font-weight: 500;
        }

        .experience-period {
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          color: var(--text-muted);
          padding: 0.5rem 1rem;
          background: var(--bg-tertiary);
          border-radius: 8px;
        }

        .experience-points {
          list-style: none;
          display: grid;
          gap: 1rem;
        }

        .experience-point {
          padding-left: 2rem;
          position: relative;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .experience-point::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-size: 1.2rem;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-secondary);
          border: 1px solid rgba(0, 255, 136, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 20px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
        }

        .project-card:hover::after {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: transparent;
        }

        .project-icon {
          width: 60px;
          height: 60px;
          background: var(--bg-tertiary);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--accent-primary);
        }

        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .project-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
          background: var(--bg-tertiary);
          color: var(--accent-primary);
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-tools {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-muted);
          padding-top: 1rem;
          border-top: 1px solid rgba(0, 255, 136, 0.1);
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-secondary);
          border: 1px solid rgba(0, 255, 136, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          border-color: rgba(0, 255, 136, 0.3);
          transform: translateY(-5px);
        }

        .skill-category-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .skill-list {
          display: grid;
          gap: 0.75rem;
        }

        .skill-item {
          color: var(--text-secondary);
          padding: 0.75rem 1rem;
          background: var(--bg-tertiary);
          border-radius: 10px;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .skill-item:hover {
          background: var(--bg-primary);
          color: var(--accent-primary);
          transform: translateX(5px);
        }

        /* Education Section */
        .education-grid {
          display: grid;
          gap: 2.5rem;
        }

        .education-card {
          background: var(--bg-secondary);
          border: 1px solid rgba(0, 255, 136, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          border-left: 4px solid var(--accent-primary);
        }

        .education-degree {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .education-school {
          font-size: 1.1rem;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }

        .education-details {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .education-courses {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0, 255, 136, 0.1);
        }

        .education-courses-title {
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .education-courses-list {
          color: var(--text-muted);
          line-height: 1.8;
        }

        /* Certifications */
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .certification-card {
          background: var(--bg-secondary);
          border: 1px solid rgba(0, 255, 136, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: start;
          gap: 1rem;
        }

        .certification-card:hover {
          border-color: rgba(0, 255, 136, 0.3);
          transform: translateY(-3px);
        }

        .certification-icon {
          width: 40px;
          height: 40px;
          background: var(--bg-tertiary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--accent-primary);
        }

        .certification-content {
          flex: 1;
        }

        .certification-title {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
        }

        .certification-org {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Footer */
        .footer {
          background: var(--bg-secondary);
          padding: 3rem;
          text-align: center;
          border-top: 1px solid rgba(0, 255, 136, 0.1);
        }

        .footer-text {
          font-family: 'Space Mono', monospace;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-text span {
          color: var(--accent-primary);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav {
            padding: 1rem 1.5rem;
          }

          .nav-links {
            display: none;
          }

          .hero,
          .section {
            padding: 4rem 1.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .projects-grid,
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-logo">ASP</div>
          <ul className="nav-links">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications'].map((item) => (
              <li
                key={item}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-label">⚡ Cybersecurity Professional</div>
          <h1 className="hero-title">Anand Samuel Paul</h1>
          <p className="hero-subtitle">Penetration Tester · Digital Forensics · Offensive Security</p>
          <p className="hero-description">
            MSc Cybersecurity graduate specializing in threat analysis and offensive security research. 
            Demonstrated expertise in IoT penetration testing, malware reverse engineering, and AI application forensics. 
            Passionate about automated threat detection and security-first development.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('about')}>
              View Work <ChevronDown size={16} />
            </button>
            <button className="btn btn-secondary">
              <Mail size={16} /> Get In Touch
            </button>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-header">
          <div className="section-label">— Introduction</div>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p style={{ marginBottom: '1.5rem' }}>
              I'm a <strong>Cybersecurity Engineering graduate</strong> from the University of Birmingham with a 
              strong foundation in offensive security, digital forensics, and threat analysis. My work spans 
              from reverse-engineering malware to developing forensic methodologies for AI applications.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              During my academic journey, I've conducted penetration tests on IoT devices (Amazon Echo Dot), 
              analyzed Windows ransomware, and pioneered forensic workflows for modern AI chat applications. 
              I combine technical depth with hands-on experience in both <strong>security research</strong> and 
              <strong>full-stack development</strong>.
            </p>
            <p>
              Currently seeking opportunities in <strong>SOC operations, incident response, and penetration testing</strong> 
              where I can apply my analytical mindset and passion for offensive security to protect critical systems.
            </p>
          </div>
          <div className="contact-info">
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'Syne, sans-serif', fontSize: '1.3rem' }}>
              Contact Information
            </h3>
            <div className="contact-item">
              <Phone size={20} />
              <span>+44 7741 017681</span>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <a href="mailto:samuel5452000@gmail.com">samuel5452000@gmail.com</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/anand-samuel-paul-salomon-soundaradass-53a42317b/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/anandsamuelpaul" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-header">
          <div className="section-label">— Career</div>
          <h2 className="section-title">Work Experience</h2>
        </div>
        <div className="experience-grid">
          {experience.map((job, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{job.title}</h3>
                  <div className="experience-company">{job.company}</div>
                </div>
                <div className="experience-period">{job.period}</div>
              </div>
              <ul className="experience-points">
                {job.points.map((point, i) => (
                  <li key={i} className="experience-point">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-header">
          <div className="section-label">— Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A selection of security research and technical projects demonstrating hands-on expertise 
            in penetration testing, malware analysis, and digital forensics.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                <Shield size={28} />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-tools">
                <strong>Tools:</strong> {project.tools}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-header">
          <div className="section-label">— Expertise</div>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">
                {index === 0 && <Shield size={20} />}
                {index === 1 && <Code size={20} />}
                {index === 2 && <Terminal size={20} />}
                {index === 3 && <Briefcase size={20} />}
                {category}
              </h3>
              <div className="skill-list">
                {items.map((skill, i) => (
                  <div key={i} className="skill-item">{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-header">
          <div className="section-label">— Academic Background</div>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-grid">
          <div className="education-card">
            <h3 className="education-degree">MSc Cyber Security Engineering</h3>
            <div className="education-school">The University of Birmingham, United Kingdom</div>
            <div className="education-details">
              <span>Merit Class</span>
              <span>Sep 2024 – Sep 2025</span>
            </div>
            <div className="education-courses">
              <div className="education-courses-title">Relevant Courses:</div>
              <div className="education-courses-list">
                Network Security & Cryptography • Forensics, Malware & Penetration Testing • 
                Secure Software and Hardware Systems • Designing & Managing Secure Systems • 
                Dependable & Distributed Systems • Intelligent Data Analysis
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 255, 136, 0.1)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              <strong>Dissertation:</strong> Forensic analysis methodology for modern AI applications
            </div>
          </div>

          <div className="education-card">
            <h3 className="education-degree">B.Tech Computer Science and Engineering</h3>
            <div className="education-school">Dr. MGR Education and Research Institute, India</div>
            <div className="education-details">
              <span>CGPA: 8.80/10 (First Class Honours)</span>
              <span>Jun 2018 – Aug 2022</span>
            </div>
            <div className="education-courses">
              <div className="education-courses-title">Relevant Courses:</div>
              <div className="education-courses-list">
                Information Security • Operating Systems • Computer Networks • 
                Data Structures & Algorithms • Database Management Systems • 
                Web Technologies • Artificial Intelligence • System Software
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 255, 136, 0.1)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              <strong>Final Year Project:</strong> Secure File Storage on Cloud Using Hybrid Cryptography
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-header">
          <div className="section-label">— Credentials</div>
          <h2 className="section-title">Certifications & Training</h2>
        </div>
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">CompTIA Security+ Bootcamp</div>
              <div className="certification-org">Zero To Mastery</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">CompTIA Network+ Bootcamp</div>
              <div className="certification-org">Zero To Mastery</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">Advanced Ethical Hacking Bootcamp</div>
              <div className="certification-org">Zero To Mastery</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">Python Developer</div>
              <div className="certification-org">Zero To Mastery</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">C++ Object-Oriented Programming</div>
              <div className="certification-org">Zero To Mastery</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">Data Structures & Algorithms</div>
              <div className="certification-org">Zero To Mastery</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">System Design + Architecture</div>
              <div className="certification-org">Zero To Mastery</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">Machine Learning & Deep Learning</div>
              <div className="certification-org">Zero To Mastery</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">Ethical Hacking Workshop</div>
              <div className="certification-org">IIT Madras</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">AI Bootcamp</div>
              <div className="certification-org">IBM Watson</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">Full-Stack Development</div>
              <div className="certification-org">Besant Technologies</div>
            </div>
          </div>
          <div className="certification-card">
            <div className="certification-icon"><Award size={20} /></div>
            <div className="certification-content">
              <div className="certification-title">Lean Six Sigma White Belt</div>
              <div className="certification-org">CSSC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          Designed & Built by <span>Anand Samuel Paul</span> • 2025
        </p>
        <p className="footer-text" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
          Cybersecurity Professional • Penetration Tester • Digital Forensics
        </p>
      </footer>
    </div>
  );
}
