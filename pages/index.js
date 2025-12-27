<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COMPLETE pages/index.js - AUTONOMIQ QUANTUM AI SYSTEMS</title>
    <style>
        body { margin: 0; padding: 20px; background: #000; font-family: 'Courier New', monospace; }
        pre { 
            background: #0a0f1e; 
            color: #f8fafc; 
            padding: 30px; 
            border-radius: 12px; 
            font-size: 13px; 
            line-height: 1.6; 
            max-height: 90vh; 
            overflow-y: auto;
            box-shadow: 0 0 50px rgba(59,130,246,0.3);
            border: 1px solid rgba(59,130,246,0.5);
            white-space: pre-wrap;
            position: relative;
        }
        pre::before {
            content: "🔒 QUANTUM-SECURE AUTONOMIQ INDEX.JS - COPY ALL 🔐";
            position: absolute;
            top: -15px; left: 20px;
            background: linear-gradient(135deg, #1e3a8a, #3b82f6);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
        }
        .keyword { color: #c678dd; }
        .string { color: #98c379; }
        .number { color: #d19a66; }
        .comment { color: #5c6370; font-style: italic; }
        .property { color: #e06c75; }
    </style>
</head>
<body>
<pre id="complete-code">import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() * 60 + 200
    }));
    setParticles(newParticles);

    const animate = () => {
      setParticles(particles.map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy + scrollY * 0.1,
        opacity: Math.max(0.1, p.opacity - 0.001),
        hue: (p.hue + 0.5) % 360
      })).filter(p => p.x > -50 && p.x < window.innerWidth + 50 && p.y > -50));
    };
    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    &lt;div style={{
      background: `radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(255,119,198,0.3) 0%, transparent 50%),
                   radial-gradient(circle at 40% 40%, rgba(120,219,255,0.3) 0%, transparent 50%),
                   linear-gradient(135deg, #0a0f1e 0%, #020617 50%, #000000 100%)`,
      minHeight: "100vh",
      color: "#f8fafc",
      fontFamily: "'Inter', system-ui, sans-serif",
      overflowX: "hidden",
      position: "relative"
    }}&gt;
      
      {/* QUANTUM PARTICLE SYSTEM */}
      {particles.map(p => (
        &lt;div key={p.id} style={{
          position: "fixed",
          left: p.x,
          top: p.y,
          width: p.size,
          height: p.size,
          background: `hsla(${p.hue}, 70%, 60%, ${p.opacity})`,
          borderRadius: "50%",
          backdropFilter: "blur(1px)",
          zIndex: 1,
          boxShadow: `0 0 10px hsla(${p.hue}, 70%, 60%, 0.5)`
        }} /&gt;
      ))}

      {/* HEADER - ENHANCED SECURITY */}
      &lt;header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10000,
        backdropFilter: "blur(50px) saturate(180%)",
        background: "rgba(10,15,30,0.98)",
        borderBottom: "2px solid rgba(59,130,246,0.6)",
        padding: "20px 40px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
      }}&gt;
        &lt;div style={{ maxWidth: "1600px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}&gt;
          &lt;a href="#" style={{ display: "flex", alignItems: "center", gap: "20px", textDecoration: "none" }}&gt;
            &lt;div style={{
              position: "relative",
              width: 72,
              height: 72,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(59,130,246,0.7), 0 0 80px rgba(59,130,246,0.3)",
              border: "2px solid rgba(255,255,255,0.2)"
            }}&gt;
              &lt;Image 
                src="/autonomiq-logo.png" 
                alt="🧬 AUTONOMIQ QUANTUM AI" 
                fill 
                style={{ objectFit: "contain", filter: "brightness(1.2) contrast(1.1)" }}
                priority 
              /&gt;
              &lt;div style={{
                position: "absolute",
                top: 2, right: 2, bottom: 2, left: 2,
                background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.1) 270deg, transparent 360deg)",
                animation: "spin 3s linear infinite",
                borderRadius: "18px"
              }} /&gt;
            &lt;/div&gt;
            &lt;div&gt;
              &lt;div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#f8fafc", letterSpacing: "-0.02em" }}&gt;AUTONOMIQ&lt;/div&gt;
              &lt;div style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 500, letterSpacing: "0.05em" }}&gt;
                🔐 QUANTUM-SECURE AI SYSTEMS
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/a&gt;
          
          &lt;nav style={{ display: "flex", gap: "32px", fontSize: "0.95rem", fontWeight: 600 }}&gt;
            {['SERVICES', 'QUANTUM AI', 'INDUSTRIES', 'SECURITY', 'PRICING', 'ENTERPRISE'].map((item, i) => (
              &lt;a 
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ 
                  color: "#cbd5e1", 
                  textDecoration: "none", 
                  padding: "12px 24px", 
                  borderRadius: "12px", 
                  background: "rgba(59,130,246,0.05)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(59,130,246,0.15)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 10px 25px rgba(59,130,246,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(59,130,246,0.05)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              &gt;
                {item}
              &lt;/a&gt;
            ))}
            &lt;div style={{
              padding: "12px 28px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "white",
              borderRadius: "12px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: "0 8px 25px rgba(59,130,246,0.4)"
            }}&gt;
              🚀 START QUANTUM TRIAL
            &lt;/div&gt;
          &lt;/nav&gt;
        &lt;/div&gt;
      &lt;/header&gt;

      {/* HERO SECTION - QUANTUM ADVANCED */}
      &lt;section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "140px 60px 100px",
        position: "relative"
      }}&gt;
        &lt;div style={{ flex: 1, zIndex: 10 }}&gt;
          &lt;div style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))",
            padding: "20px 32px",
            borderRadius: "20px",
            border: "1px solid rgba(59,130,246,0.5)",
            display: "inline-block",
            marginBottom: "32px",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#60a5fa"
          }}&gt;
            🧬 QUANTUM AI SYSTEMS | EST. 2025 | 99.999% UPTIME
          &lt;/div&gt;
          &lt;h1 style={{
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "32px",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}&gt;
            Quantum-Secure AI Infrastructure
            &lt;br /&gt;
            &lt;span style={{ color: "#3b82f6" }}&gt;for Enterprise Scale&lt;/span&gt;
          &lt;/h1&gt;
          &lt;p style={{
            fontSize: "1.4rem",
            lineHeight: 1.6,
            color: "#cbd5e1",
            marginBottom: "48px",
            maxWidth: "600px"
          }}&gt;
            Deploy unbreakable AI systems with quantum-grade encryption, zero-trust architecture, 
            and self-healing infrastructure. Trusted by Fortune 500 enterprises worldwide.
          &lt;/p&gt;
          &lt;div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}&gt;
            &lt;a href="#demo" style={{
              padding: "20px 40px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              color: "white",
              textDecoration: "none",
              borderRadius: "16px",
              fontWeight: 700,
              fontSize: "1.1rem",
              boxShadow: "0 20px 40px rgba(59,130,246,0.4)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            }}&gt;
              🧬 LAUNCH QUANTUM AI
            &lt;/a&gt;
            &lt;a href="#features" style={{
              padding: "20px 40px",
              background: "rgba(255,255,255,0.1)",
              color: "#f8fafc",
              textDecoration: "none",
              borderRadius: "16px",
              fontWeight: 600,
              fontSize: "1.1rem",
              border: "2px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              transition: "all 0.4s"
            }}&gt;
              🔍 VIEW CAPABILITIES
            &lt;/a&gt;
          &lt;/div&gt;
          
          {/* LIVE STATS */}
          &lt;div style={{ 
            marginTop: "80px", 
            display: "flex", 
            gap: "48px", 
            fontSize: "1.1rem",
            flexWrap: "wrap"
          }}&gt;
            &lt;div&gt;&lt;span style={{ fontSize: "2rem", color: "#3b82f6", fontWeight: 900 }}&gt;247&lt;/span&gt;+&lt;br /&gt;ENTERPRISES&lt;/div&gt;
            &lt;div&gt;&lt;span style={{ fontSize: "2rem", color: "#10b981", fontWeight: 900 }}&gt;99.999%&lt;/span&gt;&lt;br /&gt;UPTIME&lt;/div&gt;
            &lt;div&gt;&lt;span style={{ fontSize: "2rem", color: "#f59e0b", fontWeight: 900 }}&gt;12.4x&lt;/span&gt;&lt;br /&gt;FASTER&lt;/div&gt;
            &lt;div&gt;&lt;span style={{ fontSize: "2rem", color: "#ef4444", fontWeight: 900 }}&gt;0&lt;/span&gt;&lt;br /&gt;BREACHES&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        {/* HERO VISUAL - 3D QUANTUM MATRIX */}
        &lt;div style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: "600px"
        }}&gt;
          &lt;div style={{
            position: "relative",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            boxShadow: `
              0 0 100px rgba(59,130,246,0.5),
              0 0 200px rgba(6,182,212,0.3),
              inset 0 0 100px rgba(255,255,255,0.1)
            `,
            animation: "rotate3d 20s linear infinite"
          }}&gt;
            &lt;div style={{
              position: "absolute",
              top: "20%",
              left: "20%",
              width: 200,
              height: 200,
              background: "linear-gradient(45deg, #3b82f6, #06b6d4)",
              borderRadius: "50%",
              opacity: 0.6,
              animation: "pulse 3s ease-in-out infinite"
            }} /&gt;
            &lt;div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: 300,
              border: "3px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              boxShadow: "inset 0 0 50px rgba(255,255,255,0.2)"
            }} /&gt;
            &lt;Image 
              src="/quantum-core.png" 
              alt="Quantum AI Core" 
              width={400} 
              height={400}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                filter: "drop-shadow(0 0 30px rgba(59,130,246,0.8))"
              }}
            /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* SERVICES GRID - ADVANCED FEATURES */}
      &lt;section id="services" style={{
        padding: "150px 60px",
        maxWidth: "1600px",
        margin: "0 auto",
        position: "relative"
      }}&gt;
        &lt;div style={{ textAlign: "center", marginBottom: "120px" }}&gt;
          &lt;h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            marginBottom: "24px",
            background: "linear-gradient(135deg, #f8fafc, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}&gt;
            Quantum AI Capabilities
          &lt;/h2&gt;
          &lt;p style={{ fontSize: "1.3rem", color: "#94a3b8", maxWidth: "700px", margin: "0 auto" }}&gt;
            End-to-end AI infrastructure with military-grade security and quantum-resistant encryption
          &lt;/p&gt;
        &lt;/div&gt;

        &lt;div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "48px" }}&gt;
          {[
            {
              icon: "🧬",
              title: "Quantum AI Core",
              desc: "Self-evolving neural networks with quantum entanglement simulation for 1000x inference speed"
            },
            {
              icon: "🔐",
              title: "Zero-Trust Security",
              desc: "Post-quantum cryptography, homomorphic encryption, and continuous behavioral biometrics"
            },
            {
              icon: "⚡",
              title: "Hyper-Scale Infra",
              desc: "Distributed quantum-inspired orchestration across 50+ cloud regions with 0ms failover"
            },
            {
              icon: "🛡️",
              title: "ThreatShield AI",
              desc: "Real-time autonomous threat hunting with 99.9999% zero-day detection accuracy"
            },
            {
              icon: "📊",
              title: "AIOps Command",
              desc: "Predictive analytics platform preventing 98% of incidents before occurrence"
            },
            {
              icon: "🌐",
              title: "Global Mesh Network",
              desc: "Decentralized AI fabric spanning 200+ edge locations worldwide"
            }
          ].map((service, i) => (
            &lt;div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "48px 40px",
              border: "1px solid rgba(59,130,246,0.2)",
              transition: "all 0.4s",
              position: "relative",
              overflow: "hidden"
            }}&gt;
              &lt;div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)",
                transform: `translateX(${-100 + i * 20}%)`,
                animation: "gradientShift 4s ease-in-out infinite"
              }} /&gt;
              &lt;div style={{ fontSize: "3rem", marginBottom: "24px" }}&gt;{service.icon}&lt;/div&gt;
              &lt;h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "16px", color: "#f8fafc" }}&gt;
                {service.title}
              &lt;/h3&gt;
              &lt;p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "1.1rem" }}&gt;
                {service.desc}
              &lt;/p&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/section&gt;

      {/* PRICING - ENTERPRISE */}
      &lt;section id="pricing" style={{
        padding: "150px 60px",
        background: "linear-gradient(180deg, rgba(10,15,30,0.8) 0%, rgba(2,6,23,1) 100%)",
        position: "relative",
        overflow: "hidden"
      }}&gt;
        &lt;div style={{ textAlign: "center", marginBottom: "120px" }}&gt;
          &lt;h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #f8fafc, #10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}&gt;
            Enterprise Quantum Pricing
          &lt;/h2&gt;
        &lt;/div&gt;
        &lt;div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "48px", maxWidth: "1400px", margin: "0 auto" }}&gt;
          {[
            { name: "Quantum Starter", price: "$49K", users: "50+", features: ["Quantum AI Core", "Zero-Trust Security", "Global CDN", "24/7 Support"] },
            { name: "Enterprise Pro", price: "$199K", users: "500+", features: ["All Starter +", "AIOps Command", "ThreatShield AI", "Custom SLA"] },
            { name: "Quantum Elite", price: "CUSTOM", users: "∞", features: ["Full Suite", "On-Prem Deployment", "SOC2/ISO27001", "Dedicated Team"], popular: true }
          ].map((plan, i) => (
            &lt;div key={i} style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "28px",
              padding: "60px 48px",
              border: "2px solid rgba(255,255,255,0.1)",
              position: "relative",
              transition: "all 0.4s",
              ...(plan.popular && {
                borderColor: "#10b981",
                boxShadow: "0 0 0 4px rgba(16,185,129,0.3)"
              })
            }}&gt;
              {plan.popular && &lt;div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "#10b981", color: "white", padding: "8px 24px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700 }}&gt;MOST POPULAR&lt;/div&gt;}
              &lt;h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "16px" }}&gt;{plan.name}&lt;/h3&gt;
              &lt;div style={{ fontSize: "3.5rem", fontWeight: 900, color: plan.popular ? "#10b981" : "#f8fafc", marginBottom: "32px" }}&gt;
                {plan.price}/yr
              &lt;/div&gt;
              &lt;div style={{ color: "#94a3b8", marginBottom: "32px", fontSize: "0.95rem" }}&gt;
                {plan.users} concurrent users
              &lt;/div&gt;
              &lt;ul style={{ listStyle: "none", padding: 0, marginBottom: "48px" }}&gt;
                {plan.features.map((feature, j) => (
                  &lt;li key={j} style={{ padding: "12px 0", color: "#cbd5e1", display: "flex", alignItems: "center", gap: "12px" }}&gt;
                    ✓ {feature}
                  &lt;/li&gt;
                ))}
              &lt;/ul&gt;
              &lt;a href="#contact" style={{
                width: "100%",
                padding: "20px",
                background: plan.popular ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #3b82f6, #06b6d4)",
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 700,
                display: "block"
              }}&gt;
                {plan.popular ? "⚡ CHOOSE ELITE PLAN" : "GET STARTED"}
              &lt;/a&gt;
            &lt;/div&gt;
          ))}
        &lt;/div&gt;
      &lt;/section&gt;

      {/* FOOTER */}
      &lt;footer style={{
        padding: "80px 60px 40px",
        background: "rgba(0,0,0,0.8)",
        borderTop: "1px solid rgba(59,130,246,0.3)",
        textAlign: "center"
      }}&gt;
        &lt;div style={{ maxWidth: "1200px", margin: "0 auto 40px" }}&gt;
          &lt;div style={{ fontSize: "1.1rem", marginBottom: "24px", opacity: 0.8 }}&gt;
            © 2025 AUTONOMIQ Quantum AI Systems. All rights reserved. | Built with Quantum Security™
          &lt;/div&gt;
          &lt;div style={{ display: "flex", justifyContent: "center", gap: "40px", fontSize: "0.9rem", flexWrap: "wrap" }}&gt;
            &lt;a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}&gt;Privacy&lt;/a&gt;
            &lt;a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}&gt;Security&lt;/a&gt;
            &lt;a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}&gt;Compliance&lt;/a&gt;
            &lt;a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}&gt;Careers&lt;/a&gt;
            &lt;a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}&gt;API Docs&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/footer&gt;

      &lt;style jsx global&gt;{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.05); opacity: 0.8; } }
        @keyframes rotate3d {
          0% { transform: rotateZ(0deg) rotateX(0deg); }
          100% { transform: rotateZ(360deg) rotateX(360deg); }
        }
        @keyframes gradientShift {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}&lt;/style&gt;
    &lt;/div&gt;
  );
}
</pre>

&lt;script&gt;
document.getElementById('complete-code').addEventListener('click', function() {
  navigator.clipboard.writeText(this.textContent).then(() => {
    const btn = document.createElement('div');
    btn.textContent = '✅ COPIED TO CLIPBOARD!';
    btn.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(16,185,129,0.95);color:white;padding:20px 40px;border-radius:20px;font-weight:700;font-size:18px;z-index:99999;backdrop-filter:blur(20px);';
    document.body.appendChild(btn);
    setTimeout(() => btn.remove(), 3000);
  });
});
&lt;/script&gt;
</body>
</html>
