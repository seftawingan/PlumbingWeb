const steps = [
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
];

export function ProcessSection() {
  return (
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
        {steps.map(([number, title, text]) => (
          <div className="process-step" key={number}>
            <span className="step-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
