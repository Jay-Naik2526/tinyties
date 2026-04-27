import { useState } from "react";

const C = {
  deepRose: "#9e5a6a", gold: "#c9a84c", goldLight: "#e8d5a3",
  softPink: "#faeef1", text: "#4a3035", textLight: "#8a6870",
};

const WA_NUM = "917888684081";

const categories = ["All", "Bracelets", "Rings", "Sets"];

const products = [
  { emoji: "🧿", bg: ["#faeef1", "#f2c4ce"], badge: "Bestseller", name: "Pastel Beaded Bracelet", desc: "Soft pastel beads on elastic cord. Multiple color combos available.", price: "₹149", priceNum: 149, cat: "Bracelets" },
  { emoji: "💛", bg: ["#fdf3e8", "#e8d5a3"], badge: "New", name: "Gold Charm Bracelet", desc: "Delicate gold-toned beads with star and heart charms.", price: "₹199", priceNum: 199, cat: "Bracelets" },
  { emoji: "💍", bg: ["#f0eef8", "#d4c4e8"], badge: null, name: "Beaded Ring", desc: "Dainty beaded rings in adjustable size. Stack them or wear solo.", price: "₹99", priceNum: 99, cat: "Rings" },
  { emoji: "🎁", bg: ["#eef8f0", "#c4e8cc"], badge: "Custom", name: "Friendship Set", desc: "Matching bracelet duo for you and your bestie. Choose your colors.", price: "₹249", priceNum: 249, cat: "Sets" },
  { emoji: "🌸", bg: ["#faeef1", "#f2c4ce"], badge: null, name: "Floral Beaded Bracelet", desc: "Flower-shaped beads with a spring color palette. Perfect everyday wear.", price: "₹169", priceNum: 169, cat: "Bracelets" },
  { emoji: "💎", bg: ["#eef0f8", "#c4cce8"], badge: "New", name: "Crystal Ring Set", desc: "Set of 3 dainty crystal-accent beaded rings. Mix and match your style.", price: "₹179", priceNum: 179, cat: "Rings" },
];

export default function Shop({ fadeStyle }) {
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? products : products.filter(p => p.cat === activeCat);

  return (
    <section id="shop" className="section-padding" aria-label="Shop our collection" style={{ background: C.softPink, padding: "6rem 2rem" }}>
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 2rem" }} data-id="shop-header">
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem", fontFamily: "var(--body-font)" }}>The Collection</p>
        <h2 className="section-title" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 300, color: C.deepRose, ...fadeStyle("shop-header") }}>
          Shop <em>Tiny Ties</em>
        </h2>
        <div style={{ width: 60, height: 1, background: `linear-gradient(to right, ${C.gold}, transparent)`, margin: "1.5rem auto" }} />
        <p style={{ color: C.textLight, fontSize: "0.88rem", lineHeight: 1.8, fontFamily: "var(--body-font)" }}>Each piece is handmade. DM us on Instagram or WhatsApp to place your order.</p>
      </div>

      {/* Category Filters */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
        {categories.map(cat => (
          <button key={cat} className="category-btn"
            onClick={() => setActiveCat(cat)}
            aria-pressed={activeCat === cat}
            style={{
              padding: "0.45rem 1.2rem", borderRadius: "2rem",
              fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "var(--body-font)", cursor: "pointer", transition: "all 0.3s",
              background: activeCat === cat ? C.deepRose : "white",
              color: activeCat === cat ? "white" : C.textLight,
              border: `1.5px solid ${activeCat === cat ? C.deepRose : C.goldLight}`,
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem", maxWidth: 1100, margin: "0 auto" }}>
        {filtered.map((p, i) => (
          <article key={p.name} className="product-card" data-id={`p${i}`}
            itemScope itemType="https://schema.org/Product"
            style={{ background: "white", borderRadius: "1.5rem", overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s", boxShadow: "0 2px 20px rgba(158,90,106,0.08)", ...fadeStyle(`p${i}`, i * 0.08) }}>
            <div style={{ height: 200, background: `linear-gradient(135deg, ${p.bg[0]}, ${p.bg[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", position: "relative" }}>
              {p.badge && <span style={{ position: "absolute", top: "0.8rem", left: "0.8rem", background: C.deepRose, color: "white", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.7rem", borderRadius: "2rem" }}>{p.badge}</span>}
              <span role="img" aria-label={p.name}>{p.emoji}</span>
            </div>
            <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
              <h3 itemProp="name" style={{ fontFamily: "var(--heading-font)", fontSize: "1.15rem", color: C.text, marginBottom: "0.35rem", fontWeight: 400 }}>{p.name}</h3>
              <p itemProp="description" style={{ fontSize: "0.78rem", color: C.textLight, lineHeight: 1.6, marginBottom: "1rem", fontFamily: "var(--body-font)" }}>{p.desc}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="price" content={p.priceNum} style={{ fontFamily: "var(--heading-font)", fontSize: "1.4rem", color: C.deepRose, fontWeight: 600 }}>{p.price}</span>
                  <meta itemProp="priceCurrency" content="INR" />
                </div>
                <a href={`https://wa.me/${WA_NUM}?text=Hi! I want to order the ${p.name} 🎀`} target="_blank" rel="noopener noreferrer" className="order-btn"
                  aria-label={`Order ${p.name} on WhatsApp`}
                  style={{ background: C.deepRose, color: "white", padding: "0.5rem 1.1rem", borderRadius: "2rem", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", transition: "background 0.3s", fontFamily: "var(--body-font)" }}>
                  Order
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
