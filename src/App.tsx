import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Droplets,
  House,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

const services = [
  {
    icon: House,
    number: "01",
    title: "New home plumbing",
    description:
      "A considered plumbing plan from slab to handover, coordinated with your build schedule.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Repairs & maintenance",
    description:
      "Straightforward solutions for leaks, blocked drains, hot water and everything in between.",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Bathrooms & renovations",
    description:
      "Clean, careful installation that makes your renovation feel finished down to the last detail.",
  },
];

const promises = [
  "Licensed & fully insured",
  "Clear, upfront pricing",
  "Workmanship warranty",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <span>Serving homes and builders across the region</span>
        <div className="announcement-actions">
          <a className="announcement-phone" href="tel:1300555018">
            <Phone size={14} /> 1300 555 018
          </a>
          <a href="#contact">
            Book a no-obligation quote <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label="Northline Plumbing home"
        >
          <span className="brand-mark">
            <Droplets size={20} strokeWidth={2.5} />
          </span>
          <span>
            northline<span>plumbing</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMenu}>
            Why Northline
          </a>
          <a href="#process" onClick={closeMenu}>
            Our process
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Plumbing that keeps life moving
          </p>
          <h1>
            Good work
            <br />
            <em>flows</em> from here.
          </h1>
          <p className="hero-text">
            Dependable plumbing for homes, renovations and new builds.
            Thoughtful from the first call, precise right through to the final
            fit-off.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Get a quote <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#services">
              Explore services <ChevronDown size={17} />
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>JM</span>
              <span>SA</span>
              <span>TK</span>
            </div>
            <p>
              <strong>Trusted by 400+ homeowners</strong>
              <br />
              <span>
                ★★★★★ <small>5.0 average rating</small>
              </span>
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <div className="image-label">
              <span className="status-dot" /> On site, on time
            </div>
            <div className="circle-stamp">
              QUALITY
              <br />
              <span>PLUMBING</span>
              <br />
              SINCE 2012
            </div>
          </div>
          <div className="hero-card">
            <span>01 / 03</span>
            <p>
              From the first pipe
              <br />
              to the last detail.
            </p>
            <a href="#about" aria-label="Learn more about Northline">
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="trusted-by">
        <p>Trusted to get it right by</p>
        <div className="partner-list">
          <span>BRICK & CO.</span>
          <span>
            Hearth<span> + </span>Home
          </span>
          <span>ARCHFORM</span>
          <span className="partner-script">mason & rowe</span>
          <span>
            BUILD<span className="partner-light">WELL</span>
          </span>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span /> What we do
            </p>
            <h2>
              The right flow
              <br />
              <em>for every job.</em>
            </h2>
          </div>
          <p className="section-intro">
            From a dripping tap to a complete new build, we bring the same care,
            communication and craft to every project.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, number, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-top">
                <span>{number}</span>
                <Icon size={25} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#contact" aria-label={`Learn more about ${title}`}>
                Learn more <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-visual">
          <div className="about-photo">
            <span>
              Built with care
              <br />
              from the ground up.
            </span>
          </div>
          <div className="experience-badge">
            <strong>12</strong>
            <span>
              years of
              <br />
              experience
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span /> Why Northline
          </p>
          <h2>
            Plumbing with a little more <em>thought</em> behind it.
          </h2>
          <p>
            We believe the best plumbing work is the work you never have to
            think about. That means taking the time to understand your project,
            communicating clearly and leaving every space better than we found
            it.
          </p>
          <div className="promise-list">
            {promises.map((promise) => (
              <div key={promise}>
                <span>
                  <Check size={14} />
                </span>
                {promise}
              </div>
            ))}
          </div>
          <a className="text-link dark-link" href="#contact">
            Meet your local plumbing team <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="process-heading">
          <p className="eyebrow">
            <span /> How it works
          </p>
          <h2>
            Simple from
            <br />
            <em>start to finish.</em>
          </h2>
          <p>
            Good communication makes good work. We keep you in the loop at every
            stage, so there are no surprises along the way.
          </p>
        </div>
        <div className="process-steps">
          <div className="process-line" />
          {[
            [
              "01",
              "Tell us what you need",
              "Give us a call or send through a few details about your project.",
            ],
            [
              "02",
              "We make a clear plan",
              "We visit when needed, talk through options and provide a transparent quote.",
            ],
            [
              "03",
              "We get it flowing",
              "Our team arrives prepared, works cleanly and leaves you with confidence.",
            ],
          ].map(([number, title, text]) => (
            <div className="process-step" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow light-eyebrow">
            <span /> Let’s get started
          </p>
          <h2>
            Have a project
            <br />
            in <em>mind?</em>
          </h2>
          <p>
            Tell us a little about what you need and our friendly team will be
            in touch to talk it through.
          </p>
          <div className="contact-direct">
            <span>Prefer to talk?</span>
            <a href="tel:1300555018">
              <Phone size={16} /> 1300 555 018
            </a>
          </div>
        </div>
        <form
          className="quote-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-row">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label>
            What can we help with?
            <select defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>New home plumbing</option>
              <option>Repairs & maintenance</option>
              <option>Bathroom or renovation</option>
            </select>
          </label>
          <label>
            Tell us a little more
            <textarea
              placeholder="A few details about your project..."
              rows={3}
            />
          </label>
          <button className="button button-light" type="submit">
            Send enquiry <ArrowRight size={17} />
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">
            <Droplets size={20} strokeWidth={2.5} />
          </span>
          <span>
            northline<span>plumbing</span>
          </span>
        </a>
        <p>Built to flow. Proudly serving our local community.</p>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Instagram</a>
        </div>
        <small>© 2024 Northline Plumbing. All rights reserved.</small>
      </footer>
    </main>
  );
}

export default App;
