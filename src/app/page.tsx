import ProfilePhoto from "@/components/ProfilePhoto";
import ScrollAnimator from "@/components/ScrollAnimator";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <ScrollAnimator />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <header className="topbar glass-panel">
        <a href="#home" className="brand-mark">TJ</a>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero grid-shell">
        <div className="hero-copy glass-panel hero-panel card-lift">
          <p className="eyebrow">Black / White / Glass / Motion</p>
          <h1>{portfolio.personal.name}</h1>
          <p className="hero-role">{portfolio.personal.role}</p>
          <p className="hero-text">{portfolio.personal.tagline}</p>
          <p className="hero-intro">{portfolio.personal.intro}</p>

          <div className="cta-row">
            <a className="button-primary" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="button-secondary" href="#projects">
              Explore Work
            </a>
          </div>

          <div className="hero-meta">
            <span>{portfolio.personal.location}</span>
            <a href={`mailto:${portfolio.personal.email}`}>{portfolio.personal.email}</a>
            <a href={portfolio.personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbital-ring orbital-ring-one" />
          <div className="orbital-ring orbital-ring-two" />
          <ProfilePhoto />
        </div>
      </section>

      <section id="about" data-reveal className="content-section grid-shell section-3d section-about reveal-section">
        <div className="section-orbit orbit-about" />
        <div className="section-heading">
          <p className="eyebrow">Snapshot</p>
          <h2>Focused on AI, design, and building experiences that feel intentional.</h2>
        </div>
        <div className="stats-grid">
          {portfolio.stats.map((stat, index) => (
            <article
              key={stat.label}
              data-reveal
              className="glass-panel stat-card card-lift stat-depth reveal-card"
              style={{ transitionDelay: `${index * 0.12}s`, animationDelay: `${index * 0.18}s` }}
            >
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" data-reveal className="content-section timeline-shell section-3d section-journey reveal-section">
        <div className="section-orbit orbit-journey" />
        <div className="section-heading narrow">
          <p className="eyebrow">Journey</p>
          <h2>Education, internships, and leadership shaped into one clear story.</h2>
        </div>

        <div className="timeline-grid">
          <div data-reveal className="glass-panel timeline-column card-lift timeline-depth timeline-left reveal-card reveal-left">
            <div className="column-title">
              <span>01</span>
              <h3>Education</h3>
            </div>
            {portfolio.education.map((item) => (
              <article key={item.school} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h4>{item.school}</h4>
                <p>{item.degree}</p>
                <small>{item.meta} · {item.location}</small>
              </article>
            ))}
          </div>

          <div data-reveal className="glass-panel timeline-column card-lift timeline-depth timeline-right reveal-card reveal-right">
            <div className="column-title">
              <span>02</span>
              <h3>Experience</h3>
            </div>
            {portfolio.experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h4>{item.role}</h4>
                <p>{item.company} · {item.location}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" data-reveal className="content-section section-3d section-projects reveal-section">
        <div className="section-orbit orbit-projects" />
        <div className="section-heading">
          <p className="eyebrow">Selected Projects</p>
          <h2>Projects from your resume, re-framed as polished case-study cards.</h2>
        </div>
        <div className="projects-grid">
          {portfolio.projects.map((project, idx) => (
            <article
              key={project.name}
              data-reveal
              className="glass-panel project-card card-tilt project-depth reveal-card"
              style={{ transitionDelay: `${idx * 0.14}s`, animationDelay: `${idx * 0.16}s` }}
            >
              <div className="project-glow" />
              <div className="project-topline">
                <span>{`0${idx + 1}`}</span>
                <p>{project.type}</p>
              </div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ul>
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" data-reveal className="content-section grid-shell skills-layout section-3d section-skills reveal-section">
        <div className="section-orbit orbit-skills" />
        <div data-reveal className="glass-panel skills-panel card-lift skills-depth reveal-card reveal-left">
          <div className="section-heading left-align">
            <p className="eyebrow">Capabilities</p>
            <h2>Technical range with a design eye and execution mindset.</h2>
          </div>
          <div className="skill-groups">
            {portfolio.skills.map((group, index) => (
              <div
                key={group.title}
                data-reveal
                className="skill-group skill-float reveal-card"
                style={{ transitionDelay: `${index * 0.1}s`, animationDelay: `${index * 0.22}s` }}
              >
                <h3>{group.title}</h3>
                <div className="tag-row soft-wrap">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="glass-panel side-panel card-lift leadership-depth reveal-card reveal-right">
          <p className="eyebrow">Leadership</p>
          {portfolio.leadership.map((item) => (
            <article key={item.title} className="mini-block">
              <small>{item.period}</small>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="content-section grid-shell certifications-shell section-3d section-certs reveal-section">
        <div className="section-orbit orbit-certs" />
        <div data-reveal className="glass-panel certifications-panel card-lift cert-depth reveal-card">
          <p className="eyebrow">Certifications</p>
          <div className="cert-list">
            {portfolio.certifications.map((cert) => (
              <div key={cert} className="cert-row">
                <span className="cert-dot" />
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" data-reveal className="content-section contact-shell section-3d section-contact reveal-section">
        <div className="section-orbit orbit-contact" />
        <div data-reveal className="glass-panel contact-panel card-lift contact-depth reveal-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Available for internships, collaborations, and ambitious product ideas.</h2>
            <p className="contact-note">{portfolio.personal.photoHint}</p>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${portfolio.personal.email}`}>{portfolio.personal.email}</a>
            <a href={`tel:${portfolio.personal.phone}`}>{portfolio.personal.phone}</a>
            <a href={portfolio.personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={portfolio.personal.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}
