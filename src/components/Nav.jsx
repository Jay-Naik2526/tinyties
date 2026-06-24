import { useState, useEffect } from "react";
import logoNav from "../assets/logo-nav.png";

const C = {
  deepRose: "#9e5a6a", gold: "#c9a84c", goldLight: "#e8d5a3",
  textLight: "#8a6870", blush: "#f2c4ce",
};

const INSTA_URL = "https://www.instagram.com/tiny._ties/";
const INSTA_DM = "https://www.instagram.com/direct/t/18190311574339120/";

const allLinks = [
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "Size Guide", href: "#size-guide" },
  { label: "How to Order", href: "#order" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Instagram", href: INSTA_URL, external: true },
];

export default function Nav({ scrolled, cart = [], badgeAnimate, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const desktopLinks = ["About", "Shop", "Order", "Reviews", "FAQ"];

  return (
    <>
      <nav role="navigation" aria-label="Main navigation" style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        background: scrolled ? "rgba(253,248,245,0.95)" : "rgba(253,248,245,0.8)",
        backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        borderBottom: `1px solid ${C.goldLight}`,
        padding: "0.75rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "background 0.3s",
      }}>
        <a href="#hero" aria-label="Tiny Ties Home" style={{ display: "flex", alignItems: "center" }}>
          <img src={logoNav} alt="Tiny Ties - Handmade Jewelry" style={{ height: 44, width: "auto", borderRadius: 8, objectFit: "contain" }} loading="eager" />
        </a>

        {/* Desktop links */}
        <div className="nav-links-desktop" style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
          {desktopLinks.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link"
              style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.textLight, transition: "color 0.3s", fontFamily: "var(--body-font)" }}>
              {l}
            </a>
          ))}

          {/* Cart Icon Button */}
          <button onClick={onCartClick} aria-label="Open Shopping Cart" style={{ position: "relative", cursor: "pointer", display: "flex", alignItems: "center", padding: "0.4rem 0.6rem", transition: "color 0.3s" }}>
            <span style={{ fontSize: "1.1rem" }}>🛒</span>
            {cart.length > 0 && (
              <span className={badgeAnimate ? "badge-bounce" : ""} style={{
                position: "absolute", top: -2, right: -4, background: C.deepRose, color: "white",
                fontSize: "0.58rem", width: 16, height: 16, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold",
                fontFamily: "var(--body-font)"
              }}>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>

          <a href={INSTA_DM} target="_blank" rel="noopener noreferrer" aria-label="Order on Instagram" style={{
            background: C.deepRose, color: "white",
            padding: "0.5rem 1.2rem", borderRadius: "2rem",
            fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase",
            transition: "background 0.3s", fontFamily: "var(--body-font)",
          }}>Order Now</a>
        </div>

        {/* Right Nav for Mobile (Hamburger & Mobile Cart) */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          {/* Mobile Cart Icon Button */}
          <button className="mobile-cart-btn" onClick={onCartClick} aria-label="Open Shopping Cart" style={{ display: "none", position: "relative", cursor: "pointer", alignItems: "center", justifyContent: "center", padding: "4px" }}>
            <span style={{ fontSize: "1.25rem" }}>🛒</span>
            {cart.length > 0 && (
              <span className={badgeAnimate ? "badge-bounce" : ""} style={{
                position: "absolute", top: -4, right: -6, background: C.deepRose, color: "white",
                fontSize: "0.55rem", width: 16, height: 16, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold",
                fontFamily: "var(--body-font)"
              }}>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button className={`hamburger-btn${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{ position: "relative", zIndex: 200 }}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ===== FULL-SCREEN OVERLAY MOBILE MENU ===== */}
      {menuOpen && (
        <>
          {/* Dark backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 140,
              background: "rgba(74, 48, 53, 0.6)",
              backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
              animation: "overlayFadeIn 0.3s ease forwards",
            }}
          />

          {/* Menu panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            style={{
              position: "fixed", inset: 0, zIndex: 150,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "0.5rem",
              animation: "overlaySlideIn 0.4s ease forwards",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute", top: "1.5rem", right: "1.8rem",
                background: "none", border: "none", cursor: "pointer",
                fontSize: "1.8rem", color: "white", zIndex: 160,
                width: 44, height: 44, display: "flex",
                alignItems: "center", justifyContent: "center",
                borderRadius: "50%", transition: "background 0.2s",
              }}
            >
              ✕
            </button>

            {/* Logo at top */}
            <div style={{ marginBottom: "1.5rem", opacity: 0, animation: "overlayItemIn 0.4s ease 0.1s forwards" }}>
              <img src={logoNav} alt="Tiny Ties" style={{ height: 50, borderRadius: 8, filter: "brightness(10)" }} />
            </div>

            {/* Divider */}
            <div style={{
              width: 40, height: 1, marginBottom: "1rem",
              background: `linear-gradient(to right, transparent, ${C.gold}, transparent)`,
              opacity: 0, animation: "overlayItemIn 0.4s ease 0.15s forwards",
            }} />

            {/* All links */}
            {allLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--heading-font)",
                  fontSize: "1.4rem",
                  color: "white",
                  letterSpacing: "0.06em",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "0.5rem",
                  transition: "background 0.2s, color 0.2s",
                  opacity: 0,
                  animation: `overlayItemIn 0.4s ease ${0.15 + i * 0.06}s forwards`,
                  textAlign: "center",
                }}
                onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.color = C.goldLight; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "white"; }}
              >
                {link.label}
              </a>
            ))}

            {/* Divider */}
            <div style={{
              width: 40, height: 1, margin: "0.5rem 0",
              background: `linear-gradient(to right, transparent, ${C.gold}, transparent)`,
              opacity: 0, animation: `overlayItemIn 0.4s ease ${0.15 + allLinks.length * 0.06}s forwards`,
            }} />

            {/* Instagram DM CTA */}
            <a
              href={INSTA_DM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                background: C.gold, color: "white",
                padding: "0.85rem 2.2rem", borderRadius: "3rem",
                fontSize: "0.8rem", letterSpacing: "0.12em",
                textTransform: "uppercase", fontFamily: "var(--body-font)",
                boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
                opacity: 0,
                animation: `overlayItemIn 0.4s ease ${0.2 + allLinks.length * 0.06}s forwards`,
                marginTop: "0.5rem",
              }}
              onMouseEnter={e => { e.target.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { e.target.style.transform = "scale(1)"; }}
            >
              💬 Order on Instagram DM
            </a>

            {/* Social hint */}
            <p style={{
              fontSize: "0.68rem", color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.15em", textTransform: "uppercase",
              fontFamily: "var(--body-font)", marginTop: "1.5rem",
              opacity: 0, animation: `overlayItemIn 0.4s ease ${0.3 + allLinks.length * 0.06}s forwards`,
            }}>
              Tiny Ties ✦ Handmade with Heart
            </p>
          </div>
        </>
      )}

      {/* Overlay animations and responsive overrides */}
      <style>{`
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes overlaySlideIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes overlayItemIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .mobile-cart-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
