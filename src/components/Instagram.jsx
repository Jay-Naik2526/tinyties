const C = { deepRose: "#9e5a6a", gold: "#c9a84c", textLight: "#8a6870", softPink: "#faeef1" };

const grid = [
  { emoji: "🎀", bg: ["#faeef1", "#f2c4ce"] },
  { emoji: "💛", bg: ["#fdf3e8", "#e8d5a3"] },
  { emoji: "💍", bg: ["#f0eef8", "#d4c4e8"] },
  { emoji: "🌸", bg: ["#eef8f0", "#c4e8cc"] },
  { emoji: "✨", bg: ["#f2c4ce", "#c17d8a"] },
  { emoji: "🧿", bg: ["#e8d5a3", "#c9a84c"] },
];

export default function Instagram({ fadeStyle }) {
  return (
    <section aria-label="Instagram" className="section-padding" style={{ padding: "6rem 2rem", background: C.softPink, textAlign: "center" }}>
      <div data-id="insta">
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem", fontFamily: "var(--body-font)" }}>Follow Along</p>
        <h2 className="section-title" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 300, color: C.deepRose, ...fadeStyle("insta") }}>
          Find us on <em>Instagram</em>
        </h2>
        <div style={{ width: 60, height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)`, margin: "1.5rem auto" }} />
        <div className="insta-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "0.5rem", maxWidth: 860, margin: "2.5rem auto" }}>
          {grid.map((t, i) => (
            <div key={i} className="insta-tile" style={{ aspectRatio: "1", borderRadius: "0.75rem", background: `linear-gradient(135deg, ${t.bg[0]}, ${t.bg[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.2rem", cursor: "pointer", transition: "transform 0.3s, opacity 0.3s" }}>{t.emoji}</div>
          ))}
        </div>
        <a href="#" rel="noopener noreferrer"
          aria-label="Follow Tiny Ties on Instagram"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: C.deepRose, color: "white", padding: "0.85rem 2rem", borderRadius: "3rem", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.3s", fontFamily: "var(--body-font)" }}>
          📸 Follow Us
        </a>
      </div>
    </section>
  );
}
