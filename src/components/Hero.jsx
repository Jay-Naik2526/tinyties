const C = {
  blush: "#f2c4ce", goldLight: "#e8d5a3", deepRose: "#9e5a6a",
  rose: "#c17d8a", gold: "#c9a84c", textLight: "#8a6870",
};
const WA = "https://wa.me/917888684081?text=Hi! I'd love to order from Tiny Ties 🎀";

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Welcome to Tiny Ties" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "8rem 2rem 4rem", position: "relative", overflow: "hidden",
      background: "var(--cream)",
    }}>
      {/* Blobs */}
      <div className="hero-blobs" aria-hidden="true">
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: C.blush, filter: "blur(70px)", opacity: 0.35, top: "-8%", left: "-5%", animation: "float1 9s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: C.goldLight, filter: "blur(60px)", opacity: 0.3, bottom: "8%", right: "-4%", animation: "float2 11s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: C.blush, filter: "blur(50px)", opacity: 0.25, top: "50%", left: "62%", animation: "float3 7s ease-in-out infinite" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
        <div style={{ display: "inline-block", fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: C.gold, border: `1px solid ${C.goldLight}`, padding: "0.4rem 1.2rem", borderRadius: "2rem", marginBottom: "1.5rem", animation: "heroFade 0.8s ease both", fontFamily: "var(--body-font)" }}>
          🎀 Custom Orders Open
        </div>
        <h1 className="hero-h1" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(3.5rem,10vw,7rem)", fontWeight: 300, lineHeight: 1, color: C.deepRose, letterSpacing: "-0.02em", animation: "heroFade 0.8s ease 0.2s both", opacity: 0 }}>
          Tiny <em style={{ fontStyle: "italic", color: C.rose }}>Ties</em>
        </h1>
        <p style={{ fontSize: "0.82rem", letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, margin: "1rem 0 0.4rem", animation: "heroFade 0.8s ease 0.35s both", opacity: 0, fontFamily: "var(--body-font)" }}>
          Handmade Beaded Jewelry
        </p>
        <p style={{ fontFamily: "var(--heading-font)", fontSize: "1.1rem", fontStyle: "italic", color: C.textLight, marginBottom: "2.5rem", animation: "heroFade 0.8s ease 0.5s both", opacity: 0 }}>
          Handcrafted with Heart — Bracelets, Rings & More
        </p>
        <div className="hero-buttons" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", animation: "heroFade 0.8s ease 0.65s both", opacity: 0 }}>
          <a href="#shop" className="btn-primary" style={{ background: C.deepRose, color: "white", padding: "0.9rem 2.2rem", borderRadius: "3rem", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(158,90,106,0.3)", fontFamily: "var(--body-font)" }}>
            Shop Collection
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ border: `1.5px solid ${C.deepRose}`, color: C.deepRose, padding: "0.9rem 2.2rem", borderRadius: "3rem", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", transition: "all 0.3s", fontFamily: "var(--body-font)" }}>
            DM to Order
          </a>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: C.textLight, textTransform: "uppercase", fontFamily: "var(--body-font)" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${C.gold}, transparent)`, animation: "scrollLine 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
