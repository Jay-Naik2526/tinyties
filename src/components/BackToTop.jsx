import { useState, useEffect } from "react";

const C = { deepRose: "#9e5a6a", gold: "#c9a84c" };

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed", bottom: "6rem", left: "2rem", zIndex: 200,
        width: 44, height: 44, borderRadius: "50%",
        background: C.gold, color: "white", border: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
        cursor: "pointer", transition: "all 0.3s",
        fontSize: "1.2rem", fontFamily: "var(--body-font)",
        animation: "fadeInUp 0.3s ease",
      }}>
      ↑
    </button>
  );
}
