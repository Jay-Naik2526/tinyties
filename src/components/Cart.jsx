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
const FREE_SHIPPING_LIMIT = 200;
const SHIPPING_FEE = 40;

export default function Cart({ cart, isOpen, onClose, updateQuantity, removeFromCart, updateItemSize }) {
  const [checkoutStatus, setCheckoutStatus] = useState("idle");

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
  const isFreeShipping = subtotal >= FREE_SHIPPING_LIMIT;
  const shippingCharge = cart.length === 0 ? 0 : (isFreeShipping ? 0 : SHIPPING_FEE);
  const total = subtotal + shippingCharge;
  const progressPercent = Math.min((subtotal / FREE_SHIPPING_LIMIT) * 100, 100);

  const handleCheckout = () => {
    let orderText = `Hi Tiny Ties! 🎀 I'd love to place an order for the following items:\n\n`;
    
    cart.forEach(item => {
      orderText += `• ${item.quantity}x ${item.name} (Size: ${item.size}) - ₹${item.priceNum * item.quantity}\n`;
    });

    orderText += `\nSubtotal: ₹${subtotal}`;
    orderText += `\nShipping: ${isFreeShipping ? "FREE" : `₹${SHIPPING_FEE}`}`;
    orderText += `\nTotal Order Value: ₹${total}\n\n`;
    orderText += `Please confirm my order and share payment/UPI details! 💖`;

    navigator.clipboard.writeText(orderText)
      .then(() => {
        setCheckoutStatus("copied");
        setTimeout(() => {
          setCheckoutStatus("idle");
        }, 4000);
        window.open(INSTA_DM, "_blank", "noopener,noreferrer");
      })
      .catch((err) => {
        console.error("Failed to copy order details: ", err);
        window.open(INSTA_DM, "_blank", "noopener,noreferrer");
      });
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

        {/* Free Shipping Tracker */}
        {cart.length > 0 && (
          <div style={{ padding: "1.2rem 1.75rem", background: "#fdf8f5", borderBottom: "1px solid rgba(232,213,163,0.2)" }}>
            <div style={{ fontSize: "0.78rem", color: C.text, fontFamily: "var(--body-font)", marginBottom: "0.5rem" }}>
              {isFreeShipping ? (
                <span>🎉 Yay! You've unlocked <strong>FREE SHIPPING!</strong></span>
              ) : (
                <span>You are just <strong>₹{FREE_SHIPPING_LIMIT - subtotal}</strong> away from <strong>FREE SHIPPING!</strong></span>
              )}
            </div>
            <div style={{ width: "100%", height: 6, background: "#faeef1", borderRadius: 3, overflow: "hidden" }}>
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: "100%",
                  background: C.deepRose,
                  borderRadius: 3,
                  transition: "width 0.4s ease-out",
                }}
              />
            </div>
          </div>
        )}

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
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: C.textLight, fontFamily: "var(--body-font)" }}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: C.textLight, fontFamily: "var(--body-font)" }}>
                <span>Shipping</span>
                <span>{isFreeShipping ? "FREE" : `₹${SHIPPING_FEE}`}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.05rem", color: C.text, fontWeight: 500, fontFamily: "var(--body-font)", borderTop: "1px dashed rgba(232,213,163,0.3)", paddingTop: "0.6rem" }}>
                <span>Total Order Value</span>
                <span style={{ color: C.deepRose, fontWeight: 600 }}>₹{total}</span>
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
              {checkoutStatus === "copied" ? "✨ Order Copied! Opening Instagram..." : "💬 Place Order on Instagram DM"}
            </button>
            <p style={{ textAlign: "center", fontSize: "0.62rem", color: C.textLight, marginTop: "0.75rem", fontFamily: "var(--body-font)", letterSpacing: "0.02em" }}>
              {checkoutStatus === "copied" 
                ? "✨ Order details copied to clipboard! Just paste it in the DM."
                : "Order summary will be copied to your clipboard. Paste it in the Instagram DM."}
            </p>
            <p style={{ textAlign: "center", fontSize: "0.62rem", color: C.textLight, marginTop: "0.4rem", fontFamily: "var(--body-font)", letterSpacing: "0.02em" }}>
              Handcrafting takes 3-5 days. Payments are collected via UPI.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
