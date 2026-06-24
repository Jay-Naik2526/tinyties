import logoFooter from "../assets/logo-footer.png";

const C = {
  gold: "#c9a84c", goldLight: "#e8d5a3", text: "#4a3035",
};
const INSTA_URL = "https://www.instagram.com/tiny._ties";

const links = [
  ["About", "#about"], ["Shop", "#shop"], ["How to Order", "#order"],
  ["Reviews", "#reviews"], ["FAQ", "#faq"],
  ["Instagram", INSTA_URL],
];

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ background: C.text, color: "rgba(255,255,255,0.7)", padding: "3rem 2rem 2rem", textAlign: "center" }}>
      <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center" }}>
        <img src={logoFooter} alt="Tiny Ties" style={{ height: 100, width: "auto", borderRadius: 12, objectFit: "contain" }} loading="lazy" />
      </div>
      <div style={{ fontSize: "0.8rem", color: C.goldLight, letterSpacing: "0.15em", marginBottom: "2rem", fontStyle: "italic", fontFamily: "var(--heading-font)" }}>Handmade with Heart 🤍</div>
      <nav aria-label="Footer navigation" className="footer-links" style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
        {links.map(([label, href]) => (
          <a key={label} href={href} className="footer-link"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.3s", fontFamily: "var(--body-font)" }}>
            {label}
          </a>
        ))}
      </nav>
      <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.1)", margin: "1.5rem 0" }} />
      <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", fontFamily: "var(--body-font)" }}>© 2025 Tiny Ties. All rights reserved. Made with 🤍 in India.</p>
    </footer>
  );
}
