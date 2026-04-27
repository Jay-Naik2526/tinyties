import { useState, useEffect, useCallback } from "react";

const C = {
  blush: "#f2c4ce", rose: "#c17d8a", deepRose: "#9e5a6a",
  gold: "#c9a84c", text: "#4a3035", textLight: "#8a6870", cream: "#fdf8f5",
};

const reviews = [
  { stars: 5, text: "Ordered a custom bracelet for my bestie's birthday and she absolutely loved it. Quality is amazing for the price!", name: "Priya S.", loc: "Mumbai", emoji: "👧" },
  { stars: 5, text: "Got the friendship set for me and my roommate. We wear them every day. Super cute packaging too!", name: "Ananya R.", loc: "Delhi", emoji: "🌸" },
  { stars: 5, text: "Fast delivery, beautiful bracelet, so affordable. Will definitely order again for gifting!", name: "Shreya K.", loc: "Pune", emoji: "💖" },
  { stars: 5, text: "The custom ring I ordered was exactly what I wanted. The color combination was perfect!", name: "Neha M.", loc: "Bangalore", emoji: "💍" },
  { stars: 5, text: "Gifted matching bracelets to my sister and she cried happy tears. Tiny Ties made our bond even stronger!", name: "Riya P.", loc: "Jaipur", emoji: "🎀" },
];

export default function Reviews({ fadeStyle }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = useCallback(() => {
    setActiveIdx(i => (i + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  // Show 3 reviews at a time on desktop, carousel on mobile
  const visibleReviews = [
    reviews[activeIdx],
    reviews[(activeIdx + 1) % reviews.length],
    reviews[(activeIdx + 2) % reviews.length],
  ];

  return (
    <section id="reviews" className="section-padding" aria-label="Customer reviews" style={{ padding: "6rem 2rem", background: C.cream }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }} data-id="rev-header">
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem", fontFamily: "var(--body-font)" }}>Happy Customers</p>
        <h2 className="section-title" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 300, color: C.deepRose, ...fadeStyle("rev-header") }}>
          They <em>loved it</em>
        </h2>
        <div style={{ width: 60, height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)`, margin: "1.5rem auto" }} />
      </div>

      <div className="review-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px,1fr))", gap: "1.5rem", maxWidth: 1000, margin: "0 auto" }}>
        {visibleReviews.map((r, i) => (
          <div key={`${activeIdx}-${i}`} className="review-card" style={{
            background: "white", borderRadius: "1.5rem", padding: "1.75rem",
            boxShadow: "0 2px 20px rgba(158,90,106,0.07)",
            border: "1px solid rgba(242,196,206,0.4)", transition: "transform 0.3s",
            animation: "reviewSlide 0.5s ease forwards",
          }}>
            <div aria-label={`${r.stars} stars`} style={{ color: C.gold, fontSize: "0.9rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>{"★".repeat(r.stars)}</div>
            <blockquote style={{ fontFamily: "var(--heading-font)", fontSize: "1rem", fontStyle: "italic", color: C.text, lineHeight: 1.7, marginBottom: "1.25rem", border: "none", padding: 0, margin: 0 }}>"{r.text}"</blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${C.blush}, ${C.rose})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{r.emoji}</div>
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 500, color: C.text, fontFamily: "var(--body-font)" }}>{r.name}</div>
                <div style={{ fontSize: "0.7rem", color: C.textLight, fontFamily: "var(--body-font)" }}>{r.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
        {reviews.map((_, i) => (
          <button key={i} onClick={() => setActiveIdx(i)}
            aria-label={`Go to review ${i + 1}`}
            style={{
              width: activeIdx === i ? 24 : 8, height: 8, borderRadius: 4,
              background: activeIdx === i ? C.deepRose : C.blush,
              transition: "all 0.3s", border: "none", cursor: "pointer",
            }} />
        ))}
      </div>
    </section>
  );
}
