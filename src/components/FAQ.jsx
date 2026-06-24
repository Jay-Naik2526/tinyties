import { useState } from "react";

const C = {
  deepRose: "#9e5a6a", gold: "#c9a84c", goldLight: "#e8d5a3",
  text: "#4a3035", textLight: "#8a6870", cream: "#fdf8f5", softPink: "#faeef1",
};

const faqs = [
  { q: "How do I order from Tiny Ties?", a: "Simply browse our collection, DM us on Instagram with what you love. We'll confirm your order, customize if needed, share UPI payment details, and handcraft your piece fresh for delivery." },
  { q: "Can I customize my jewelry?", a: "Absolutely! Custom orders are our favorite. Pick your colors, beads, charms, and size — we'll make it exactly the way you imagine. Just DM us with your ideas." },
  { q: "What are the prices?", a: "Our pieces start at just ₹49 for beaded bracelets and ₹129 for necklaces. Custom pieces are priced based on materials and complexity." },
  { q: "How long does delivery take?", a: "Since every piece is handmade to order, it typically takes 3-5 days to craft and ship. Delivery usually arrives within 5-7 business days across India." },
  { q: "Do you ship all over India?", a: "Yes! We ship to all major cities and towns across India. Shipping charges may vary by location." },
  { q: "What payment methods do you accept?", a: "We accept UPI payments (Google Pay, PhonePe, Paytm), bank transfers, and cash on delivery for select locations." },
];

export default function FAQ({ fadeStyle }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions" style={{ padding: "6rem 2rem", background: C.cream }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }} data-id="faq-header">
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem", fontFamily: "var(--body-font)" }}>Got Questions?</p>
        <h2 className="section-title" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 300, color: C.deepRose, ...fadeStyle("faq-header") }}>
          Frequently <em>Asked</em>
        </h2>
        <div style={{ width: 60, height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)`, margin: "1.5rem auto" }} />
      </div>

      <div className="faq-grid" style={{ maxWidth: 800, margin: "0 auto", display: "grid", gap: "1rem" }}>
        {faqs.map((f, i) => (
          <div key={i} className="faq-item" data-id={`faq${i}`}
            style={{
              background: "white", borderRadius: "1rem", overflow: "hidden",
              border: `1px solid ${openIdx === i ? "#f2c4ce" : C.goldLight}`,
              transition: "border-color 0.3s",
              ...fadeStyle(`faq${i}`, i * 0.06),
            }}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              aria-expanded={openIdx === i}
              aria-controls={`faq-answer-${i}`}
              style={{
                width: "100%", padding: "1.25rem 1.5rem", display: "flex",
                alignItems: "center", justifyContent: "space-between",
                background: "none", border: "none", cursor: "pointer", textAlign: "left",
              }}>
              <span style={{ fontFamily: "var(--heading-font)", fontSize: "1rem", color: C.text, fontWeight: 400, paddingRight: "1rem" }}>{f.q}</span>
              <span style={{
                fontSize: "1.2rem", color: C.gold, transition: "transform 0.3s",
                transform: openIdx === i ? "rotate(45deg)" : "rotate(0)",
                flexShrink: 0,
              }}>+</span>
            </button>
            <div id={`faq-answer-${i}`} role="region"
              style={{
                maxHeight: openIdx === i ? 200 : 0,
                opacity: openIdx === i ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease, opacity 0.3s ease",
                padding: openIdx === i ? "0 1.5rem 1.25rem" : "0 1.5rem",
              }}>
              <p style={{ fontSize: "0.88rem", color: C.textLight, lineHeight: 1.8, fontFamily: "var(--body-font)" }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
