import { ArrowRight, ChevronDown, Droplets } from "lucide-react";

export function Hero() {
  return (
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
          Dependable plumbing for homes, renovations and new builds. Thoughtful
          from the first call, precise right through to the final fit-off.
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
  );
}
