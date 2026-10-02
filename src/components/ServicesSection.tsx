import { ArrowRight, Droplets, House, Wrench } from "lucide-react";

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

export function ServicesSection() {
  return (
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
  );
}
