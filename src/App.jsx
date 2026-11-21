import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Terminal,
  Ticket,
  Users,
  X,
} from 'lucide-react';
import { achievements, education, experience, profile, projects, skillGroups } from './data';

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Portfolio', 'projects'],
  ['Contact', 'contact'],
];

function SocialLinks({ compact = false }) {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: 'LeetCode', href: profile.leetcode, icon: Code2 },
    { label: 'GeeksforGeeks', href: profile.geeksforgeeks, icon: Terminal },
  ];

  return (
    <div className={`social-links ${compact ? 'social-links--compact' : ''}`} aria-label="Social profiles">
      {links.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
          <Icon size={compact ? 17 : 19} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h2>{title} <span className="gradient-text">{accent}</span></h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const updateActive = () => {
      const marker = window.scrollY + 150;
      let current = 'home';
      navItems.forEach(([, id]) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Venkat home">
          Venkat<span>.</span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const roles = ['Software Engineer', 'Full-Stack Developer', 'AI Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(timer);
    // The role list is static for this component.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          {/* <div className="hero-kicker reveal"><span className="status-dot" /> SOFTWARE DEVELOPER </div> */}
          <h1 className="reveal reveal-delay-1">
            Hi, I'm <span className="name-gradient">Venkat</span>
            <span className="hero-full-name">Venkata Rami Reddy CH</span>
          </h1>
          <div className="role-line reveal reveal-delay-2" aria-live="polite">
            <span className="role-prefix">I am a</span>
            <span className="role-value" key={roleIndex}>{roles[roleIndex]}</span>
            <span className="typing-caret" aria-hidden="true" />
          </div>
          <p className="hero-description reveal reveal-delay-3">
            I build practical web applications, enjoy solving engineering problems, and explore how AI can make software more useful. I'm focused on writing clean code and turning ideas into reliable products.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              Hire me <ArrowUpRight size={18} />
            </a>
            <a className="button button-outline" href="#projects">
              Explore my work <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-bottom reveal reveal-delay-4">
            <SocialLinks compact />
            <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-2">
          <div className="portrait-orbit portrait-orbit-one" />
          <div className="portrait-orbit portrait-orbit-two" />
          <div className="portrait-glow" />
          <div className="portrait-frame">
            {!imageFailed ? (
              <img
                className="portrait-image"
                src={profile.image}
                alt="Portrait of Venkat Ram"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="portrait-fallback"><span>VR</span><small>YOUR PHOTO</small></div>
            )}
            <div className="portrait-shade" />
          </div>
          {/* <div className="visual-tag visual-tag-top"><Sparkles size={15} /> Building with purpose</div> */}
          <div className="visual-tag visual-tag-bottom"><span className="visual-tag-icon"><Code2 size={16} /></span><span><strong>Code. Learn. Build.</strong><small>Driven to learn, Ready to create</small></span></div>
          <div className="visual-coordinate">17°N&nbsp; 78°E</div>
        </div>
      </div>
      <div className="hero-background-word1" aria-hidden="true">SOFTWARE</div>
      <div className="hero-background-word" aria-hidden="true">DEVELOPER</div>
      <div className="hero-bottom-line" />
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title="Curious mind."
          accent="Builder's mindset."
          description="A little context about the person behind the code."
        />
        <div className="about-layout">
          <div className="about-copy reveal">
            <span className="about-mark">“</span>
            <h3>I like understanding how things work — and making them work better.</h3>
            <p>
              I'm a Computer Science graduate from Sathyabama Institute of Science and Technology, currently working at Cognizant as a Programme Analyst Trainee. My interests span full-stack development, problem-solving, cloud technologies, and artificial intelligence.
            </p>
            <p>
              I believe the best way to grow as an engineer is to keep learning, build real things, and stay curious about the details behind good software.
            </p>
            <a className="text-link" href={`mailto:${profile.email}`}>More about working together <ArrowUpRight size={17} /></a>
          </div>
          <div className="about-side reveal reveal-delay-1">
            <div className="about-facts">
              <div className="fact-card"><span className="fact-number">8.19</span><span className="fact-label">Graduation CGPA / 10</span></div>
              <div className="fact-card"><span className="fact-number">2025</span><span className="fact-label">B.E. graduation</span></div>
            </div>
            <div className="education-card">
              <div className="card-topline"><GraduationCap size={19} /><span>EDUCATION</span></div>
              {education.map((item, index) => (
                <div className="education-item" key={item.qualification}>
                  <div className="education-dot" />
                  <div>
                    <h4>{item.qualification}</h4>
                    <p>{item.institution}</p>
                    <div className="education-meta"><span>{item.period}</span><span>{item.result}</span></div>
                  </div>
                  {index !== education.length - 1 && <div className="education-connector" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="WHERE I'VE WORKED"
          title="Experience &"
          accent="growth."
          description="The teams and projects that have helped shape my development journey."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="experience-card reveal" key={item.organization}>
              <div className="timeline-marker"><span>0{index + 1}</span></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <span className="experience-type"><BriefcaseBusiness size={14} /> {index === 0 ? 'PROFESSIONAL EXPERIENCE' : 'INTERNSHIP'}</span>
                    <h3>{item.role}</h3>
                    <p className="experience-org">{item.organization}</p>
                  </div>
                  <span className="period-pill">{item.period}</span>
                </div>
                <p className="card-description">{item.description}</p>
                <div className="tag-list">{item.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="TOOLS OF THE TRADE"
          title="My technical"
          accent="toolkit."
          description="Technologies I've worked with and continue to develop through practical projects."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card reveal" key={group.title}>
              <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><Code2 size={19} /></div>
              <h3>{group.title}</h3>
              <div className="tag-list">{group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="skills-note"><Sparkles size={15} /> I keep this list focused on tools I've studied or used; it isn't a ranking of proficiency.</p>
      </div>
    </section>
  );
}

function ProjectIcon({ type }) {
  if (type === 'building') return <Building2 size={26} strokeWidth={1.5} />;
  if (type === 'users') return <Users size={26} strokeWidth={1.5} />;
  return <Ticket size={26} strokeWidth={1.5} />;
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Things I've"
          accent="built."
          description="A few projects that reflect my interest in solving real-world problems with software."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card reveal ${project.featured ? 'project-card-featured' : ''}`} key={project.number}>
              <div className="project-visual">
                <div className="project-visual-grid" />
                <span className="project-number">{project.number}</span>
                <div className="project-icon"><ProjectIcon type={project.icon} /></div>
                <span className="project-visual-caption">{project.type}</span>
                {project.featured && <span className="featured-label"><Sparkles size={12} /> FEATURED</span>}
              </div>
              <div className="project-content">
                <div className="project-meta"><span>{project.type}</span><span>{project.period}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
                {project.link && (
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View repository <ExternalLink size={15} /></a>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="projects-footer reveal">
          <span>More code and experiments live on GitHub.</span>
          <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub <Github size={17} /></a>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <SectionHeading eyebrow="MILESTONES" title="A few proud" accent="moments." />
        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <article className="achievement-card reveal" key={achievement.title}>
              <div className="achievement-icon">{index === 0 ? <Sparkles size={20} /> : <Award size={20} />}</div>
              <div><span className="achievement-year">{achievement.year}</span><h3>{achievement.title}</h3><p>{achievement.detail}</p></div>
              <Check className="achievement-check" size={17} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setFormError('');
  };

  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError('Please complete all three fields before sending.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel reveal">
          <div className="contact-copy">
            <span className="eyebrow"><span className="eyebrow-line" /> HAVE A PROJECT IN MIND?</span>
            <h2>Let's build<br /><span className="gradient-text">something great.</span></h2>
            <p>Have an opportunity, an idea, or just want to connect? My inbox is open.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}<ArrowUpRight size={17} /></a>
            <div className="contact-details">
              <a href={`tel:${profile.phone}`}><Phone size={15} />{profile.phoneDisplay}</a>
              <span><span className="status-dot" /> Based in {profile.location}</span>
            </div>
            <SocialLinks />
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-heading"><MessageCircle size={19} /><div><strong>Send a message</strong><span>I'll get back to you as soon as I can.</span></div></div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={update} required />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={update} required />
            <label htmlFor="contact-message">Your message</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about what you have in mind..." value={form.message} onChange={update} required />
            {formError && <p className="form-error" role="alert">{formError}</p>}
            <button className="button button-primary form-submit" type="submit">Send message <Send size={16} /></button>
            <p className="form-note">This opens your default email app with your message pre-filled. No details are stored on this website.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">Venkat<span>.</span></a>
        <p>Designed & built with care. <span>© {new Date().getFullYear()} Venkat Ram.</span></p>
        <a className="back-to-top" href="#home">Back to top <ArrowDownRight size={16} /></a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
