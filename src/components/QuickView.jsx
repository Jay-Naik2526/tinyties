import { useState, useEffect } from "react";

const C = {
  deepRose: "#9e5a6a",
  gold: "#c9a84c",
  goldLight: "#e8d5a3",
  text: "#4a3035",
  textLight: "#8a6870",
  softPink: "#faeef1",
};

export default function QuickView({ product, onClose, addToCart }) {
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, size);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose(); // Automatically close QuickView after adding for a seamless shopping experience
    }, 1000);
  };

  return (
    <div
      className="modal-overlay open"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            fontSize: "1.2rem",
            color: C.textLight,
            zIndex: 10,
            cursor: "pointer",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "none",
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = C.softPink;
            e.target.style.color = C.deepRose;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.9)";
            e.target.style.color = C.textLight;
          }}
        >
          ✕
        </button>

        {/* Left Side: Product Image */}
        <div style={{ flex: "1 1 340px", height: "400px", position: "relative", background: "#fdf8f5" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {product.badge && (
            <span
              style={{
                position: "absolute",
                top: "1.2rem",
                left: "1.2rem",
                background: C.deepRose,
                color: "white",
                fontSize: "0.58rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.25rem 0.85rem",
                borderRadius: "2rem",
                zIndex: 2,
              }}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Right Side: Product Details */}
        <div
          style={{
            flex: "1 1 340px",
            padding: "2.2rem 2.2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, display: "block", marginBottom: "0.5rem", fontFamily: "var(--body-font)" }}>
              {product.cat}
            </span>
            <h2 style={{ fontFamily: "var(--heading-font)", fontSize: "1.5rem", color: C.text, fontWeight: 400, marginBottom: "0.5rem", lineHeight: 1.25 }}>
              {product.name}
            </h2>
            <div style={{ fontSize: "1.45rem", color: C.deepRose, fontWeight: 600, fontFamily: "var(--heading-font)", marginBottom: "1.2rem" }}>
              {product.price}
            </div>
            
            <p style={{ fontSize: "0.82rem", color: C.textLight, lineHeight: 1.7, marginBottom: "1.5rem", fontFamily: "var(--body-font)" }}>
              {product.desc}
            </p>

            {/* Size Selector */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="modal-size-select" style={{ display: "block", fontSize: "0.72rem", color: C.text, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "var(--body-font)" }}>
                Select Wrist Size:
              </label>
              <select
                id="modal-size-select"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "1rem",
                  border: `1.5px solid ${C.goldLight}`,
                  outline: "none",
                  fontSize: "0.82rem",
                  fontFamily: "var(--body-font)",
                  color: C.text,
                  background: "white",
                  cursor: "pointer",
                }}
              >
                <option value="XS">Extra Small (XS) - 13-14 cm (Snug)</option>
                <option value="S">Small (S) - 14-15.5 cm (Regular)</option>
                <option value="M">Medium (M) - 15.5-17 cm (Regular - Most Common)</option>
                <option value="L">Large (L) - 17-18.5 cm (Relaxed)</option>
              </select>
            </div>

            {/* Care Guide Tab / Details */}
            <div style={{ borderTop: `1px solid rgba(232, 213, 163, 0.3)`, paddingTop: "1rem", marginBottom: "2rem" }}>
              <h4 style={{ fontSize: "0.75rem", color: C.text, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.45rem", fontFamily: "var(--body-font)", fontWeight: 600 }}>
                ✨ Details & Care Instructions
              </h4>
              <ul style={{ paddingLeft: "1.1rem", fontSize: "0.76rem", color: C.textLight, lineHeight: 1.6, fontFamily: "var(--body-font)", margin: 0 }}>
                <li>Handcrafted with premium glass seed beads and extra-durable stretch nylon cord.</li>
                <li>Avoid direct contact with water, perfume, and cosmetics to prevent tarnishing.</li>
                <li>Roll the bracelet gently on and off your wrist rather than pulling/stretching.</li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleAdd}
            disabled={added}
            className="btn-shimmer"
            style={{
              width: "100%",
              background: added ? "#4bb543" : C.deepRose,
              color: "white",
              padding: "0.9rem",
              borderRadius: "2rem",
              fontSize: "0.78rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 500,
              cursor: added ? "default" : "pointer",
              transition: "all 0.3s",
              boxShadow: "0 4px 15px rgba(158,90,106,0.2)",
              fontFamily: "var(--body-font)",
              border: "none",
            }}
          >
            {added ? "Added to Cart! 🎀" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
