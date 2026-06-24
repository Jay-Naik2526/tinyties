const C = {
  deepRose: "#9e5a6a", gold: "#c9a84c", goldLight: "#e8d5a3", textLight: "#8a6870",
};

const steps = [
  { n: "1", title: "Pick & DM", desc: "Browse our collection. DM on Instagram with what you love." },
  { n: "2", title: "Confirm & Pay", desc: "We confirm your order, customize if needed, and share UPI payment details." },
  { n: "3", title: "Made & Delivered", desc: "Your piece is handmade fresh for you and delivered with love." },
];

export default function HowToOrder({ fadeStyle }) {
  return (
    <section id="order" className="section-padding" aria-label="How to order" style={{ padding: "6rem 2rem", background: "var(--cream)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }} data-id="order-sec">
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem", fontFamily: "var(--body-font)" }}>Simple Process</p>
        <h2 className="section-title" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 300, color: C.deepRose, ...fadeStyle("order-sec") }}>
          How to <em>Order</em>
        </h2>
        <div style={{ width: 60, height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)`, margin: "1.5rem auto 0.75rem" }} />
        <p style={{ color: C.textLight, fontSize: "0.88rem", lineHeight: 1.8, maxWidth: 380, margin: "0 auto 3rem", fontFamily: "var(--body-font)" }}>Just 3 easy steps and your jewelry is on its way 🎀</p>
        <div className="steps-grid">
          <div className="steps-line" style={{ position: "absolute", top: "2.3rem", left: "17%", right: "17%", height: 1, background: `linear-gradient(to right, ${C.goldLight}, ${C.gold}, ${C.goldLight})` }} />
          {steps.map((s, i) => (
            <div key={i} data-id={`step${i}`} style={fadeStyle(`step${i}`, i * 0.15)}>
              <div style={{ width: "4.5rem", height: "4.5rem", borderRadius: "50%", background: "white", border: `1.5px solid ${C.gold}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontFamily: "var(--heading-font)", fontSize: "1.7rem", color: C.gold, position: "relative", zIndex: 1, boxShadow: "0 4px 20px rgba(201,168,76,0.2)" }}>
                {s.n}
              </div>
              <h3 style={{ fontFamily: "var(--heading-font)", fontSize: "1.15rem", color: C.deepRose, marginBottom: "0.5rem", fontWeight: 400 }}>{s.title}</h3>
              <p style={{ fontSize: "0.82rem", color: C.textLight, lineHeight: 1.7, fontFamily: "var(--body-font)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
