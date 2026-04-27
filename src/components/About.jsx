const C = {
  blush: "#f2c4ce", deepRose: "#9e5a6a", gold: "#c9a84c",
  goldLight: "#e8d5a3", cream: "#fdf8f5", softPink: "#faeef1", textLight: "#8a6870",
};

export default function About({ fadeStyle }) {
  return (
    <section id="about" className="section-padding" aria-label="About Tiny Ties" style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} data-id="about">
        <div className="about-visual" style={{ position: "relative", height: 420, ...fadeStyle("about", 0) }} aria-hidden="true">
          <div style={{ position: "absolute", width: "72%", height: 340, top: 0, left: 0, borderRadius: "2rem", background: `linear-gradient(135deg, ${C.softPink}, ${C.blush})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8rem" }}>🎀</div>
          <div style={{ position: "absolute", width: "52%", height: 190, bottom: 0, right: 0, borderRadius: "2rem", border: `2px solid ${C.goldLight}`, background: C.cream, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem" }}>💍</div>
          <div style={{ position: "absolute", width: 110, height: 110, borderRadius: "50%", border: `1.5px solid ${C.gold}`, opacity: 0.5, top: -15, right: 15 }} />
          <div style={{ position: "absolute", width: 75, height: 75, borderRadius: "50%", border: `1.5px solid ${C.gold}`, opacity: 0.4, bottom: 25, left: -15 }} />
        </div>
        <div data-id="about-text" style={fadeStyle("about-text", 0.2)}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem", fontFamily: "var(--body-font)" }}>Our Story</p>
          <h2 className="section-title" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: C.deepRose, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Made with <em>love,</em><br />one bead at a time
          </h2>
          <div style={{ width: 60, height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)`, marginBottom: "1.5rem" }} />
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: C.textLight, fontWeight: 300, marginBottom: "1rem", fontFamily: "var(--body-font)" }}>
            Every piece at Tiny Ties is hand-crafted with care and intention. We believe jewelry should feel personal — like a little piece of someone's heart you can wear every day.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: C.textLight, fontWeight: 300, marginBottom: "2rem", fontFamily: "var(--body-font)" }}>
            From delicate beaded bracelets to custom rings, each creation is made to order, just for you. No factories. No mass production. Just hands, beads, and heart.
          </p>
          <div className="stats-row" style={{ display: "flex", gap: "2.5rem" }}>
            {[["200+", "Happy Customers"], ["100%", "Handmade"], ["∞", "Custom Options"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--heading-font)", fontSize: "2.2rem", color: C.deepRose, fontWeight: 600 }}>{n}</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: C.textLight, textTransform: "uppercase", fontFamily: "var(--body-font)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
