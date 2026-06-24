import { useState, useEffect } from "react";

const C = {
  deepRose: "#9e5a6a",
  gold: "#c9a84c",
  goldLight: "#e8d5a3",
  text: "#4a3035",
  textLight: "#8a6870",
  softPink: "#faeef1",
};

const INSTA_DM = "https://ig.me/m/tiny._ties";


export default function Cart({ cart, isOpen, onClose, updateQuantity, removeFromCart, updateItemSize }) {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderText, setOrderText] = useState("");
  const [copied, setCopied] = useState(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock scroll on main document when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const subtotal = cart.reduce((sum, item) => sum + item.priceNum * item.quantity, 0);


  const handleCheckout = () => {
    let text = `Hi Tiny Ties! 🎀 I'd love to place an order:\n\n`;
    cart.forEach(item => {
      text += `• ${item.quantity}x ${item.name} (Size: ${item.size}) — ₹${item.priceNum * item.quantity}\n`;
    });
    text += `\nItems Total: ₹${subtotal} (excl. shipping)\n`;
    text += `Shipping charges to be confirmed.\n\n`;
    text += `Please confirm my order and share the shipping charges + UPI payment details! 💖`;
    setOrderText(text);
    setShowOrderModal(true);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(orderText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      // fallback: select text
    });
  };

  const handleOpenInstagram = () => {
    window.open(INSTA_DM, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(74, 48, 53, 0.4)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 290,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Cart Drawer */}
      <div className={`cart-drawer${isOpen ? " open" : ""}`}>
        {/* Header */}
        <div
          style={{
            padding: "1.5rem 1.75rem",
            borderBottom: `1px solid ${C.goldLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.3rem" }}>🛒</span>
            <h2 style={{ fontFamily: "var(--heading-font)", fontSize: "1.25rem", color: C.text, fontWeight: 400, margin: 0 }}>
              Your Ties
            </h2>
            <span
              style={{
                background: C.softPink,
                color: C.deepRose,
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "0.15rem 0.5rem",
                borderRadius: "1rem",
                fontFamily: "var(--body-font)",
              }}
            >
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            style={{
              fontSize: "1.2rem",
              color: C.textLight,
              cursor: "pointer",
              border: "none",
              background: "none",
              padding: "4px",
            }}
          >
            ✕
          </button>
        </div>


        {/* Items List */}
        <div
          className="cart-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1.5rem 1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {cart.length === 0 ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2rem",
              }}
            >
              <span style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎀</span>
              <h3 style={{ fontFamily: "var(--heading-font)", fontSize: "1.2rem", color: C.text, fontWeight: 400, marginBottom: "0.5rem" }}>
                Your cart is empty
              </h3>
              <p style={{ fontSize: "0.8rem", color: C.textLight, fontFamily: "var(--body-font)", maxWidth: 220, lineHeight: 1.6 }}>
                Add some handcrafted bracelets or necklaces to start tying!
              </p>
              <button
                onClick={onClose}
                className="btn-shimmer"
                style={{
                  marginTop: "1.5rem",
                  background: C.deepRose,
                  color: "white",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "2rem",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Shop Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.name}-${item.size}`}
                style={{
                  display: "flex",
                  gap: "0.85rem",
                  background: "white",
                  padding: "0.85rem",
                  borderRadius: "1rem",
                  boxShadow: "0 2px 10px rgba(158,90,106,0.04)",
                  border: "1px solid rgba(242,196,206,0.25)",
                }}
              >
                {/* Image */}
                <div style={{ width: 75, height: 75, borderRadius: "0.5rem", overflow: "hidden", background: "#fdf8f5", flexShrink: 0 }}>
                  <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                    <div>
                      <h4 style={{ fontSize: "0.85rem", color: C.text, margin: "0 0 0.2rem", fontWeight: 500, fontFamily: "var(--body-font)" }}>
                        {item.name}
                      </h4>
                      
                      {/* Size Selector in Cart */}
                      <select
                        value={item.size}
                        onChange={(e) => updateItemSize(item.name, item.size, e.target.value)}
                        style={{
                          fontSize: "0.65rem",
                          color: C.textLight,
                          border: `1px solid ${C.goldLight}`,
                          background: "none",
                          borderRadius: "0.3rem",
                          padding: "0.1rem 0.3rem",
                          outline: "none",
                          cursor: "pointer",
                          fontFamily: "var(--body-font)",
                        }}
                      >
                        <option value="XS">Size XS</option>
                        <option value="S">Size S</option>
                        <option value="M">Size M</option>
                        <option value="L">Size L</option>
                      </select>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.name, item.size)}
                      aria-label="Remove item"
                      style={{ fontSize: "0.75rem", color: C.textLight, cursor: "pointer", border: "none", background: "none" }}
                    >
                      ✕
                    </button>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.4rem" }}>
                    {/* Quantity controls */}
                    <div style={{ display: "flex", alignItems: "center", border: `1px solid ${C.goldLight}`, borderRadius: "1.5rem", background: "white" }}>
                      <button
                        onClick={() => updateQuantity(item.name, item.size, -1)}
                        style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: C.textLight, border: "none", background: "none", cursor: "pointer" }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: "0.76rem", color: C.text, minWidth: 16, textAlign: "center", fontWeight: 500, fontFamily: "var(--body-font)" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.name, item.size, 1)}
                        style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: C.textLight, border: "none", background: "none", cursor: "pointer" }}
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <span style={{ fontSize: "0.9rem", color: C.deepRose, fontWeight: 600, fontFamily: "var(--body-font)" }}>
                      ₹{item.priceNum * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary / Checkout */}
        {cart.length > 0 && (
          <div
            style={{
              padding: "1.5rem 1.75rem",
              borderTop: `1px solid ${C.goldLight}`,
              background: "white",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1rem", color: C.text, fontWeight: 500, fontFamily: "var(--body-font)" }}>
                <span>Items Total</span>
                <span style={{ color: C.deepRose, fontWeight: 600 }}>₹{subtotal}</span>
              </div>
              <div style={{
                display: "flex", alignItems: "flex-start", gap: "0.4rem",
                background: "#fff8e7", border: "1px dashed #e8d5a3",
                borderRadius: "0.75rem", padding: "0.6rem 0.85rem",
                fontSize: "0.72rem", color: C.textLight, fontFamily: "var(--body-font)", lineHeight: 1.5,
              }}>
                <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>📦</span>
                <span>Prices are <strong>exclusive of shipping.</strong> DM us to know exact shipping charges for your location.</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="btn-shimmer"
              style={{
                width: "100%",
                background: C.deepRose,
                color: "white",
                padding: "0.95rem",
                borderRadius: "2.5rem",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(158,90,106,0.2)",
                fontFamily: "var(--body-font)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
              }}
            >
              💬 Place Order via Instagram DM
            </button>
            <p style={{ textAlign: "center", fontSize: "0.62rem", color: C.textLight, marginTop: "0.75rem", fontFamily: "var(--body-font)", letterSpacing: "0.02em" }}>
              Handcrafting takes 3–5 days · Payments via UPI
            </p>
          </div>
        )}
      </div>

      {/* ===== ORDER PREVIEW MODAL ===== */}
      {showOrderModal && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowOrderModal(false)}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(74,48,53,0.55)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              zIndex: 500,
            }}
          />
          {/* Modal box */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Order preview"
            style={{
              position: "fixed",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 510,
              background: "white",
              borderRadius: "1.5rem",
              padding: "2rem 1.75rem 1.75rem",
              maxWidth: 420,
              width: "calc(100vw - 2rem)",
              boxShadow: "0 20px 60px rgba(74,48,53,0.25)",
              fontFamily: "var(--body-font)",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.4rem" }}>🎀</span>
                <h3 style={{ fontFamily: "var(--heading-font)", fontSize: "1.1rem", color: C.text, fontWeight: 400, margin: 0 }}>
                  Your Order
                </h3>
              </div>
              <button
                onClick={() => setShowOrderModal(false)}
                aria-label="Close order preview"
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem", color: C.textLight, lineHeight: 1 }}
              >
                ✕
              </button>
            </div>

            {/* Instruction */}
            <p style={{ fontSize: "0.75rem", color: C.textLight, marginBottom: "1rem", lineHeight: 1.6 }}>
              Copy this message and paste it in our Instagram DM:
            </p>

            {/* Order message box */}
            <div
              style={{
                background: C.softPink,
                border: `1px solid ${C.goldLight}`,
                borderRadius: "1rem",
                padding: "1rem 1.2rem",
                fontSize: "0.78rem",
                color: C.text,
                lineHeight: 1.8,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                maxHeight: 220,
                overflowY: "auto",
                marginBottom: "1.25rem",
                fontFamily: "var(--body-font)",
              }}
            >
              {orderText}
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              style={{
                width: "100%",
                background: copied ? "#4CAF50" : C.goldLight,
                color: copied ? "white" : C.text,
                border: "none",
                borderRadius: "2rem",
                padding: "0.75rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "var(--body-font)",
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
              }}
            >
              {copied ? "✅ Copied!" : "📋 Copy Message"}
            </button>

            {/* Instagram DM button */}
            <button
              onClick={handleOpenInstagram}
              className="btn-shimmer"
              style={{
                width: "100%",
                background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                color: "white",
                border: "none",
                borderRadius: "2rem",
                padding: "0.85rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "var(--body-font)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              📸 Open Instagram DM
            </button>

            <p style={{ textAlign: "center", fontSize: "0.6rem", color: C.textLight, marginTop: "0.9rem", lineHeight: 1.6 }}>
              Copy the message first → then open DM → paste &amp; send!
            </p>
          </div>
        </>
      )}
    </>
  );
}
