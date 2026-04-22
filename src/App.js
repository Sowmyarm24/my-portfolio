import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLinkedin, FiMail, FiPhone, FiExternalLink, FiGithub,
  FiCode, FiServer, FiDatabase, FiTool, FiMenu, FiX,
  FiArrowRight, FiAward, FiBookOpen, FiLayers
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
    Frontend: {
      icon: <FiCode />,
      color: "violet",
      items: ["React.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "Material UI", "Bootstrap", "HTML5", "CSS3", "Redux Toolkit", "React Query"],
    },
    Backend: {
      icon: <FiServer />,
      color: "blue",
      items: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC", "MVC Architecture"],
    },
    Database: {
      icon: <FiDatabase />,
      color: "emerald",
      items: ["MySQL", "PostgreSQL", "MongoDB", "JPA/Hibernate"],
    },
    "Tools & DevOps": {
      icon: <FiTool />,
      color: "amber",
      items: ["Git", "Docker", "Maven", "Webpack", "Vite", "Postman", "Jest", "React Testing Library"],
    },
  };

  const projects = [
    {
      title: "Product Analytics Dashboard",
      description:
        "A full-stack SaaS application featuring dynamic dashboards, interactive charts, and real-time user analytics. Optimized backend queries improved response time by 30%, and the app is containerized with Docker.",
      tech: ["React.js", "Spring Boot", "MySQL", "Redux Toolkit", "Docker", "REST APIs"],
      type: "SaaS · Full Stack",
      github: "https://github.com/Sowmyarm24",
      highlights: ["JWT Authentication", "30% faster queries", "Docker deployment"],
    },
    {
      title: "Content Management System",
      description:
        "A multi-tenant CMS with role-based content management, drag-and-drop page builder, real-time preview, and a secure multi-stage publishing workflow with approval stages.",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      type: "CMS · Full Stack",
      github: "https://github.com/Sowmyarm24",
      highlights: ["Multi-tenant architecture", "Drag & Drop builder", "Approval workflow"],
    },
  ];

  const stats = [
    { value: "3+", label: "Years experience" },
    { value: "40%", label: "Performance boost" },
    { value: "2", label: "Major projects" },
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
            <span className="badge-dot" /> Available for Frontend roles
          </motion.div>
          <motion.div variants={fadeUp} className="avatar-wrap">
            <div className="avatar">SR</div>
          </motion.div>
          <motion.h1 variants={fadeUp} className="hero-title">Sowmya R M</motion.h1>
          <motion.p variants={fadeUp} className="hero-role">Full Stack Engineer · Frontend Specialist</motion.p>
          <motion.p variants={fadeUp} className="hero-sub">
            3 years crafting scalable, performant web applications with
            <strong> React.js</strong>, <strong>Spring Boot</strong> &amp; <strong>Node.js</strong>.
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
            <a href="https://linkedin.com/in/sowmya-r-m-0aaa283b2" target="_blank" rel="noreferrer" className="social-icon"><FiLinkedin size={18} /></a>
            <a href="https://github.com/Sowmyarm24" target="_blank" rel="noreferrer" className="social-icon"><FiGithub size={18} /></a>
            <a href="mailto:sowmyarm024@gmail.com" className="social-icon"><FiMail size={18} /></a>
          </motion.div>
        </motion.div>
        <motion.div className="stats-bar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
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
                <p>I'm a <strong>Full Stack Engineer at Tata Elxsi</strong>, Bengaluru, with 3 years of experience building enterprise-grade web applications. While I'm comfortable across the full stack, my passion lies in crafting <strong>exceptional frontend experiences</strong> — pixel-perfect UIs, smooth interactions, and highly optimised React applications.</p>
                <p>I've improved application performance by <strong>up to 40%</strong> through lazy loading, code splitting, and query optimisation. I thrive in Agile environments, care deeply about clean code, and enjoy collaborating with cross-functional teams to ship great products.</p>
                <p>I hold a <strong>B.E. in Electronics &amp; Communication</strong> from GM Institute of Technology with a CGPA of <strong>8.97/10</strong>, and I've been recognised with the Spotlight Award at Tata Elxsi.</p>
                <div className="about-tags">
                  {["React.js", "JavaScript", "TypeScript", "Node.js", "Redux Toolkit", "Axios","MySQL"].map(t => (
                    <span key={t} className="about-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="about-cards">
                {[
                  { icon: <FiAward />, color: "amber", title: "Spotlight Award", sub: "Tata Elxsi – outstanding contribution" },
                  { icon: <FiAward />, color: "violet", title: "Customer Appreciation Award", sub: "Recognised for exceptional client delivery" },
                  { icon: <FiBookOpen />, color: "blue", title: "Angular – The Complete Guide", sub: "Udemy Certification" },
                  { icon: <FiCode />, color: "emerald", title: "CGPA 8.97 / 10", sub: "B.E. Electronics & Communication · 2022" },
                ].map((card, i) => (
                  <div className={`info-card`} key={i}>
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
            <motion.p variants={fadeUp} className="section-sub">A focused set of technologies I use daily to build production-grade applications.</motion.p>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, data]) => (
                <motion.div key={category} variants={fadeUp} className={`skill-card color-${data.color}`}>
                  <div className="skill-card-header">
                    <span className="skill-icon">{data.icon}</span>
                    <h3>{category}</h3>
                  </div>
                  <div className="skill-tags">
                    {data.items.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
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
                      <h3>Full Stack Engineer</h3>
                      <p className="company">Tata Elxsi · Bengaluru, India</p>
                    </div>
                    <div className="timeline-right">
                      <span className="period">2023 – Present</span>
                      <span className="current-badge">Current</span>
                    </div>
                  </div>
                  <ul className="exp-points">
                    {[
                      "Developed scalable enterprise web applications using React.js, Java (Spring Boot), and Node.js.",
                      "Designed and implemented RESTful APIs for CRUD operations and complex business workflows.",
                      "Integrated MySQL/PostgreSQL databases with backend services using JPA/Hibernate.",
                      "Implemented JWT-based authentication and role-based authorization (RBAC).",
                      "Built reusable, accessible frontend components in React.js + TypeScript following component-driven architecture.",
                      "Managed client and server state using Redux Toolkit and React Query.",
                      "Improved application performance by ~40% using lazy loading, optimised queries, and efficient API handling.",
                      "Participated in API design discussions, database schema design, and peer code reviews.",
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
            <motion.p variants={fadeUp} className="section-sub">End-to-end applications built with production quality in mind.</motion.p>
            <div className="projects-grid">
              {projects.map(project => (
                <motion.div key={project.title} variants={fadeUp} className="project-card">
                  <div className="project-top">
                    <span className="project-type">{project.type}</span>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-link"><FiGithub size={16} /></a>
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-link"><FiExternalLink size={16} /></a>}
                    </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-highlights">
                    {project.highlights.map(h => <span key={h} className="highlight-tag">✓ {h}</span>)}
                  </div>
                  <div className="project-tech">
                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
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
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="contact-inner">
            <motion.div variants={fadeUp} className="section-label centered"><FiMail size={14} /> Contact</motion.div>
            <motion.h2 variants={fadeUp} className="section-title centered">Let's work together</motion.h2>
            <motion.p variants={fadeUp} className="section-sub centered">
              I'm actively looking for <strong>frontend-focused</strong> roles. If you have an exciting opportunity or just want to say hi, my inbox is always open.
            </motion.p>
            <motion.div variants={fadeUp} className="contact-cards">
              {[
                { icon: <FiMail size={22} />, label: "Email", value: "sowmyarm024@gmail.com", href: "mailto:sowmyarm024@gmail.com" },
                { icon: <FiPhone size={22} />, label: "Phone", value: "+91 88618 83324", href: "tel:+918861883324" },
                { icon: <FiLinkedin size={22} />, label: "LinkedIn", value: "sowmya-r-m", href: "https://linkedin.com/in/sowmya-r-m-0aaa283b2" },
                { icon: <FiGithub size={22} />, label: "GitHub", value: "github.com/sowmya-rm", href: "https://github.com/Sowmyarm24" },
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
          <p>Designed &amp; built by Sowmya R M · {new Date().getFullYear()}</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/sowmya-r-m-0aaa283b2" target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href="https://github.com/Sowmyarm24" target="_blank" rel="noreferrer"><FiGithub /></a>
            <a href="mailto:sowmyarm024@gmail.com"><FiMail /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}