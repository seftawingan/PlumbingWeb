import { Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#top">
        <span className="brand-mark">
          <Droplets size={20} strokeWidth={2.5} />
        </span>
        <span>
          PRIMEWAVE<span> plumbing solutions</span>
        </span>
      </a>
      <p>Built to flow. Proudly serving our local community.</p>
      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#">Instagram</a>
      </div>
      <small>© 2024 PRIMEWAVE plumbing solutions. All rights reserved.</small>
    </footer>
  );
}
