import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLinkedin, FiMail, FiPhone, FiExternalLink, FiGithub,
  FiCode, FiServer, FiDatabase, FiTool, FiMenu, FiX,
  FiArrowRight, FiAward, FiBookOpen, FiLayers, FiBox,
  FiZap, FiShield, FiGlobe
} from "react-icons/fi";
import "./App.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const navLinks = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    "Frontend": {
      icon: <FiCode />,
      color: "violet",
      items: [
        "React.js (v18+)", "JavaScript (ES6+)", "TypeScript",
        "Redux Toolkit (RTK Query)", "React Query", "Context API",
        "Tailwind CSS", "Material UI (MUI v5)", "SCSS/SASS",
        "Styled-Components", "React Hook Form", "React Router v6",
      ],
    },
    "3D & Visual": {
      icon: <FiBox />,
      color: "emerald",
      items: [
        "Three.js", "WebGL", "React Three Fiber",
        "Unity WebGL (React bridge)", "3D Model Rendering",
        "Interactive Visualisation",
      ],
    },
    "Backend & Data": {
      icon: <FiServer />,
      color: "blue",
      items: [
        "Java", "Spring Boot (basics)", "MySQL",
        "REST API Design", "GraphQL (Apollo Client)",
        "WebSockets", "SCORM / xAPI", "Axios",
      ],
    },
    "Tools & DevOps": {
      icon: <FiTool />,
      color: "amber",
      items: [
        "AWS (S3, CloudFront, EC2)", "GitHub Actions (CI/CD)",
        "Docker", "Vite", "Webpack", "Storybook",
        "Jest", "React Testing Library", "Postman", "Figma",
      ],
    },
  };

  const projects = [
    {
      title: "Air India Experience Centre",
      subtitle: "Booking & Slot Management System",
      description:
        "Enterprise slot reservation platform for Air India handling three booking types — individual walk-in, corporate bulk employee booking, and VIP last-minute bookings that override fully occupied slots via priority business logic. Features a real-time availability calendar, QR code generation, and automated email confirmation.",
      tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "REST API", "QR Code", "AWS S3/CloudFront"],
      type: "Enterprise · Aviation",
      badge: "Air India",
      highlights: [
        "3 booking types with priority override logic",
        "Real-time slot availability calendar",
        "QR code + automated email confirmation",
        "Corporate bulk booking with conflict resolution",
      ],
      icon: <FiGlobe />,
      color: "blue",
    },
    {
      title: "Digital Asset Management Platform",
      subtitle: "3D & Multi-Media · International Client",
      description:
        "Secure browser-based DMS for a confidential Japanese enterprise client — deployed on their private on-premise server with isolated MySQL database and no cloud dependency. Integrated Three.js for real-time 3D model rendering alongside video, audio, GIF, and image management, with granular role-based access control.",
      tech: ["React.js", "JavaScript", "Three.js", "WebGL", "Redux Toolkit", "RBAC", "SCSS", "MySQL", "On-premise"],
      type: "Enterprise · International Client",
      badge: "Confidential · Japan",
      highlights: [
        "Three.js real-time 3D rendering in browser",
        "Supports 3D, video, audio, GIF, image assets",
        "Granular RBAC — per role, asset type, operation",
        "On-premise deployment, zero cloud dependency",
      ],
      icon: <FiBox />,
      color: "emerald",
    },
    {
      title: "E-Learning & LMS Platform",
      subtitle: "SCORM / xAPI Integration",
      description:
        "Full-featured Learning Management System built from scratch with Admin, Supervisor, and Trainee roles. Integrated Articulate SCORM/xAPI courses by writing custom JavaScript inside the Articulate publishing layer to pass real-time learner data to React. Automated assessment engine, PDF certificate generation with unique verification IDs, and deadline reminder system.",
      tech: ["React.js", "JavaScript", "Articulate/SCORM", "Redux Toolkit", "React Hook Form", "REST API", "MySQL"],
      type: "Enterprise · E-Learning",
      badge: "LMS",
      highlights: [
        "Custom SCORM/xAPI ↔ React live data bridge",
        "3-tier RBAC with per-user permission toggles",
        "Auto-generated verified PDF certificates",
        "Deadline reminders at 7, 3, 1 day before due date",
      ],
      icon: <FiBookOpen />,
      color: "amber",
    },
    {
      title: "JioBP 3D Product Viewer",
      subtitle: "React + Unity WebGL Integration",
      description:
        "Interactive 3D product review platform for JioBP — built the complete React application layer with a bidirectional communication bridge between React and a Unity WebGL runtime. Managed all product state, annotation triggers, video/audio playback, and part-level highlight events from the React side via ReactUnityWebGL.",
      tech: ["React.js", "JavaScript", "Unity WebGL", "ReactUnityWebGL", "Tailwind CSS", "REST API", "AWS S3"],
      type: "Enterprise · Energy",
      badge: "JioBP",
      highlights: [
        "React ↔ Unity WebGL bidirectional bridge",
        "3D product annotation and part highlighting",
        "Video, audio, voiceover orchestration from React",
        "Dynamic product config without Unity recompilation",
      ],
      icon: <FiZap />,
      color: "violet",
    },
  ];

  const stats = [
    { value: "3+", label: "Years experience" },
    { value: "40%", label: "Latency reduced" },
    { value: "4", label: "Enterprise projects" },
    { value: "2", label: "Awards won" },
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Sowmya<span className="logo-dot">.</span>
          </span>
          <div className="nav-links desktop">
            {navLinks.map(link => (
              <button
                key={link}
                className={`nav-link ${activeSection === link.toLowerCase() ? "active" : ""}`}
                onClick={() => handleNavClick(link)}
              >
                {link}
              </button>
            ))}
            <a href="mailto:sowmyarm024@gmail.com" className="nav-cta">Hire Me</a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map(link => (
                <button key={link} className="mobile-link" onClick={() => handleNavClick(link)}>
                  {link}
                </button>
              ))}
              <a href="mailto:sowmyarm024@gmail.com" className="mobile-cta">Hire Me</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="hero-blob blob-1" />
          <div className="hero-blob blob-2" />
        </div>
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="hero-badge">
            <span className="badge-dot" /> Open to Frontend Engineer roles
          </motion.div>
          <motion.div variants={fadeUp} className="avatar-wrap">
            <div className="avatar">SR</div>
          </motion.div>
          <motion.h1 variants={fadeUp} className="hero-title">Sowmya R M</motion.h1>
          <motion.p variants={fadeUp} className="hero-role">Frontend Engineer · React.js Specialist</motion.p>
          <motion.p variants={fadeUp} className="hero-sub">
            3 years building enterprise-grade web applications at{" "}
            <strong>Tata Elxsi</strong> for clients including{" "}
            <strong>Air India</strong> and <strong>JioBP</strong>.
            Specialist in <strong>React.js</strong>, <strong>Three.js</strong>, and complex UI architecture.
            Based in Bengaluru, India.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <button className="btn primary" onClick={() => handleNavClick("Projects")}>
              View Projects <FiArrowRight />
            </button>
            <button className="btn outline" onClick={() => handleNavClick("Contact")}>
              Get In Touch
            </button>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-socials">
            <a href="https://linkedin.com/in/sowmya-r-m-0aaa283b2" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
            <a href="https://github.com/Sowmyarm24" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub"><FiGithub size={18} /></a>
            <a href="mailto:sowmyarm024@gmail.com" className="social-icon" aria-label="Email"><FiMail size={18} /></a>
          </motion.div>
        </motion.div>
        <motion.div
          className="stats-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {stats.map(s => (
            <div className="stat-item" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-label"><FiLayers size={14} /> About me</motion.div>
            <motion.h2 variants={fadeUp} className="section-title">Who I am</motion.h2>
            <div className="about-grid">
              <motion.div variants={fadeUp} className="about-text">
                <p>
                  I'm a <strong>Frontend Engineer at Tata Elxsi</strong>, Bengaluru, with 3 years of experience
                  delivering production-grade web applications for enterprise clients. My core is{" "}
                  <strong>React.js and JavaScript</strong>, with production experience in TypeScript,
                  Three.js-based 3D rendering, Unity WebGL integration, and SCORM-based e-learning systems.
                </p>
                <p>
                  I've worked on genuinely varied and technically complex projects — a slot booking system for{" "}
                  <strong>Air India</strong>, a 3D product viewer for <strong>JioBP</strong>, a secure digital
                  asset management platform deployed on a private server for a{" "}
                  <strong>confidential Japanese enterprise</strong>, and a full LMS with Articulate/SCORM integration.
                </p>
                <p>
                  I care about performance, accessibility, and clean architecture. I've reduced data-fetch
                  latency by <strong>40%</strong>, improved perceived load time by <strong>45%</strong>, and
                  mentored junior developers on React and TypeScript best practices. Recognised with the{" "}
                  <strong>Spotlight Award</strong> and <strong>Customer Appreciation Award</strong> at Tata Elxsi.
                </p>
                <div className="about-tags">
                  {[
                    "React.js", "JavaScript", "TypeScript", "Three.js",
                    "Redux Toolkit", "SCORM/xAPI", "AWS", "Tailwind CSS",
                  ].map(t => (
                    <span key={t} className="about-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="about-cards">
                {[
                  {
                    icon: <FiAward />, color: "amber",
                    title: "Spotlight Award",
                    sub: "Tata Elxsi — technical excellence & delivery impact",
                  },
                  {
                    icon: <FiAward />, color: "violet",
                    title: "Customer Appreciation Award",
                    sub: "Tata Elxsi — outstanding client-facing contributions",
                  },
                  {
                    icon: <FiShield />, color: "blue",
                    title: "AWS Cloud Practitioner",
                    sub: "Amazon Web Services Certification",
                  },
                  {
                    icon: <FiCode />, color: "emerald",
                    title: "CGPA 8.97 / 10",
                    sub: "B.E. Electronics & Communication · 2022",
                  },
                ].map((card, i) => (
                  <div className="info-card" key={i}>
                    <span className={`info-icon ${card.color}`}>{card.icon}</span>
                    <div>
                      <h4>{card.title}</h4>
                      <p>{card.sub}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section" id="skills">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-label"><FiCode size={14} /> Technical skills</motion.div>
            <motion.h2 variants={fadeUp} className="section-title">What I work with</motion.h2>
            <motion.p variants={fadeUp} className="section-sub">
              A focused set of technologies I use daily to build production-grade enterprise applications.
            </motion.p>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, data]) => (
                <motion.div key={category} variants={fadeUp} className={`skill-card color-${data.color}`}>
                  <div className="skill-card-header">
                    <span className="skill-icon">{data.icon}</span>
                    <h3>{category}</h3>
                  </div>
                  <div className="skill-tags">
                    {data.items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="section experience-section" id="experience">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-label"><FiLayers size={14} /> Experience</motion.div>
            <motion.h2 variants={fadeUp} className="section-title">Work history</motion.h2>
            <motion.div variants={fadeUp} className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3>Frontend Engineer</h3>
                      <p className="company">Tata Elxsi · Bengaluru, India</p>
                    </div>
                    <div className="timeline-right">
                      <span className="period">Jan 2023 – Present</span>
                      <span className="current-badge">Current</span>
                    </div>
                  </div>
                  <ul className="exp-points">
                    {[
                      "Delivered frontend development across 4 enterprise client projects — Air India, JioBP, and international clients — spanning booking systems, digital asset management, 3D product visualisation, and e-learning platforms.",
                      "Integrated Three.js with React.js to power real-time in-browser 3D model rendering across a multi-content digital asset management platform supporting 3D, video, audio, GIF, and image assets.",
                      "Built a React-to-Unity WebGL communication bridge for JioBP's 3D product viewer — managing bidirectional data passing between React and the Unity WebGL runtime via ReactUnityWebGL.",
                      "Designed a complex slot booking and calendar system for Air India handling individual, corporate bulk, and VIP-priority bookings with QR code generation and automated email confirmation.",
                      "Built a full LMS with Articulate SCORM/xAPI integration — wrote custom JavaScript inside the Articulate publishing layer to pass real-time learner data between CBT courses and React.",
                      "Reduced client-side data-fetch latency by 40% using Redux Toolkit (RTK Query) with tag-based cache invalidation and optimistic updates across 8 dashboard modules.",
                      "Improved perceived load time by 45% via lazy-loaded routing with React.Suspense, skeleton screens, and react-window virtualisation — achieving sub-2s LCP and 90+ Lighthouse scores.",
                      "Configured AWS S3 + CloudFront for static delivery; managed on-premise deployments for confidential enterprise clients with isolated database environments.",
                      "Collaborated with Java Spring Boot backend teams on REST API design — reduced payload sizes by 30% by moving aggregations to the database layer.",
                      "Maintained >80% Jest + React Testing Library test coverage; published 50+ reusable components via Storybook adopted across multiple product teams.",
                      "Mentored 2 junior developers on React.js, JavaScript, and TypeScript best practices through structured code reviews and pair programming.",
                    ].map((point, j) => (
                      <li key={j}><span className="point-dot" />{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section projects-section" id="projects">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-label"><FiLayers size={14} /> Projects</motion.div>
            <motion.h2 variants={fadeUp} className="section-title">What I've built</motion.h2>
            <motion.p variants={fadeUp} className="section-sub">
              Enterprise-grade applications built at Tata Elxsi for real clients with complex requirements.
            </motion.p>
            <div className="projects-grid">
              {projects.map(project => (
                <motion.div key={project.title} variants={fadeUp} className={`project-card project-color-${project.color}`}>
                  <div className="project-top">
                    <div className="project-top-left">
                      <span className={`project-icon-wrap color-${project.color}`}>{project.icon}</span>
                      <span className="project-type">{project.type}</span>
                    </div>
                    <span className="project-badge">{project.badge}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-highlights">
                    {project.highlights.map(h => (
                      <span key={h} className="highlight-tag">✓ {h}</span>
                    ))}
                  </div>
                  <div className="project-tech">
                    {project.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="section education-section" id="education">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-label"><FiBookOpen size={14} /> Education</motion.div>
            <motion.h2 variants={fadeUp} className="section-title">Academic background</motion.h2>
            <motion.div variants={fadeUp} className="edu-card">
              <div className="edu-icon-wrap"><FiBookOpen size={24} /></div>
              <div className="edu-content">
                <h3>Bachelor of Engineering</h3>
                <p className="edu-field">Electronics &amp; Communication Engineering</p>
                <p className="edu-school">GM Institute of Technology, India</p>
                <p className="edu-period">2018 – 2022</p>
                <span className="cgpa-badge">CGPA: 8.97 / 10</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="cert-grid">
              {[
                { title: "Java Full Stack Development", org: "KodNext" },
                { title: "React – The Complete Guide", org: "Udemy" },
                { title: "Angular – The Complete Guide", org: "Udemy" },
                { title: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services" },
              ].map((cert, i) => (
                <div className="cert-card" key={i}>
                  <FiAward size={16} />
                  <div>
                    <p className="cert-title">{cert.title}</p>
                    <p className="cert-org">{cert.org}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="contact-inner"
          >
            <motion.div variants={fadeUp} className="section-label centered"><FiMail size={14} /> Contact</motion.div>
            <motion.h2 variants={fadeUp} className="section-title centered">Let's work together</motion.h2>
            <motion.p variants={fadeUp} className="section-sub centered">
              I'm actively looking for <strong>senior frontend engineer</strong> roles. If you have an
              exciting opportunity or just want to say hi, my inbox is always open.
            </motion.p>
            <motion.div variants={fadeUp} className="contact-cards">
              {[
                { icon: <FiMail size={22} />, label: "Email", value: "sowmyarm024@gmail.com", href: "mailto:sowmyarm024@gmail.com" },
                { icon: <FiPhone size={22} />, label: "Phone", value: "+91 88618 83324", href: "tel:+918861883324" },
                { icon: <FiLinkedin size={22} />, label: "LinkedIn", value: "sowmya-r-m", href: "https://linkedin.com/in/sowmya-r-m-0aaa283b2" },
                { icon: <FiGithub size={22} />, label: "GitHub", value: "Sowmyarm24", href: "https://github.com/Sowmyarm24" },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-card">
                  <span className="contact-card-icon">{c.icon}</span>
                  <div>
                    <p className="contact-card-label">{c.label}</p>
                    <p className="contact-card-value">{c.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="contact-cta">
              <a href="mailto:sowmyarm024@gmail.com" className="btn primary large">
                Send me an email <FiArrowRight />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="logo">Sowmya<span className="logo-dot">.</span></span>
          <p>Frontend Engineer · React.js Specialist · Bengaluru, India · {new Date().getFullYear()}</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/sowmya-r-m-0aaa283b2" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://github.com/Sowmyarm24" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="mailto:sowmyarm024@gmail.com" aria-label="Email"><FiMail /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}