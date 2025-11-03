import React, { useState, useRef } from "react";

const rows = [
  { time: "8:30 AM", event: "Opening Ceremony/Breakfast" },
  { time: "9:00 AM", event: "Start Hacking + Workshop" },
  { time: "9:30 AM", event: "Capture the Flag Starts" },
  { time: "11:00 AM", event: "Mini Games" },
  { time: "12:00 PM", event: "Lunch (provided by MVHacks)" },
  { time: "3:00 PM", event: "Mini Game" },
  { time: "5:30 PM", event: "Guest Speaker" },
  { time: "7:15 PM", event: "Submissions + Voting and Judging/Dinner" },
  { time: "8:00 PM", event: "Closing Ceremony" }
];

export default function Schedule() {
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const current = rows[Math.round(value)];
  const pct = (value / (rows.length - 1)) * 100;

  const handleMove = (x: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    setValue((Math.max(0, Math.min(x - rect.left, rect.width)) / rect.width) * (rows.length - 1));
  };

  React.useEffect(() => {
    if (!isDragging) return;
    const move = (e: MouseEvent | TouchEvent) => handleMove('touches' in e ? e.touches[0].clientX : e.clientX);
    const up = () => setIsDragging(false);
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", up);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", up);
    };
  }, [isDragging]);

  return (
    <div style={{ padding: "5%", textAlign: "center" }}>
      <h2 style={{ color: "#fff", marginBottom: "2rem", fontSize: "2.5rem", fontWeight: "bold", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>EVENT SCHEDULE</h2>
      <div style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "3rem", fontWeight: "500", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
        {current.time} — {current.event}
      </div>
      <div style={{ width: "90%", margin: "0 auto", padding: "20px 0" }}>
        <div ref={sliderRef} onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }} onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }} style={{ position: "relative", width: "100%", height: "60px", cursor: "pointer", userSelect: "none" }}>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "60px", transform: "translateY(-50%)", background: "linear-gradient(180deg, #8B7355 0%, #A0826D 50%, #8B7355 100%)", borderRadius: "30px", boxShadow: "inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)" }} />
          <div style={{ position: "absolute", top: "50%", left: 0, height: "60px", width: `${pct}%`, transform: "translateY(-50%)", background: "linear-gradient(90deg, #FF7F50 0%, #FF6B6B 50%, #FFB347 100%)", borderRadius: "30px", boxShadow: "0 0 20px rgba(255, 127, 80, 0.4), inset 0 2px 4px rgba(255,255,255,0.3)" }} />
          <div style={{ position: "absolute", top: "50%", left: `${pct}%`, width: "80px", height: "70px", transform: "translate(-50%, -50%)", cursor: "grab", zIndex: 10, filter: isDragging ? "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))" : "drop-shadow(0 4px 10px rgba(0,0,0,0.4))" }} onMouseEnter={(e) => !isDragging && (e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.08)")} onMouseLeave={(e) => !isDragging && (e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)")}>
            <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
              <rect x="10" y="35" width="60" height="30" rx="3" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
              <line x1="10" y1="42" x2="70" y2="42" stroke="#654321" strokeWidth="1.5"/>
              <line x1="10" y1="50" x2="70" y2="50" stroke="#654321" strokeWidth="1.5"/>
              <line x1="10" y1="58" x2="70" y2="58" stroke="#654321" strokeWidth="1.5"/>
              <path d="M 10 35 Q 10 15, 40 10 Q 70 15, 70 35 L 70 40 L 10 40 Z" fill="#A0522D" stroke="#654321" strokeWidth="2"/>
              <path d="M 10 35 Q 10 20, 40 15 Q 70 20, 70 35" stroke="#654321" strokeWidth="1.5" fill="none"/>
              <path d="M 12 32 Q 12 22, 40 18 Q 68 22, 68 32" stroke="#654321" strokeWidth="1" fill="none" opacity="0.7"/>
              <rect x="35" y="30" width="10" height="15" rx="2" fill="url(#g)" stroke="#B8860B" strokeWidth="1.5"/>
              <circle cx="40" cy="37.5" r="3" fill="#8B7500"/>
              <rect x="8" y="36" width="64" height="4" fill="url(#g)" opacity="0.9"/>
              <rect x="8" y="60" width="64" height="4" fill="url(#g)" opacity="0.9"/>
              <circle cx="12" cy="38" r="3" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
              <circle cx="68" cy="38" r="3" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
              <circle cx="12" cy="62" r="3" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
              <circle cx="68" cy="62" r="3" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
              <ellipse cx="30" cy="20" rx="15" ry="8" fill="rgba(255, 255, 255, 0.2)"/>
              <defs><linearGradient id="g"><stop offset="0%" stopColor="#FFD700"/><stop offset="50%" stopColor="#FFA500"/><stop offset="100%" stopColor="#FFD700"/></linearGradient></defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}