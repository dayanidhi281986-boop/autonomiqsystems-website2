import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showPopup, setShowPopup] = useState(null);

  return (
    <div
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(59,130,246,0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(34,197,94,0.35) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(168,85,247,0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0a0f1e 0%, #020617 50%, #000000 100%)
        `,
        minHeight: "100vh",
        color: "#f8fafc",
        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* PARTICLE BACKGROUND ANIMATION */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(99,102,241,0.3) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(34,197,94,0.25) 0%, transparent 50%),
            radial-gradient(circle at 70% 10%, rgba(236,72,153,0.2) 0%, transparent 50%)
          `,
          animation: "float 20s ease-in-out infinite",
        }}
      />
      
      {/* MAC-LEVEL HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          backdropFilter: "blur(30px) saturate(180%)",
          background: "rgba(10,15,30,0.95)",
          borderBottom: "1px solid rgba(59,130,246,0.3)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* QUANTUM LOGO */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none" }}>
            <div
              style={{
                position: "relative",
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
                boxShadow: "0 0 40px rgba(59,130,246,0.6)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/autonomiq-logo.png"
                alt="AutonomIQ Quantum AI"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <div style={{ 
                fontSize: "1.1rem", 
                fontWeight: 800, 
                background: "linear-gradient(135deg, #ffffff, #e2e8f0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em"
              }}>
                AUTONOMIQ
              </div>
              <div style={{ 
                fontSize: "0.75rem", 
                color: "#94a3b8", 
                fontWeight: 500,
                letterSpacing: "0.1em"
              }}>
                QUANTUM AI SYSTEMS
              </div>
            </div>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <nav style={{ display: "flex", gap: "28px", fontSize: "0.95rem", fontWeight: 500 }}>
              {["services", "industries", "pricing", "leadership", "comparison"].map((link) => (
                <a 
                  key={link}
                  href={`#${link}`}
                  style={{ 
                    color: "#cbd5e1", 
                    textDecoration: "none", 
                    position: "relative",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.color = "#3b82f6"}
                  onMouseLeave={(e) => e.target.style.color = "#cbd5e1"}
                >
                  {link.toUpperCase().replace(/^\w/, c => c.toUpperCase())}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              style={{
                padding: "12px 32px",
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                color: "white",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow: "0 10px 40px rgba(59,130,246,0.4)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 20px 60px rgba(59,130,246,0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 10px 40px rgba(59,130,246,0.4)";
              }}
            >
              ENTER QUANTUM MODE
            </a>
          </div>
        </div>
      </header>

      {/* MASSIVE HERO WITH FOUNDER */}
      <section
        id="top"
        style={{
          padding: "200px 40px 120px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "80px", alignItems: "center" }}>
          
          {/* LEFT: MASSIVE HEADLINE */}
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
              marginBottom: "32px",
              boxShadow: "0 0 30px rgba(59,130,246,0.3)",
              animation: "pulse 3s infinite"
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 15px #22c55e" }} />
              QUANTUM AI DELIVERY • ZERO HUMAN DEPENDENCY
            </div>

            <h1 style={{
              fontSize: "clamp(4rem, 8vw, 6.5rem)",
              lineHeight: 1.05,
              marginBottom: "40px",
              background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              textShadow: "0 0 60px rgba(255,255,255,0.3)"
            }}>
              AUTONOMIQ SYSTEMS
            </h1>

            <p style={{
              fontSize: "1.4rem",
              color: "#cbd5e1",
              maxWidth: 800,
              marginBottom: "48px",
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              The world's first quantum AI organization that replaces entire MNC delivery towers with autonomous agent fleets. 80% faster. 70% cheaper. Zero human attrition risk.
            </p>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <a href="#contact" style={{
                padding: "20px 48px",
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                color: "white",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "1.05rem",
                textDecoration: "none",
                boxShadow: "0 25px 70px rgba(59,130,246,0.5)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-4px)";
                e.target.style.boxShadow = "0 35px 90px rgba(59,130,246,0.7)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 25px 70px rgba(59,130,246,0.5)";
              }}>
                ACTIVATE QUANTUM AI
              </a>
              <a href="#pricing" style={{
                padding: "18px 40px",
                border: "2px solid rgba(148,163,184,0.6)",
                color: "#f1f5f9",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                background: "rgba(15,23,42,0.8)",
                transition: "all 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(59,130,246,0.15)";
                e.target.style.borderColor = "#3b82f6";
                e.target.style.color = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(15,23,42,0.8)";
                e.target.style.borderColor = "rgba(148,163,184,0.6)";
                e.target.style.color = "#f1f5f9";
              }}>
                VIEW QUANTUM PRICING
              </a>
            </div>

            <div style={{
              marginTop: "60px",
              display: "flex",
              gap: "40px",
              fontSize: "1.1rem",
              color: "#94a3b8"
            }}>
              <div>• 100% AI‑driven delivery engine</div>
              <div>• 70‑85% cost vs MNCs</div>
              <div>• Regulator‑ready quantum logging</div>
            </div>
          </div>

          {/* MASSIVE FOUNDER SECTION */}
          <div id="leadership" style={{
            position: "relative",
            background: "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(10,15,30,0.95))",
            borderRadius: 32,
            border: "1px solid rgba(59,130,246,0.4)",
            padding: "48px",
            boxShadow: "0 40px 120px rgba(15,23,42,0.95), 0 0 80px rgba(59,130,246,0.3)",
            backdropFilter: "blur(20px)",
            animation: "float 6s ease-in-out infinite"
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", marginBottom: "32px" }}>
              <div style={{
                position: "relative",
                width: 140,
                height: 140,
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(59,130,246,0.8)",
                boxShadow: "0 0 60px rgba(59,130,246,0.6), inset 0 0 40px rgba(255,255,255,0.1)",
                flexShrink: 0
              }}>
                <Image
                  src="/founder-dayanidhi.png"
                  alt="Dayanidhi Dondapati - Quantum AI Governor"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h3 style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "#f8fafc",
                  marginBottom: "8px",
                  letterSpacing: "-0.02em"
                }}>
                  DAYANIDHI DONDA PATI
                </h3>
                <div style={{
                  fontSize: "1rem",
                  color: "#60a5fa",
                  fontWeight: 600,
                  marginBottom: "4px",
                  letterSpacing: "0.05em"
                }}>
                  FOUNDER & QUANTUM AI GOVERNOR
                </div>
                <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                  Architect of post‑human enterprise IT
                </div>
              </div>
            </div>

            <p style={{
              fontSize: "1.05rem",
              color: "#cbd5e1",
              lineHeight: 1.7,
              marginBottom: "32px"
            }}>
              18+ years commanding global IT operations, infrastructure warfare, and cloud conquests across banking, healthcare, and digital empires. Now unleashing quantum AI agents that execute at MNC scale with zero human friction.
            </p>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "32px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem", color: "#94a3b8" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 12px #22c55e" }} />
                Multi-country data center and cloud estate commander
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem", color: "#94a3b8" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 12px #22c55e" }} />
                AIOps and Kubernetes implementations at enterprise scale
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.95rem", color: "#94a3b8" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 12px #22c55e" }} />
                Creator of the world's first quantum AI delivery organization
              </div>
            </div>

            <blockquote style={{
              fontSize: "0.95rem",
              color: "#64748b",
              fontStyle: "italic",
              padding: "24px",
              background: "rgba(59,130,246,0.1)",
              borderLeft: "4px solid #3b82f6",
              borderRadius: "12px"
            }}>
              "AutonomIQ doesn't hire consultants. We engineer quantum AI systems that run enterprise IT better than any human organization ever could."
            </blockquote>
          </div>
        </div>
      </section>

      {/* QUANTUM SERVICES - 3D HOVER CARDS */}
      <section id="services" style={{ padding: "140px 40px", background: "linear-gradient(180deg, #0a0f1e 0%, #020617 100%)" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            textAlign: "center",
            marginBottom: "16px",
            background: "linear-gradient(135deg, #60a5fa, #a5b4fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 800
          }}>
            QUANTUM AI SERVICE MATRIX
          </h2>
          <p style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#94a3b8",
            maxWidth: "900px",
            margin: "0 auto 80px",
            lineHeight: 1.6
          }}>
            One quantum AI architecture replaces 17 traditional vendors across consulting, operations, engineering, infrastructure, and BPO.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "32px"
          }}>
            {[
              {
                title: "QUANTUM AI CONSULTING",
                icon: "🧠",
                desc: "Enterprise transformation blueprints generated in hours, not quarters",
                impact: "4x faster roadmaps • 30% lower TCO targets",
                popupContent: "Generative AI creates regulator-ready architectures across hybrid cloud, legacy modernization, zero-trust security, and quantum-safe crypto. Every recommendation stress-tested against 10-year cost curves and compliance matrices."
              },
              {
                title: "AIOPS WAR ROOM", 
                icon: "⚙️",
                desc: "Predictive incident prevention across 100K+ assets",
                impact: "95% MTTR reduction • 40% fewer outages",
                popupContent: "Quantum AI agents monitor every metric, predict failures 72hrs ahead, execute auto-remediation across Kubernetes, VMs, and mainframes. Human SREs become strategic conductors, not firefighting crews."
              },
              {
                title: "QUANTUM DEV ENGINE",
                icon: "💻",
                desc: "Production-grade code from AI agents at 10x human velocity",
                impact: "70% faster cycles • Zero tech debt accumulation",
                popupContent: "Full-stack development including architecture, code generation, testing, security scanning, and production deployment. AI agents collaborate like 500-person dev teams but ship clean architecture every sprint."
              }
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(10,15,30,0.9))",
                  borderRadius: 24,
                  border: "1px solid rgba(59,130,246,0.3)",
                  padding: "40px 32px",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: hoveredCard === i ? "translateY(-16px) scale(1.02)" : "translateY(0)",
                  boxShadow: hoveredCard === i 
                    ? "0 40px 120px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.2)" 
                    : "0 20px 60px rgba(15,23,42,0.7)"
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setShowPopup(i)}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "24px" }}>{service.icon}</div>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#f8fafc",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em"
                }}>
                  {service.title}
                </h3>
                <p style={{ color: "#cbd5e1", fontSize: "1.05rem", marginBottom: "20px", lineHeight: 1.6 }}>
                  {service.desc}
                </p>
                <div style={{ color: "#60a5fa", fontSize: "0.95rem", fontWeight: 600 }}>
                  {service.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {showPopup !== null && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.8)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)"
        }}
        onClick={() => setShowPopup(null)}
        >
          <div style={{
            background: "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(10,15,30,0.95))",
            borderRadius: 24,
            border: "1px solid rgba(59,130,246,0.4)",
            padding: "60px",
            maxWidth: "800px",
            maxHeight: "80vh",
            overflowY: "auto",
            boxShadow: "0 50px 150px rgba(0,0,0,0.8)"
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#f8fafc", marginBottom: "24px" }}>
              {[
                "QUANTUM AI CONSULTING", 
                "AIOPS WAR ROOM", 
                "QUANTUM DEV ENGINE"
              ][showPopup]}
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.7, whiteSpace: "pre-line" }}>
              {[
                "Generative AI creates regulator-ready architectures across hybrid cloud, legacy modernization, zero-trust security, and quantum-safe crypto. Every recommendation stress-tested against 10-year cost curves and compliance matrices.",
                "Quantum AI agents monitor every metric, predict failures 72hrs ahead, execute auto-remediation across Kubernetes, VMs, and mainframes. Human SREs become strategic conductors, not firefighting crews.",
                "Full-stack development including architecture, code generation, testing, security scanning, and production deployment. AI agents collaborate like 500-person dev teams but ship clean architecture every sprint."
              ][showPopup]}
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{
        padding: "80px 40px 40px",
        background: "#0a0f1e",
        borderTop: "1px solid rgba(59,130,246,0.2)"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", textAlign: "center", color: "#64748b", fontSize: "0.9rem" }}>
          <div style={{ marginBottom: "24px", fontSize: "1.1rem", color: "#94a3b8" }}>
            © 2025 AUTONOMIQ SYSTEMS PVT LTD • RASAPUDIPALEM, VISAKHAPATNAM, ANDHRA PRADESH, INDIA
          </div>
          <div>Quantum AI‑operated enterprise services • All outputs AI‑generated • Human governance only</div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(0.5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        * { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
