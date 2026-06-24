const C = { deepRose: "#9e5a6a", gold: "#c9a84c", goldLight: "#e8d5a3", textLight: "#8a6870", softPink: "#faeef1" };

export default function SizeGuide({ fadeStyle }) {
  return (
    <section id="size-guide" aria-label="Size guide" className="section-padding" style={{ padding: "5rem 2rem", background: C.softPink }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }} data-id="size-guide">
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem", fontFamily: "var(--body-font)" }}>Perfect Fit</p>
        <h2 className="section-title" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 300, color: C.deepRose, marginBottom: "1rem", ...fadeStyle("size-guide") }}>
          Find Your <em>Size</em>
        </h2>
        <div style={{ width: 60, height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)`, margin: "1.5rem auto" }} />
        <p style={{ color: C.textLight, fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "2.5rem", fontFamily: "var(--body-font)" }}>
          Use a flexible measuring tape or a strip of paper to measure around your wrist.
        </p>

        <div className="size-guide-content" style={{ display: "flex", gap: "2.5rem", justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Bracelet sizes */}
          <div style={{ background: "white", borderRadius: "1.5rem", padding: "2rem", flex: "1 1 300px", maxWidth: 360, boxShadow: "0 2px 20px rgba(158,90,106,0.08)" }}>
            <h3 style={{ fontFamily: "var(--heading-font)", fontSize: "1.1rem", color: C.deepRose, marginBottom: "1.5rem", fontWeight: 400 }}>🧿 Bracelet Sizes</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--body-font)", fontSize: "0.82rem" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${C.goldLight}` }}>
                  <th style={{ padding: "0.6rem 0", textAlign: "left", color: C.gold, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Size</th>
                  <th style={{ padding: "0.6rem 0", textAlign: "center", color: C.gold, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Wrist (cm)</th>
                  <th style={{ padding: "0.6rem 0", textAlign: "right", color: C.gold, fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Fit</th>
                </tr>
              </thead>
              <tbody>
                {[["XS", "13-14", "Snug"], ["S", "14-15.5", "Regular"], ["M", "15.5-17", "Regular"], ["L", "17-18.5", "Relaxed"]].map(([s, cm, fit]) => (
                  <tr key={s} style={{ borderBottom: "1px solid rgba(232,213,163,0.3)" }}>
                    <td style={{ padding: "0.7rem 0", color: C.deepRose, fontWeight: 500 }}>{s}</td>
                    <td style={{ padding: "0.7rem 0", textAlign: "center", color: C.textLight }}>{cm}</td>
                    <td style={{ padding: "0.7rem 0", textAlign: "right", color: C.textLight }}>{fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Necklace Sizing */}
          <div style={{ background: "white", borderRadius: "1.5rem", padding: "2rem", flex: "1 1 300px", maxWidth: 360, boxShadow: "0 2px 20px rgba(158,90,106,0.08)" }}>
            <h3 style={{ fontFamily: "var(--heading-font)", fontSize: "1.1rem", color: C.deepRose, marginBottom: "1.5rem", fontWeight: 400 }}>📿 Necklace Sizing</h3>
            <p style={{ fontSize: "0.85rem", color: C.textLight, lineHeight: 1.8, marginBottom: "1.2rem", fontFamily: "var(--body-font)" }}>
              Our beaded neckpieces are crafted to a standard length of <strong style={{ color: C.deepRose }}>40 cm</strong> and include a <strong style={{ color: C.deepRose }}>5 cm adjuster chain</strong>.
            </p>
            <p style={{ fontSize: "0.85rem", color: C.textLight, lineHeight: 1.8, marginBottom: "1.5rem", fontFamily: "var(--body-font)" }}>
              This allows it to sit elegantly around the collarbone. Need a custom length? Let us know in your DM and we will gladly adjust it for you!
            </p>
            <div style={{ background: `linear-gradient(135deg, ${C.softPink}, rgba(242,196,206,0.3))`, borderRadius: "1rem", padding: "1rem", textAlign: "center" }}>
              <span style={{ fontSize: "2rem" }}>📏</span>
              <p style={{ fontSize: "0.72rem", color: C.textLight, marginTop: "0.5rem", fontFamily: "var(--body-font)" }}>Need a custom size? We'll make it for you!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
