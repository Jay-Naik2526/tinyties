import { useState } from "react";

const C = {
  deepRose: "#9e5a6a", gold: "#c9a84c", goldLight: "#e8d5a3",
  softPink: "#faeef1", text: "#4a3035", textLight: "#8a6870",
};

const WA_NUM = "917888684081";

const categories = ["All", "Bracelets", "Necklaces"];

const products = [
  {
    image: "/images/friendship-bracelet.jpeg",
    badge: "Pair Deal",
    name: "Classic Friendship Bracelet Duo",
    desc: "Beautifully hand-strung matching beaded bracelets to share. Buy one for ₹89, or get the matching pair for ₹159!",
    price: "₹89 / ₹159 Pair",
    priceNum: 89,
    cat: "Bracelets"
  },
  {
    image: "/images/star-wars-1.jpeg",
    badge: "New",
    name: "Star Wars Galactic Edition 1 Bracelet",
    desc: "Unleash the force with this sleek, galaxy-inspired dark beaded bracelet. Perfect for daily wear.",
    price: "₹49",
    priceNum: 49,
    cat: "Bracelets"
  },
  {
    image: "/images/star-wars-2.jpeg",
    badge: "New",
    name: "Star Wars Galactic Edition 2 Bracelet",
    desc: "A galactic-themed bracelet featuring classic metallic spacers and custom dark beads.",
    price: "₹49",
    priceNum: 49,
    cat: "Bracelets"
  },
  {
    image: "/images/evil-eye.jpeg",
    badge: "Popular",
    name: "Mystic Evil Eye Protection Bracelet",
    desc: "Keep negative vibes away with this gorgeous protection charm, crafted with glass evil eye beads.",
    price: "₹89",
    priceNum: 89,
    cat: "Bracelets"
  },
  {
    image: "/images/sunshine.jpeg",
    badge: "Bestseller",
    name: "Radiant Sunshine Bloom Bracelet",
    desc: "Bring warm, bright rays wherever you go with this cheerful yellow-and-white flower-beaded bracelet.",
    price: "₹89",
    priceNum: 89,
    cat: "Bracelets"
  },
  {
    image: "/images/sea-range-1.jpeg",
    badge: "Ocean Vibes",
    name: "Sea Range Cobalt Wave Bracelet",
    desc: "Inspired by deep ocean waters, hand-strung with rich cobalt blue and white glass beads.",
    price: "₹49",
    priceNum: 49,
    cat: "Bracelets"
  },
  {
    image: "/images/sea-range-2.jpeg",
    badge: "Ocean Vibes",
    name: "Sea Range Golden Shore Bracelet",
    desc: "Elevated coastal bracelet blending rich blue beads with warm golden accents for a sunny beach day look.",
    price: "₹89",
    priceNum: 89,
    cat: "Bracelets"
  },
  {
    image: "/images/sea-range-neckpeice.jpeg",
    badge: "Statement Piece",
    name: "Sea Range Ocean Breeze Necklace",
    desc: "A stunning ocean-inspired beaded necklace featuring alternating cobalt and soft white beads. Comes with an adjustable extender.",
    price: "₹129",
    priceNum: 129,
    cat: "Necklaces"
  },
  {
    image: "/images/solid-stack-bracelet.jpeg",
    badge: "Stackable",
    name: "Solid Stack Candy Pop Bracelet",
    desc: "A vibrant, colorful solid bead stack designed to add a splash of joy and playful color to your wrist.",
    price: "₹69",
    priceNum: 69,
    cat: "Bracelets"
  },
  {
    image: "/images/solid-stack-bracelet-2.jpeg",
    badge: "Stackable",
    name: "Solid Stack Pastel Hue Bracelet",
    desc: "A dreamy, subtle stack featuring soft pastel tones, perfect for layering with your other jewelry.",
    price: "₹69",
    priceNum: 69,
    cat: "Bracelets"
  }
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
            <div style={{ height: 260, background: "#fdf8f5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              {p.badge && <span style={{ position: "absolute", top: "0.8rem", left: "0.8rem", background: C.deepRose, color: "white", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.7rem", borderRadius: "2rem", zIndex: 2 }}>{p.badge}</span>}
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} className="product-image" />
            </div>
            <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
              <h3 itemProp="name" style={{ fontFamily: "var(--heading-font)", fontSize: "1.15rem", color: C.text, marginBottom: "0.35rem", fontWeight: 400 }}>{p.name}</h3>
              <p itemProp="description" style={{ fontSize: "0.78rem", color: C.textLight, lineHeight: 1.6, marginBottom: "1rem", fontFamily: "var(--body-font)", minHeight: "3.2rem" }}>{p.desc}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="price" content={p.priceNum} style={{ fontFamily: "var(--heading-font)", fontSize: "1.3rem", color: C.deepRose, fontWeight: 600 }}>{p.price}</span>
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
