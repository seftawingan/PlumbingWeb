import { ArrowRight, Check } from "lucide-react";

const promises = [
  "Licensed & fully insured",
  "Clear, upfront pricing",
  "Workmanship warranty",
];

export function TrustSection() {
  return (
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
          <span /> Why PRIMEWAVE
        </p>
        <h2>
          Plumbing with a little more <em>thought</em> behind it.
        </h2>
        <p>
          We believe the best plumbing work is the work you never have to think
          about. That means taking the time to understand your project,
          communicating clearly and leaving every space better than we found it.
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
  );
}
