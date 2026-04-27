import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Shop from "./components/Shop";
import HowToOrder from "./components/HowToOrder";
import CustomCTA from "./components/CustomCTA";
import Reviews from "./components/Reviews";
import SizeGuide from "./components/SizeGuide";
import FAQ from "./components/FAQ";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import SocialProof from "./components/SocialProof";
import BackToTop from "./components/BackToTop";

const WA = "https://wa.me/917888684081?text=Hi! I'd love to order from Tiny Ties 🎀";

const marqueeItems = [
  "Handmade Bracelets ✦", "Custom Orders Open ✦", "Beaded Rings ✦",
  "Friendship Bracelets ✦", "Handmade with Heart ✦", "Gift for Her ✦",
  "Free Shipping 200+ ✦", "Made in India ✦",
];

export default function TinyTies() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.id]: true }));
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-id]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fadeStyle = (id, delay = 0) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <div style={{ fontFamily: "var(--heading-font)", background: "var(--cream)", color: "var(--text)", overflowX: "hidden", margin: 0 }}>

      {/* Skip Navigation (Accessibility) */}
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      <Nav scrolled={scrolled} />

      <main id="main-content">
        <Hero />

        {/* Marquee */}
        <div aria-hidden="true" style={{ background: "#9e5a6a", padding: "0.75rem 0", overflow: "hidden" }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 22s linear infinite" }}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "white", padding: "0 2.5rem", flexShrink: 0, fontFamily: "var(--body-font)" }}>{item}</span>
            ))}
          </div>
        </div>

        <About fadeStyle={fadeStyle} />
        <Shop fadeStyle={fadeStyle} />
        <HowToOrder fadeStyle={fadeStyle} />
        <CustomCTA fadeStyle={fadeStyle} />
        <SizeGuide fadeStyle={fadeStyle} />
        <Reviews fadeStyle={fadeStyle} />
        <FAQ fadeStyle={fadeStyle} />
        <Instagram fadeStyle={fadeStyle} />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a href={WA} target="_blank" rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={{
          position: "fixed", bottom: "2rem", right: "2rem", zIndex: 200,
          width: 56, height: 56, borderRadius: "50%", background: "#25D366",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          animation: "pulseWa 3s ease-in-out infinite", fontSize: "1.8rem",
        }}>
        💬
      </a>

      <BackToTop />
      <SocialProof />
    </div>
  );
}
