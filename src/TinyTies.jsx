import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Shop from "./components/Shop";
import HowToOrder from "./components/HowToOrder";
import CustomCTA from "./components/CustomCTA";
import Reviews from "./components/Reviews";
import SizeGuide from "./components/SizeGuide";
import FAQ from "./components/FAQ";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import SocialProof from "./components/SocialProof";
import BackToTop from "./components/BackToTop";
import Cart from "./components/Cart";
import QuickView from "./components/QuickView";

const INSTA_DM = "https://ig.me/m/tiny._ties";

const marqueeItems = [
  "Handmade Bracelets ✦", "Custom Orders Open ✦", "Beaded Necklaces ✦",
  "Friendship Bracelets ✦", "Handmade with Heart ✦", "Gift for Her ✦",
  "Made to Order ✦", "Made in India ✦",
];

export default function TinyTies() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [badgeAnimate, setBadgeAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.id]: true }));
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-id]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToCart = (product, size = "M") => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.name === product.name && item.size === size
      );
      if (existingIdx > -1) {
        const newCart = [...prevCart];
        newCart[existingIdx] = {
          ...newCart[existingIdx],
          quantity: newCart[existingIdx].quantity + 1,
        };
        return newCart;
      }
      return [...prevCart, { ...product, size, quantity: 1 }];
    });
    // Auto-open cart so customer sees what they just added
    setCartOpen(true);
    // Trigger cart badge animation bounce
    setBadgeAnimate(true);
    setTimeout(() => setBadgeAnimate(false), 300);
  };

  const removeFromCart = (name, size) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.name === name && item.size === size)));
  };

  const updateQuantity = (name, size, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.name === name && item.size === size) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const updateItemSize = (name, oldSize, newSize) => {
    if (oldSize === newSize) return;
    setCart((prevCart) => {
      const itemToMoveIdx = prevCart.findIndex((item) => item.name === name && item.size === oldSize);
      if (itemToMoveIdx === -1) return prevCart;

      const itemToMove = prevCart[itemToMoveIdx];
      const otherItems = prevCart.filter((_, idx) => idx !== itemToMoveIdx);

      const existingNewSizeIdx = otherItems.findIndex((item) => item.name === name && item.size === newSize);
      if (existingNewSizeIdx > -1) {
        otherItems[existingNewSizeIdx] = {
          ...otherItems[existingNewSizeIdx],
          quantity: otherItems[existingNewSizeIdx].quantity + itemToMove.quantity,
        };
        return otherItems;
      }

      return [...otherItems, { ...itemToMove, size: newSize }];
    });
  };

  const fadeStyle = (id, delay = 0) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <div style={{ fontFamily: "var(--heading-font)", background: "var(--cream)", color: "var(--text)", overflowX: "hidden", margin: 0 }}>

      {/* Skip Navigation (Accessibility) */}
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      <Nav scrolled={scrolled} cart={cart} badgeAnimate={badgeAnimate} onCartClick={() => setCartOpen(true)} />

      <main id="main-content">
        <Hero />

        {/* Marquee */}
        <div aria-hidden="true" style={{ background: "#9e5a6a", padding: "0.75rem 0", overflow: "hidden" }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 22s linear infinite" }}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "white", padding: "0 2.5rem", flexShrink: 0, fontFamily: "var(--body-font)" }}>{item}</span>
            ))}
          </div>
        </div>

        <About fadeStyle={fadeStyle} />
        <Shop fadeStyle={fadeStyle} addToCart={addToCart} onQuickView={setQuickViewProduct} />
        <HowToOrder fadeStyle={fadeStyle} />
        <CustomCTA fadeStyle={fadeStyle} />
        <SizeGuide fadeStyle={fadeStyle} />
        <Reviews fadeStyle={fadeStyle} />
        <FAQ fadeStyle={fadeStyle} />
        <Instagram fadeStyle={fadeStyle} />
      </main>

      <Footer />

      {/* Floating Instagram DM */}
      <a href={INSTA_DM} target="_blank" rel="noopener noreferrer"
        aria-label="Chat with us on Instagram DM"
        style={{
          position: "fixed", bottom: "2rem", right: "2rem", zIndex: 200,
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(220,39,108,0.4)",
          animation: "pulseInsta 3s ease-in-out infinite", fontSize: "1.8rem",
        }}>
        💬
      </a>

      <BackToTop />
      <SocialProof />

      {/* Cart side panel and Quick View Modal */}
      <Cart
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        updateItemSize={updateItemSize}
      />

      <QuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        addToCart={addToCart}
      />
    </div>
  );
}
