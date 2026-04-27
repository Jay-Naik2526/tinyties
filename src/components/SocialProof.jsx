import { useState, useEffect } from "react";

const C = { deepRose: "#9e5a6a", gold: "#c9a84c", text: "#4a3035", textLight: "#8a6870" };

const names = ["Priya", "Ananya", "Shreya", "Neha", "Riya", "Kavya", "Meera", "Isha"];
const cities = ["Mumbai", "Delhi", "Pune", "Bangalore", "Jaipur", "Hyderabad", "Chennai"];
const items = ["Pastel Beaded Bracelet", "Gold Charm Bracelet", "Beaded Ring", "Friendship Set", "Floral Bracelet"];

function randomToast() {
  return `${names[Math.floor(Math.random() * names.length)]} from ${cities[Math.floor(Math.random() * cities.length)]} just ordered a ${items[Math.floor(Math.random() * items.length)]} 🎀`;
}

export default function SocialProof() {
  const [toast, setToast] = useState(null);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Show first toast after 8s, then every 25-40s
    const showToast = () => {
      setExiting(false);
      setToast(randomToast());
      setTimeout(() => {
        setExiting(true);
        setTimeout(() => setToast(null), 500);
      }, 4000);
    };

    const firstTimer = setTimeout(showToast, 8000);
    const interval = setInterval(showToast, 30000);
    return () => { clearTimeout(firstTimer); clearInterval(interval); };
  }, []);

  if (!toast) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className={`toast${exiting ? " exiting" : ""}`}>
        <div style={{ fontFamily: "var(--body-font)", fontSize: "0.76rem", color: C.text, lineHeight: 1.5 }}>
          {toast}
        </div>
      </div>
    </div>
  );
}
