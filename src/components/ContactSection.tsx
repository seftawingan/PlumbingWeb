import { ArrowRight, Phone } from "lucide-react";

export function ContactSection() {
  return (
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
          Tell us a little about what you need and our friendly team will be in
          touch to talk it through.
        </p>
        <div className="contact-direct">
          <span>Prefer to talk?</span>
          <a href="tel:1300555018">
            <Phone size={16} /> 1300 555 018
          </a>
        </div>
      </div>
      <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
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
  );
}
