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

export default function Shop({ fadeStyle, addToCart, onQuickView }) {
  const [activeCat, setActiveCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredAndSorted = products
    .filter(p => activeCat === "All" ? true : p.cat === activeCat)
    .filter(p => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;
      return p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.priceNum - b.priceNum;
      if (sortBy === "price-high") return b.priceNum - a.priceNum;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return 0;
    });

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
            onClick={() => { setActiveCat(cat); setSearchQuery(""); }}
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

      {/* Search and Sort controls */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        maxWidth: 1100,
        margin: "0 auto 2.5rem",
        flexWrap: "wrap",
        background: "white",
        padding: "1rem 1.5rem",
        borderRadius: "1.5rem",
        boxShadow: "0 2px 20px rgba(158,90,106,0.04)",
        border: "1px solid rgba(242,196,206,0.25)"
      }}>
        {/* Search Input */}
        <div style={{ position: "relative", flex: "1 1 280px" }}>
          <span style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.9rem", color: C.textLight }}>
            🔍
          </span>
          <input
            type="text"
            placeholder="Search collection..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "0.65rem 1.1rem 0.65rem 2.5rem",
              borderRadius: "2rem",
              border: `1px solid ${C.goldLight}`,
              outline: "none",
              fontSize: "0.82rem",
              fontFamily: "var(--body-font)",
              color: C.text,
              background: "#fdf8f5",
              transition: "border-color 0.3s",
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                fontSize: "0.85rem",
                color: C.textLight,
                cursor: "pointer",
                padding: "4px"
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <label htmlFor="sort-select" style={{ fontSize: "0.72rem", color: C.textLight, fontWeight: 500, fontFamily: "var(--body-font)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Sort:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "2rem",
              border: `1px solid ${C.goldLight}`,
              outline: "none",
              fontSize: "0.8rem",
              fontFamily: "var(--body-font)",
              color: C.text,
              background: "white",
              cursor: "pointer",
            }}
          >
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Products Grid / Empty State */}
      {filteredAndSorted.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 2rem", background: "white", borderRadius: "2rem", maxWidth: 600, margin: "0 auto", boxShadow: "0 2px 20px rgba(158,90,106,0.05)", border: "1px solid rgba(242,196,206,0.25)" }}>
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>🔍</span>
          <h3 style={{ fontFamily: "var(--heading-font)", fontSize: "1.25rem", color: C.text, fontWeight: 400, marginBottom: "0.5rem" }}>No matches found</h3>
          <p style={{ fontSize: "0.82rem", color: C.textLight, fontFamily: "var(--body-font)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            We couldn't find anything matching "{searchQuery}". Try adjusting your keywords or category filters!
          </p>
          <button
            onClick={() => { setSearchQuery(""); setActiveCat("All"); }}
            className="btn-shimmer"
            style={{
              background: C.deepRose,
              color: "white",
              padding: "0.6rem 1.5rem",
              borderRadius: "2rem",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
            }}
          >
            Reset Search
          </button>
        </div>
      ) : (
        <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem", maxWidth: 1100, margin: "0 auto" }}>
          {filteredAndSorted.map((p, i) => (
            <article key={p.name} className="product-card" data-id={`p${i}`}
              itemScope itemType="https://schema.org/Product"
              style={{ background: "white", borderRadius: "1.5rem", overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s", boxShadow: "0 2px 20px rgba(158,90,106,0.08)", ...fadeStyle(`p${i}`, i * 0.08) }}>
              <div style={{ height: 260, background: "#fdf8f5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", cursor: "pointer" }} onClick={() => onQuickView(p)}>
                {p.badge && <span style={{ position: "absolute", top: "0.8rem", left: "0.8rem", background: C.deepRose, color: "white", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.7rem", borderRadius: "2rem", zIndex: 2 }}>{p.badge}</span>}
                <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} className="product-image" />
              </div>
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <div style={{ cursor: "pointer" }} onClick={() => onQuickView(p)}>
                  <h3 itemProp="name" style={{ fontFamily: "var(--heading-font)", fontSize: "1.15rem", color: C.text, marginBottom: "0.35rem", fontWeight: 400 }}>{p.name}</h3>
                  <p itemProp="description" style={{ fontSize: "0.78rem", color: C.textLight, lineHeight: 1.6, marginBottom: "1rem", fontFamily: "var(--body-font)", minHeight: "3.2rem" }}>{p.desc}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer" style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                    <span itemProp="price" content={p.priceNum} style={{ fontFamily: "var(--heading-font)", fontSize: "1.3rem", color: C.deepRose, fontWeight: 600 }}>{p.price}</span>
                    <meta itemProp="priceCurrency" content="INR" />
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
                    <button onClick={() => onQuickView(p)} aria-label={`View details of ${p.name}`} style={{ flex: 1, border: `1.5px solid ${C.deepRose}`, color: C.deepRose, background: "none", padding: "0.5rem 0", borderRadius: "2rem", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", transition: "all 0.3s", fontFamily: "var(--body-font)", cursor: "pointer" }} onMouseEnter={e => { e.target.style.background = C.softPink; }} onMouseLeave={e => { e.target.style.background = "none"; }}>
                      Details
                    </button>
                    <button onClick={() => addToCart(p, "M")} className="btn-shimmer" aria-label={`Add ${p.name} to cart`} style={{ flex: 1.4, background: C.deepRose, color: "white", padding: "0.5rem 0", borderRadius: "2rem", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", transition: "background 0.3s", fontFamily: "var(--body-font)", cursor: "pointer", border: "none" }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
