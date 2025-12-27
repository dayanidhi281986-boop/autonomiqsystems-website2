import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showPopup, setShowPopup] = useState(null);
  const [securityLevel, setSecurityLevel] = useState(1);
  const [quantumMatrix, setQuantumMatrix] = useState([]);

  // Quantum matrix animation
  useEffect(() => {
    const matrix = [];
    for (let i = 0; i < 50; i++) {
      matrix.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.5 + Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    setQuantumMatrix(matrix);
  }, []);

  const quantumServices = [
    {
      title: "QUANTUM STRATEGY VAULT",
      icon: "🧠",
      subtitle: "AI‑Orchestrated Transformation",
      metrics: "4x roadmap velocity • 35% TCO compression",
      capabilities: [
        "Hybrid/multi‑cloud reference architectures",
        "Quantum‑safe migration blueprints", 
        "Zero‑trust security hardening",
        "10‑year cost curve optimization",
        "Regulator‑ready compliance matrices"
      ]
    },
    {
      title: "AIOPS QUANTUM CORE", 
      icon: "⚙️",
      subtitle: "Predictive Operations Warfare",
      metrics: "95% MTTR annihilation • 40% outage prevention",
      capabilities: [
        "72hr failure prediction across 100K+ assets",
        "Auto‑remediation for K8s/VM/mainframe",
        "Quantum anomaly detection ML",
        "Capacity forecasting at petabyte scale",
        "SRE‑to‑strategist human elevation"
      ]
    },
    {
      title: "QUANTUM CODE FORGE",
      icon: "💻",
      subtitle: "10x Velocity Development Engine",
      metrics: "70% cycle compression • Zero tech debt",
      capabilities: [
        "Architecture + code + test generation",
        "Security scanning + prod deployment",
        "500‑dev‑team AI collaboration equivalent",
        "Clean architecture every sprint",
        "Infinite scalability without refactoring"
      ]
    },
    {
      title: "INFRA QUANTUM SHIELD",
      icon: "🛡️",
      subtitle: "Immutable Infrastructure Fortress",
      metrics: "25% cost annihilation • 99.999% uptime",
      capabilities: [
        "AWS/Azure/GCP/Edge unified operations",
        "Auto‑rightsizing + compliance scanning",
        "Zero config drift enforcement",
        "Petabyte‑scale capacity prediction",
        "Quantum‑resistant encryption everywhere"
      ]
    }
  ];

  return (
    <div style={{
      background: `
        radial-gradient(circle at 15% 25%, rgba(88,28,135,0.6) 0%, transparent 40%),
        radial-gradient(circle at 85% 75%, rgba(16,185,129,0.5) 0%, transparent 40%),
        radial-gradient(circle at 50% 10%, rgba(59,130,246,0.4) 0%, transparent 40%),
        radial-gradient(circle at 10% 90%, rgba(236,72,153,0.3) 0%, transparent 40%),
        linear-gradient(135deg, #0a0e1a 0%, #02060f 50%, #000105 100%)
      `,
      minHeight: "100vh",
      color: "#f8fafc",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      overflowX: "hidden",
      position: "relative"
    }}>
      
      {/* QUANTUM MATRIX OVERLAY */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
        {quantumMatrix.map((particle, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: "2px",
            height: "2px",
            background: "#3b82f6",
            borderRadius: "50%",
            opacity: particle.opacity,
            animation: `quantumFloat ${2 + particle.speed}s linear infinite`
          }} />
        ))}
      </div>

      {/* NASA‑LEVEL SECURITY HEADER */}
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10000,
        backdropFilter: "blur(40px) saturate(200%) brightness(1.1)",
        background: "rgba(5,10,20,0.97)",
        borderBottom: "1px solid rgba(59,130,246,0.4)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.8)"
      }}>
        <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          {/* PREMIUM QUANTUM LOGO SYSTEM */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "20px", textDecoration: "none" }}>
            <div style={{
              position: "relative",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(145deg, #1e3a8a, #3b82f6, #1e40af)",
              boxShadow: `
                0 0 0 4px rgba(59,130,246,0.3),
                0 0 60px rgba(59,130,246,0.6),
                inset 0 0 40px rgba(255,255,255,0.1)
              `,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <Image 
                src="/autonomiq-logo.png" 
                alt="AutonomIQ Quantum Logo" 
                fill 
                style={{ objectFit: "contain", padding: "8px" }} 
              />
            </div>
            <div>
              <div style={{ 
                fontSize: "1.3rem", 
                fontWeight: 900, 
                background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.03em",
                textShadow: "0 0 30px rgba(255,255,255,0.5)"
              }}>
                AUTONOMIQ
              </div>
              <div style={{ 
                fontSize: "0.8rem", 
                color: "#60a5fa", 
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase"
              }}>
                QUANTUM AI ENTERPRISE
              </div>
            </div>
          </a>

          {/* SECURITY LEVEL INDICATOR */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "16px",
            color: "#94a3b8",
            fontSize: "0.85rem",
            fontWeight: 600
          }}>
            <div style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: securityLevel >= 3 ? "#22c55e" : "#f59e0b",
              boxShadow: "0 0 20px currentColor",
              animation: "securityPulse 2s infinite"
            }} />
            QUANTUM LEVEL {securityLevel}/5
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <nav style={{ display: "flex", gap: "36px", fontSize: "1rem", fontWeight: 600 }}>
              {["services", "capabilities", "pricing", "security", "comparison"].map((link, i) => (
                <a 
                  key={link}
                  href={`#${link}`}
                  style={{ 
                    color: "#cbd5e1", 
                    textDecoration: "none",
                    position: "relative",
                    padding: "8px 0",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#3b82f6";
                    e.target.style.textShadow = "0 0 20px rgba(59,130,246,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#cbd5e1";
                    e.target.style.textShadow = "none";
                  }}
                >
                  {link.toUpperCase()}
                </a>
              ))}
            </nav>
            <a href="#contact" style={{
              padding: "16px 40px",
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8, #1e3a8a)",
              color: "white",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: "0 12px 50px rgba(59,130,246,0.5)",
              border: "1px solid rgba(255,255,255,0.2)"
            }}>
              ENGAGE QUANTUM CORE
            </a>
          </div>
        </div>
      </header>

      {/* HYPER‑ADVANCED HERO VAULT */}
      <section id="top" style={{ 
        padding: "280px 60px 160px", 
        minHeight: "120vh", 
        display: "flex", 
        alignItems: "center",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{ maxWidth: "2000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.8fr 1fr", gap: "100px", alignItems: "center" }}>
          
          {/* LEFT: QUANTUM HERO */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              padding: "12px 28px",
              borderRadius: 999,
              background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(16,185,129,0.2))",
              border: "2px solid rgba(59,130,246,0.6)",
              fontSize: "1rem",
              fontWeight: 800,
              marginBottom: "48px",
              boxShadow: "0 0 50px rgba(59,130,246,0.4)",
              animation: "quantumPulse 3s infinite"
            }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(45deg, #22c55e, #3b82f6)", boxShadow: "0 0 20px currentColor" }} />
              <span style={{ letterSpacing: "0.1em" }}>QUANTUM AI VAULT ACTIVATED</span>
              <div style={{ width: 6, height: 24, background: "linear-gradient(to bottom, #22c55e, transparent)", borderRadius: "3px" }} />
            </div>

            <h1 style={{
              fontSize: "clamp(5rem, 9vw, 8rem)",
              lineHeight: 1.02,
              marginBottom: "56px",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 70%, #cbd5e1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              textShadow: `
                0 0 80px rgba(255,255,255,0.4),
                0 0 120px rgba(59,130,246,0.3)
              `
            }}>
              AUTONOMIQ SYSTEMS
            </h1>

            <p style={{
              fontSize: "1.6rem",
              color: "#cbd5e1",
              maxWidth: 900,
              marginBottom: "64px",
              lineHeight: 1.6,
              fontWeight: 400,
              letterSpacing: "-0.01em"
            }}>
              The world's first <strong>quantum‑secured AI organization</strong> that obliterates traditional MNC delivery towers. 
              Autonomous agent fleets execute at <strong>enterprise hyperscale</strong> with military‑grade precision.
            </p>

            <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
              <a href="#contact" style={{
                padding: "24px 56px",
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8, #1e3a8a)",
                color: "white",
                borderRadius: 999,
                fontWeight: 800,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: `
                  0 25px 80px rgba(59,130,246,0.6),
                  inset 0 1px 0 rgba(255,255,255,0.3)
                `,
                border: "1px solid rgba(255,255,255,0.2)",
                position: "relative",
                overflow: "hidden"
              }}>
                ENGAGE QUANTUM CORE →
              </a>
              <a href="#capabilities" style={{
                padding: "22px 48px",
                border: "2px solid rgba(59,130,246,0.6)",
                color: "#f8fafc",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "1.05rem",
                textDecoration: "none",
                background: "rgba(59,130,246,0.15)",
                backdropFilter: "blur(20px)"
              }}>
                VIEW QUANTUM CAPABILITIES
              </a>
            </div>

            {/* HYPER‑ADVANCED METRICS */}
            <div style={{
              marginTop: "80px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "40px",
              fontSize: "1.2rem"
            }}>
              <div style={{ textAlign: "center", opacity: 0.9 }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#22c55e" }}>100%</div>
                <div>AI‑Driven Delivery</div>
              </div>
              <div style={{ textAlign: "center", opacity: 0.9 }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#f59e0b" }}>70-85%</div>
                <div>Cost vs MNCs</div>
              </div>
              <div style={{ textAlign: "center", opacity: 0.9 }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#ec4899" }}>99.999%</div>
                <div>Uptime Quantum SLA</div>
              </div>
            </div>
          </div>

          {/* FOUNDER QUANTUM PORTRAIT */}
          <div id="leadership" style={{
            position: "relative",
            background: `
              linear-gradient(145deg, rgba(10,15,30,0.98), rgba(5,10,20,0.95)),
              radial-gradient(circle at 30% 30%, rgba(59,130,246,0.3) 0%, transparent 60%)
            `,
            borderRadius: 40,
            border: "2px solid rgba(59,130,246,0.6)",
            padding: "64px 48px",
            boxShadow: `
              0 60px 180px rgba(10,15,30,0.95),
              0 0 100px rgba(59,130,246,0.4),
              inset 0 1px 0 rgba(255,255,255,0.1)
            `,
            backdropFilter: "blur(30px) saturate(150%)",
            animation: "vaultFloat 8s ease-in-out infinite"
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "32px", marginBottom: "40px" }}>
              <div style={{
                position: "relative",
                width: 160,
                height: 160,
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(59,130,246,0.9)",
                boxShadow: `
                  0 0 80px rgba(59,130,246,0.7),
                  inset 0 0 60px rgba(255,255,255,0.15)
                `,
                flexShrink: 0,
                background: "linear-gradient(135deg, #1e3a8a, #3b82f6)"
              }}>
                <Image
                  src="/founder-dayanidhi.png"
                  alt="Dayanidhi Dondapati - Quantum AI Architect"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 20px #22c55e"
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: "1.9rem",
                  fontWeight: 900,
                  color: "#f8fafc",
                  marginBottom: "12px",
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #ffffff, #e2e8f0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  DAYANIDHI DONDA PATI
                </h3>
                <div style={{
                  fontSize: "1.1rem",
                  color: "#60a5fa",
                  fontWeight: 800,
                  marginBottom: "8px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase"
                }}>
                  FOUNDER & QUANTUM ARCHITECT
                </div>
                <div style={{ 
                  fontSize: "0.95rem", 
                  color: "#94a3b8",
                  lineHeight: 1.6
                }}>
                  Commander of enterprise IT warfare across global banking, healthcare, and digital infrastructure. Architect of post‑human quantum delivery systems.
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p style={{
                fontSize: "1.1rem",
                color: "#cbd5e1",
                lineHeight: 1.75,
                marginBottom: "32px"
              }}>
                18+ years leading hyperscale infrastructure campaigns, AIOps implementations, and cloud conquests. Now unleashing quantum AI fleets that execute MNC‑scale delivery with military precision and zero human friction.
              </p>
            </div>

            {/* ACHIEVEMENT QUANTUM CHIPS */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "40px"
            }}>
              {[
                "Multi‑country data center + cloud estate commander",
                "AIOps/Kubernetes implementations at Fortune 500 scale", 
                "Creator of world's first quantum AI delivery organization",
                "Zero‑trust security architecture specialist"
              ].map((achievement, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 20px",
                  background: "rgba(59,130,246,0.15)",
                  borderRadius: 12,
                  border: "1px solid rgba(59,130,246,0.3)",
                  fontSize: "0.9rem",
                  color: "#e2e8f0"
                }}>
                  <div style={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: "50%", 
                    background: "#22c55e",
                    boxShadow: "0 0 12px #22c55e"
                  }} />
                  {achievement}
                </div>
              ))}
            </div>

            <blockquote style={{
              fontSize: "1rem",
              color: "#64748b",
              fontStyle: "italic",
              padding: "32px",
              background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(16,185,129,0.1))",
              borderLeft: "5px solid #3b82f6",
              borderRadius: "16px",
              position: "relative",
              lineHeight: 1.7
            }}>
              "AutonomIQ doesn't deploy consultants. We engineer quantum‑secured AI systems that execute enterprise IT better than any human organization in history."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CSS ANIMATIONS */}
      <style jsx global>{`
        @keyframes quantumPulse {
          0%, 100% { 
            box-shadow: 0 0 50px rgba(59,130,246,0.4);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 70px rgba(59,130,246,0.7);
