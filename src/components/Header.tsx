import { ArrowRight, Droplets, Menu, Phone, X } from "lucide-react";

type HeaderProps = {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};

export function Header({ menuOpen, onMenuToggle, onMenuClose }: HeaderProps) {
  return (
    <>
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
          onClick={onMenuClose}
          aria-label="PRIMEWAVE plumbing solutions home"
        >
          <span className="brand-mark">
            <Droplets size={20} strokeWidth={2.5} />
          </span>
          <span>
            PRIMEWAVE<span> plumbing solutions</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={onMenuToggle}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={onMenuClose}>
            Services
          </a>
          <a href="#about" onClick={onMenuClose}>
            Why PRIMEWAVE
          </a>
          <a href="#process" onClick={onMenuClose}>
            Our process
          </a>
          <a href="#contact" onClick={onMenuClose}>
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
