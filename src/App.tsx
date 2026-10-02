import { useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { TrustSection } from "./components/TrustSection";
import { TrustedBy } from "./components/TrustedBy";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((isOpen) => !isOpen)}
        onMenuClose={() => setMenuOpen(false)}
      />
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <TrustSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
