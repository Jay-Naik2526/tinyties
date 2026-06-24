const C = { deepRose: "#9e5a6a", gold: "#c9a84c", textLight: "#8a6870", softPink: "#faeef1" };

const grid = [
  "/images/friendship-bracelet.jpeg",
  "/images/star-wars-1.jpeg",
  "/images/evil-eye.jpeg",
  "/images/sunshine.jpeg",
  "/images/sea-range-2.jpeg",
  "/images/solid-stack-bracelet.jpeg",
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
          {grid.map((src, i) => (
            <a key={i} href="https://www.instagram.com/tiny._ties" target="_blank" rel="noopener noreferrer" className="insta-tile" style={{ display: "block", aspectRatio: "1", borderRadius: "0.75rem", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s, opacity 0.3s" }}>
              <img src={src} alt={`Tiny Ties Beaded Jewelry ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </a>
          ))}
        </div>
        <a href="https://www.instagram.com/tiny._ties" target="_blank" rel="noopener noreferrer"
          aria-label="Follow Tiny Ties on Instagram"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: C.deepRose, color: "white", padding: "0.85rem 2rem", borderRadius: "3rem", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.3s", fontFamily: "var(--body-font)" }}>
          📸 Follow Us
        </a>
      </div>
    </section>
  );
}
