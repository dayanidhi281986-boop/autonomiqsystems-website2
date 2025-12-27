import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showPopup, setShowPopup] = useState(null);

  return (
    <div style={{
      background: "linear-gradient(135deg, #0a0f1e 0%, #020617 50%, #000000 100%)",
      minHeight: "100vh",
      color: "#f8fafc",
      fontFamily: "'SF Pro Display', sans-serif",
      overflowX: "hidden"
    }}>
      
      {/* FIXED HEADER */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(30px)",
        background: "rgba(10,15,30,0.95)",
        borderBottom: "1px solid rgba(59,130,246,0.3)"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none" }}>
            <div style={{
              position: "relative",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
              boxShadow: "0 0 40px rgba(59,130,246,0.6)",
              overflow: "hidden"
            }}>
              <Image src="/autonomiq-logo.png" alt="AutonomIQ" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#f8fafc" }}>AUTONOMIQ</div>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>QUANTUM AI SYSTEMS</div>
            </div>
          </a>
          <nav style={{ display: "flex", gap: "24px" }}>
            <a href="#services" style={{ color: "#cbd5e1", textDecoration: "none" }}>SERVICES</a>
            <a href="#industries" style={{ color: "#cbd5e1", textDecoration: "none" }}>INDUSTRIES</a>
            <a href="#pricing" style={{ color: "#cbd5e1", textDecoration: "none" }}>PRICING</a>
            <a href="#leadership" style={{ color: "#cbd5e1", textDecoration: "none" }}>LEADERSHIP</a>
            <a href="#comparison" style={{ color: "#cbd5e1", textDecoration: "none" }}>COMPARISON</a>
            <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none" }}>CONTACT</a>
          </nav>
          <a href="#contact" style={{
            padding: "12px 32px",
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            color: "white",
            borderRadius: 999,
            fontWeight: 600,
            textDecoration: "none"
          }}>
            ENTER QUANTUM MODE
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "200px 40px 120px", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "60px" }}>
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(59,130,246,0.2)",
              border: "1px solid rgba(59,130,246,0.5)",
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: "32px"
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
              QUANTUM AI DELIVERY • ZERO HUMAN DEPENDENCY
            </div>
            <h1 style={{
              fontSize: "clamp(4rem, 8vw, 6rem)",
              lineHeight: 1.1,
              marginBottom: "32px",
              background: "linear-gradient(135deg, #ffffff, #f1f5f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800
            }}>
              AUTONOMIQ SYSTEMS
            </h1>
            <p style={{ fontSize: "1.3rem", color: "#cbd5e1", maxWidth: 700, marginBottom: "40px" }}>
              World's first quantum AI organization replacing MNC delivery towers. 80% faster. 70% cheaper. Zero attrition risk.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#contact" style={{
                padding: "16px 40px",
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                color: "white",
                borderRadius: 999,
                fontWeight: 600,
                textDecoration: "none"
              }}>
                ACTIVATE QUANTUM AI
              </a>
              <a href="#pricing" style={{
                padding: "15px 36px",
                border: "2px solid #3b82f6",
                color: "#f8fafc",
                borderRadius: 999,
                fontWeight: 600,
                textDecoration: "none",
                background: "rgba(59,130,246,0.1)"
              }}>
                VIEW PRICING
              </a>
            </div>
          </div>
          
          {/* LEADERSHIP */}
          <div id="leadership" style={{
            background: "rgba(15,23,42,0.95)",
            borderRadius: 24,
            border: "1px solid rgba(59,130,246,0.4)",
            padding: "40px",
            boxShadow: "0 40px 120px rgba(15,23,42,0.8)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "24px" }}>
              <div style={{
                position: "relative",
                width: 120,
                height: 120,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #3b82f6"
              }}>
                <Image src="/founder-dayanidhi.png" alt="Founder" fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "4px" }}>DAYANIDHI DONDA PATI</h3>
                <div style={{ fontSize: "0.95rem", color: "#60a5fa", fontWeight: 600 }}>FOUNDER & QUANTUM AI GOVERNOR</div>
              </div>
            </div>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
              18+ years leading enterprise IT operations, cloud infrastructure, and AIOps implementations. Architect of the world's first quantum AI delivery organization.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "3rem", textAlign: "center", marginBottom: "16px", color: "#60a5fa" }}>QUANTUM SERVICES</h2>
          <p style={{ textAlign: "center", color: "#94a3b8", marginBottom: "60px" }}>One AI architecture replaces 17 traditional vendors</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
            {[
              { title: "QUANTUM CONSULTING", icon: "🧠", desc: "4x faster enterprise roadmaps", impact: "35% TCO reduction" },
              { title: "AIOPS WAR ROOM", icon: "⚙️", desc: "95% MTTR reduction", impact: "40% fewer outages" },
              { title: "QUANTUM DEV ENGINE", icon: "💻
