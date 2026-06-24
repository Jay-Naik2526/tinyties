const C = { deepRose: "#9e5a6a", goldLight: "#e8d5a3" };
const INSTA_DM = "https://www.instagram.com/direct/t/18190311574339120/";

export default function CustomCTA({ fadeStyle }) {
  return (
    <section aria-label="Custom orders" style={{ background: `linear-gradient(135deg, ${C.deepRose} 0%, #7a3a48 100%)`, padding: "6rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }} className="custom-cta-section">
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.15), transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 580, margin: "0 auto" }} data-id="custom">
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.goldLight, marginBottom: "0.75rem", fontFamily: "var(--body-font)" }}>Personalize It</p>
        <h2 className="section-title" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 300, color: "white", marginBottom: "1rem", ...fadeStyle("custom") }}>
          Want something <em>custom?</em>
        </h2>
        <div style={{ width: 60, height: 1, background: `linear-gradient(to right, ${C.goldLight}, transparent)`, margin: "1.5rem auto" }} />
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "var(--body-font)" }}>
          Pick your colors, beads, charms, and size. We'll make it exactly the way you imagine. Custom orders are our favorite 🎀
        </p>
        <a href={INSTA_DM} target="_blank" rel="noopener noreferrer" className="btn-gold" aria-label="Request custom order on Instagram DM"
          style={{ background: "#c9a84c", color: "white", padding: "1rem 2.5rem", borderRadius: "3rem", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", transition: "all 0.3s", display: "inline-block", boxShadow: "0 4px 20px rgba(201,168,76,0.4)", fontFamily: "var(--body-font)" }}>
          Request Custom Order
        </a>
      </div>
    </section>
  );
}
