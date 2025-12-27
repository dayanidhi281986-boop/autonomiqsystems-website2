export default function Home() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 0% 0%, #1f2937 0, transparent 50%), radial-gradient(circle at 100% 0%, #0f172a 0, transparent 50%), linear-gradient(180deg, #020617 0%, #020617 40%, #020617 100%)",
        minHeight: "100vh",
        color: "#e5e7eb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* TOP NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backdropFilter: "blur(20px)",
          background: "rgba(2,6,23,0.85)",
          borderBottom: "1px solid rgba(148,163,184,0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* LOGO + COMPANY NAME */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ position: "relative", width: 48, height: 48 }}>
              <Image
                src="/autonomiq-logo.png"
                alt="AutonomIQ Systems logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontSize: "0.8rem",
                }}
              >
                AUTONOMIQ SYSTEMS
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#9ca3af",
                  textTransform: "uppercase",
                }}
              >
                AI‑Only Enterprise IT
              </div>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav
            style={{
              display: "flex",
              gap: "18px",
              fontSize: "0.9rem",
              color: "#cbd5f5",
            }}
          >
            <a href="#services" style={{ textDecoration: "none", color: "inherit" }}>
              Services
            </a>
            <a href="#industries" style={{ textDecoration: "none", color: "inherit" }}>
              Industries
            </a>
            <a href="#pricing" style={{ textDecoration: "none", color: "inherit" }}>
              Pricing
            </a>
            <a href="#leadership" style={{ textDecoration: "none", color: "inherit" }}>
              Leadership
            </a>
            <a href="#comparison" style={{ textDecoration: "none", color: "inherit" }}>
              MNC vs AutonomIQ
            </a>
            <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              background: "linear-gradient(135deg,#0ea5e9,#22c55e)",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(34,197,94,0.4)",
            }}
          >
            Start AI Assessment
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        style={{
          padding: "80px 20px 60px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.35) 0, transparent 55%), radial-gradient(circle at 80% 10%, rgba(56,189,248,0.25) 0, transparent 50%), linear-gradient(180deg,#020617 0,#020617 60%,#020617 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,2.2fr) minmax(0,1.4fr)",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* HERO LEFT */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "4px 12px",
                borderRadius: 999,
                background: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(96,165,250,0.7)",
                fontSize: "0.75rem",
                marginBottom: 18,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "999px",
                  background: "#22c55e",
                  boxShadow: "0 0 10px #22c55e",
                }}
              />
              <span style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>
                AI‑Only • No Human Delivery
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.7rem,4vw,3.6rem)",
                lineHeight: 1.1,
                marginBottom: 18,
                background:
                  "linear-gradient(135deg,#e5e7eb 0%,#f9fafb 40%,#9ca3af 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.03em",
              }}
            >
              AutonomIQ Systems Pvt. Ltd.
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#cbd5f5",
                maxWidth: 640,
                marginBottom: 26,
              }}
            >
              Enterprise‑grade IT, BPO, infrastructure and development run by autonomous
              AI agents – designed to outperform human‑heavy global MNCs in speed, cost
              and consistency.[web:213][web:219]
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 26px 0",
                color: "#9ca3af",
                fontSize: "0.98rem",
              }}
            >
              <li>
                • Strategy, delivery and operations with 0 permanent human staff on
                projects.[file:44]
              </li>
              <li>• 70–85% savings vs traditional IT/BPO providers.[web:216][web:218]</li>
              <li>
                • Built for DPDP 2023, ISO‑style controls and board‑level
                governance.[web:229]
              </li>
            </ul>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  padding: "14px 30px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 18px 40px rgba(37,99,235,0.5)",
                }}
              >
                Talk to the AI CTO →
              </a>
              <a
                href="#pricing"
                style={{
                  padding: "13px 26px",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.8)",
                  color: "#e5e7eb",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  background: "rgba(15,23,42,0.85)",
                }}
              >
                View Pricing & Savings
              </a>
            </div>
          </div>

          {/* HERO RIGHT – FOUNDER CARD */}
          <div
            id="leadership"
            style={{
              background: "rgba(15,23,42,0.9)",
              borderRadius: 24,
              border: "1px solid rgba(148,163,184,0.5)",
              padding: 26,
              boxShadow: "0 24px 60px rgba(15,23,42,0.9)",
            }}
          >
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: 80,
                  height: 80,
                  borderRadius: "999px",
                  overflow: "hidden",
                  border: "2px solid #3b82f6",
                }}
              >
                <Image
                  src="/founder-dayanidhi.png"
                  alt="Founder Dayanidhi Dondapati"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#e5e7eb",
                  }}
                >
                  Dayanidhi Dondapati
                </div>
                <div style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
                  Founder & AI Governor
                </div>
              </div>
            </div>

            <p
              style={{
                marginTop: 18,
                fontSize: "0.95rem",
                color: "#9ca3af",
              }}
            >
              15+ years in IT operations, infrastructure, cloud and service delivery. Now
              running a post‑human IT organization where AI agents deliver and the founder
              governs guardrails, risk and client value.[file:44]
            </p>

            <div
              style={{
                marginTop: 18,
                paddingTop: 14,
                borderTop: "1px solid rgba(55,65,81,0.9)",
                fontSize: "0.85rem",
                color: "#6b7280",
              }}
            >
              “AutonomIQ is not a services headcount factory. It is an autonomous system
              for running IT, BPO and infrastructure at MNC scale with AI at the core.”
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="services"
        style={{
          padding: "80px 20px 70px",
          background: "#020617",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.1rem",
              marginBottom: 10,
              color: "#60a5fa",
            }}
          >
            End‑to‑End Enterprise Services
          </h2>
          <p
            style={{
              marginBottom: 40,
              color: "#9ca3af",
              maxWidth: 720,
              fontSize: "0.98rem",
            }}
          >
            One AI‑first organization replacing multiple vendors: consulting, AIOps,
            software, infrastructure and BPO – integrated under a single AI governance
            model.[web:213][web:215]
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "AI Consulting & Advisory",
                icon: "🧠",
                desc: "Strategy, architecture, cybersecurity, digital transformation roadmaps.",
                bullets: [
                  "Cloud, hybrid and on‑prem reference architectures.",
                  "Zero‑touch migration playbooks.",
                  "CISO‑friendly AI security guidance.",
                ],
              },
              {
                title: "AIOps & IT Operations",
                icon: "⚙️",
                desc: "24/7 monitoring, prediction and self‑healing for infra and apps.",
                bullets: [
                  "Incident prediction & anomaly detection.[web:179][web:183]",
                  "Automated remediation runbooks.",
                  "Up to 95% MTTR reduction vs manual ops.[web:179]",
                ],
              },
              {
                title: "AI‑Native Engineering",
                icon: "💻",
                desc: "Applications, APIs, data platforms and integrations built by AI dev agents.",
                bullets: [
                  "Autonomous code generation & reviews.",
                  "CI/CD pipelines and testing automation.",
                  "Enterprise‑grade quality gates and SLOs.",
                ],
              },
              {
                title: "Infrastructure & Cloud",
                icon: "🛰️",
                desc: "Design, build and run multi‑cloud, hybrid and edge infrastructure.",
                bullets: [
                  "Azure, AWS, GCP and Kubernetes operations.",
                  "Cost optimization & rightsizing.[web:222]",
                  "Automated compliance and asset inventory.",
                ],
              },
              {
                title: "AI BPO & Shared Services",
                icon: "📞",
                desc: "L1/L2 IT support, basic finance, HR and operations run by AI agents.",
                bullets: [
                  "Email, chat and ticket triage 24/7.",
                  "Standard finance & HR workflows.",
                  "Up to 60–90% FTE cost reduction.[web:216][web:218]",
                ],
              },
              {
                title: "Marketing & Revenue Ops",
                icon: "📊",
                desc: "Campaigns, lead scoring, content and analytics fully AI‑driven.",
                bullets: [
                  "Account‑based targeting and scoring.[web:224]",
                  "Multi‑channel campaign orchestration.",
                  "Attribution, reporting and insights automation.",
                ],
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(15,23,42,0.95)",
                  borderRadius: 18,
                  border: "1px solid rgba(75,85,99,0.9)",
                  padding: 22,
                }}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: 10 }}>{card.icon}</div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: 6,
                    color: "#e5e7eb",
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#9ca3af",
                    marginBottom: 10,
                  }}
                >
                  {card.desc}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "#9ca3af",
                  }}
                >
                  {card.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        style={{
          padding: "80px 20px 70px",
          background: "linear-gradient(180deg,#020617 0,#020617 60%,#020617 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.1rem",
              marginBottom: 10,
              color: "#22c55e",
            }}
          >
            Transparent AI‑First Pricing
          </h2>
          <p
            style={{
              marginBottom: 40,
              color: "#9ca3af",
              maxWidth: 720,
              fontSize: "0.96rem",
            }}
          >
            Pay for outcomes and capacity, not for human billable hours. Pricing combines
            platform subscription, usage and per‑unit metrics – similar to managed
            services models but optimized for AI workloads.[web:218][web:220]
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
              marginBottom: 40,
            }}
          >
            {[
              {
                name: "AI Discovery Pilot",
                price: "₹0 – ₹49K",
                tag: "30–45 days",
                points: [
                  "AI assessment of IT, infra and BPO landscape.",
                  "Savings model & risk map.",
                  "Pilot AIOps or AI BPO runbook.",
                ],
              },
              {
                name: "Run‑Ops Core",
                price: "From ₹1.5L/month",
                tag: "Mid‑market",
                points: [
                  "AIOps for core infra & apps.",
                  "Standard AI BPO workflows.",
                  "Shared AI agent pool & governance.",
                ],
              },
              {
                name: "AutonomIQ Full Stack",
                price: "From ₹6L/month",
                tag: "Enterprise",
                points: [
                  "All services: consulting, AIOps, dev, infra, BPO.",
                  "Custom AI agent configurations.",
                  "Compliance reporting & executive dashboards.",
                ],
              },
              {
                name: "Global / Fortune 500",
                price: "Custom",
                tag: "Multi‑region",
                points: [
                  "Multi‑cloud + multi‑region operations.",
                  "Regulator & board‑ready reporting.",
                  "Dedicated governance from founder.",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                style={{
                  background:
                    i === 2
                      ? "linear-gradient(145deg,rgba(22,163,74,0.12),rgba(15,118,110,0.18))"
                      : "rgba(15,23,42,0.95)",
                  borderRadius: 20,
                  border:
                    i === 2
                      ? "1px solid rgba(34,197,94,0.9)"
                      : "1px solid rgba(55,65,81,0.9)",
                  padding: 26,
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#a5b4fc",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    marginBottom: 6,
                  }}
                >
                  {plan.tag}
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#e5e7eb",
                    marginBottom: 4,
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#22c55e",
                    marginBottom: 12,
                  }}
                >
                  {plan.price}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "#9ca3af",
                    marginBottom: 16,
                  }}
                >
                  {plan.points.map((p, idx2) => (
                    <li key={idx2}>• {p}</li>
                  ))}
                </ul>
                <button
                  style={{
                    width: "100%",
                    padding: "10px 0",
                    borderRadius: 999,
                    border: "none",
                    background:
                      i === 2
                        ? "linear-gradient(135deg,#22c55e,#16a34a)"
                        : "rgba(15,23,42,0.9)",
                    color: "white",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Discuss with AI CTO
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MNC COMPARISON */}
      <section
        id="comparison"
        style={{
          padding: "70px 20px 80px",
          background: "#020617",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: 10,
              color: "#f97316",
            }}
          >
            AutonomIQ vs Traditional MNC Providers
          </h2>
          <p
            style={{
              color: "#9ca3af",
              marginBottom: 24,
              maxWidth: 760,
              fontSize: "0.95rem",
            }}
          >
            Modeled on how leading firms like Accenture, Deloitte and others deliver
            multi‑tower programs – but with AI as the delivery engine, not large human
            teams.[web:213][web:217]
          </p>

          <div
            style={{
              overflowX: "auto",
              borderRadius: 12,
              border: "1px solid rgba(55,65,81,0.9)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 720,
                fontSize: "0.9rem",
              }}
            >
              <thead
                style={{
                  background: "rgba(15,23,42,0.95)",
                  color: "#e5e7eb",
                }}
              >
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: 14,
                      borderBottom: "1px solid rgba(55,65,81,0.9)",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: 14,
                      borderBottom: "1px solid rgba(55,65,81,0.9)",
                    }}
                  >
                    AutonomIQ Systems
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: 14,
                      borderBottom: "1px solid rgba(55,65,81,0.9)",
                    }}
                  >
                    Typical Global MNC
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                      color: "#e5e7eb",
                    }}
                  >
                    Delivery model
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                      color: "#bbf7d0",
                    }}
                  >
                    100% AI agents deliver; founder governs and signs off.
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                      color: "#9ca3af",
                    }}
                  >
                    Large human teams across consulting, delivery and BPO.[web:213]
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                      color: "#e5e7eb",
                    }}
                  >
                    Speed to roadmap
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                    }}
                  >
                    1–3 weeks for full IT transformation blueprint.
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                    }}
                  >
                    8–16 weeks for similar scope.[web:213]
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                      color: "#e5e7eb",
                    }}
                  >
                    Pricing transparency
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                    }}
                  >
                    Clear tiers + usage metrics, published ranges on site.[web:218]
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                    }}
                  >
                    Complex rate cards, T&M and hidden mark‑ups.[web:220]
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                      color: "#e5e7eb",
                    }}
                  >
                    Operations cost
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                    }}
                  >
                    60–80% lower total run‑cost for AIOps + BPO.[web:216][web:218]
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(31,41,55,0.9)",
                    }}
                  >
                    High FTE‑driven cost base with yearly rate increases.[web:213]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        style={{
          padding: "70px 20px 80px",
          background: "#020617",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.9rem",
              marginBottom: 10,
              color: "#60a5fa",
            }}
          >
            Talk to the AI Office of the CTO
          </h2>
          <p
            style={{
              color: "#9ca3af",
              marginBottom: 22,
              fontSize: "0.96rem",
            }}
          >
            Describe your environment and constraints. AutonomIQ’s AI agents will draft a
            first‑cut transformation blueprint and savings model for review with
            Dayanidhi.[web:224]
          </p>

          <form
            style={{
              textAlign: "left",
              marginTop: 20,
              background: "rgba(15,23,42,0.95)",
              borderRadius: 16,
              padding: 24,
              border: "1px solid rgba(55,65,81,0.9)",
            }}
          >
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                  color: "#cbd5f5",
                }}
              >
                Work email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(75,85,99,0.9)",
                  background: "#020617",
                  color: "#e5e7eb",
                  fontSize: "0.9rem",
                }}
              />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                  color: "#cbd5f5",
                }}
              >
                Current monthly IT / BPO run cost (approx.)
              </label>
              <input
                type="text"
                placeholder="e.g. ₹50L / month"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(75,85,99,0.9)",
                  background: "#020617",
                  color: "#e5e7eb",
                  fontSize: "0.9rem",
                }}
              />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                  color: "#cbd5f5",
                }}
              >
                Describe your environment and challenges
              </label>
              <textarea
                rows={4}
                placeholder="Multi‑cloud, legacy apps, ticket volume, SLAs, regulatory constraints…"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(75,85,99,0.9)",
                  background: "#020617",
                  color: "#e5e7eb",
                  fontSize: "0.9rem",
                  resize: "vertical",
                }}
              />
            </div>
            <button
              type="button"
              style={{
                width: "100%",
                padding: "12px 0",
                borderRadius: 999,
                border: "none",
                background: "linear-gradient(135deg,#0ea5e9,#22c55e)",
                color: "white",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Generate AI Assessment (Preview)
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "24px 20px 30px",
          background: "#020617",
          borderTop: "1px solid rgba(31,41,55,0.9)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            fontSize: "0.8rem",
            color: "#6b7280",
          }}
        >
          <div>
            © {new Date().getFullYear()} AutonomIQ Systems Pvt. Ltd. AI‑Operated
            Services. All recommendations are generated by AI; clients retain final
            decision responsibility.[web:224]
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy
            </a>
            <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
