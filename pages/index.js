import Image from "next/image";

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
      {/* GLOBAL HEADER WITH REAL LOGO CATEGORY */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          backdropFilter: "blur(20px)",
          background: "rgba(2,6,23,0.9)",
          borderBottom: "1px solid rgba(148,163,184,0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* LOGO CATEGORY: MARK + WORDMARK */}
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 44,
                height: 44,
                borderRadius: 12,
                overflow: "hidden",
                background: "#020617",
              }}
            >
              <Image
                src="/autonomiq-logo.png"
                alt="AutonomIQ Systems Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                }}
              >
                AutonomIQ Systems
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                }}
              >
                AI‑Only Enterprise IT & BPO
              </div>
            </div>
          </a>

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
              padding: "9px 20px",
              borderRadius: 999,
              background: "linear-gradient(135deg,#0ea5e9,#22c55e)",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(34,197,94,0.45)",
            }}
          >
            Start AI Assessment
          </a>
        </div>
      </header>

      {/* HERO + LEADERSHIP AREA */}
      <section
        id="top"
        style={{
          padding: "80px 20px 40px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.35) 0, transparent 55%), radial-gradient(circle at 80% 10%, rgba(56,189,248,0.25) 0, transparent 50%), linear-gradient(180deg,#020617 0,#020617 70%,#020617 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.7fr) minmax(0,1.3fr)",
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
                fontSize: "clamp(2.6rem,4vw,3.6rem)",
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
                fontSize: "1.1rem",
                color: "#cbd5f5",
                maxWidth: 640,
                marginBottom: 24,
              }}
            >
              Enterprise‑grade IT, BPO, infrastructure and development run by autonomous
              AI agents – engineered to beat human‑heavy MNCs in speed, cost, and
              reliability.[web:213][web:219]
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 24px 0",
                color: "#9ca3af",
                fontSize: "0.95rem",
              }}
            >
              <li>• 100% AI‑driven delivery engine, founder‑governed.[file:44]</li>
              <li>• 70–85% lower run‑cost vs traditional IT/BPO providers.[web:216][web:218]</li>
              <li>• Designed for DPDP 2023, ISO‑style controls, and audit‑ready logs.[web:229]</li>
            </ul>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  padding: "13px 28px",
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
                  padding: "12px 24px",
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

          {/* LEADERSHIP FEATURE CARD – ALWAYS VISIBLE */}
          <div
            id="leadership"
            style={{
              background: "rgba(15,23,42,0.96)",
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
                  width: 86,
                  height: 86,
                  borderRadius: "999px",
                  overflow: "hidden",
                  border: "2px solid #3b82f6",
                  background: "#020617",
                }}
              >
                <Image
                  src="/founder-dayanidhi.png"
                  alt="Dayanidhi Dondapati, Founder & AI Governor"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#e5e7eb",
                    marginBottom: 2,
                  }}
                >
                  Dayanidhi Dondapati
                </div>
                <div style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
                  Founder & AI Governor, AutonomIQ Systems
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
              15+ years leading IT operations, infrastructure, cloud migrations and
              service delivery for enterprise environments across banking, healthcare and
              digital commerce.[file:44]
            </p>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                margin: 0,
                fontSize: "0.9rem",
                color: "#9ca3af",
              }}
            >
              <li>• Designed and operated large‑scale data center and cloud estates.</li>
              <li>• Implemented AIOps, Kubernetes and CI/CD across complex stacks.</li>
              <li>• Now building a post‑human, AI‑run IT organization for enterprises.</li>
            </ul>

            <div
              style={{
                marginTop: 18,
                paddingTop: 12,
                borderTop: "1px solid rgba(55,65,81,0.9)",
                fontSize: "0.85rem",
                color: "#6b7280",
              }}
            >
              “AutonomIQ Systems is not a body‑shop. It is a governed AI organization
              that runs IT, BPO and infrastructure as a self‑optimizing system.”
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        style={{
          padding: "70px 20px 70px",
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
            AI‑Run Services Portfolio
          </h2>
          <p
            style={{
              marginBottom: 34,
              color: "#9ca3af",
              maxWidth: 760,
              fontSize: "0.96rem",
            }}
          >
            AutonomIQ replaces multiple vendors – consulting, IT operations, engineering,
            infrastructure and BPO – with a coordinated fleet of AI agents under one
            governance model.[web:213][web:215]
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 22,
            }}
          >
            {/* each card has what / outcomes / mini example */}
            {[
              {
                title: "AI Consulting & Advisory",
                icon: "🧠",
                what: "IT strategy, cloud, security and digital transformation advice.",
                outcomes: [
                  "Enterprise roadmaps in weeks, not quarters.",
                  "Target architecture with cost and risk baked in.",
                ],
                example:
                  "Example: hybrid bank stack aligned to regulator expectations with AI‑driven controls.[web:229]",
              },
              {
                title: "AIOps & IT Operations",
                icon: "⚙️",
                what: "Round‑the‑clock monitoring, prediction and auto‑healing for infra and apps.",
                outcomes: [
                  "Incident prediction & root‑cause hints before outages.[web:179][web:183]",
                  "Up to 95% MTTR reduction vs manual ops.[web:179]",
                ],
                example:
                  "Example: SaaS provider – major incidents per month cut from 10 to 2 while infra spend stayed flat.[web:216]",
              },
              {
                title: "AI‑Native Engineering",
                icon: "💻",
                what: "Applications, APIs and data platforms built by AI dev agents with human‑level quality gates.",
                outcomes: [
                  "Faster feature cycles with automated tests.",
                  "No dependency on rotating project teams.",
                ],
                example:
                  "Example: internal workflow app delivered in weeks with continuous AI‑driven enhancements.",
              },
              {
                title: "Cloud & Infrastructure",
                icon: "🛰️",
                what: "Design, migrate and run multi‑cloud, hybrid and edge estates.",
                outcomes: [
                  "15–30% infra cost reduction via rightsizing.[web:222]",
                  "Unified inventory and configuration baselines.",
                ],
                example:
                  "Example: Azure + GCP landscape rebalanced to cut idle spend while improving SLAs.[web:222]",
              },
              {
                title: "AI BPO & Shared Services",
                icon: "📞",
                what: "L1/L2 IT support, basic finance, HR and operations run fully by AI agents.",
                outcomes: [
                  "24/7 ticket, email and chat handling without night shifts.",
                  "60–90% FTE cost reduction versus human BPO.[web:216][web:218]",
                ],
                example:
                  "Example: IT helpdesk deflected majority of tickets with AI‑based self‑service and auto‑resolution.",
              },
              {
                title: "Marketing & Revenue Operations",
                icon: "📊",
                what: "Campaigns, content and analytics orchestrated by AI to grow pipeline.",
                outcomes: [
                  "Better targeting and lead scoring.[web:224]",
                  "Campaign performance dashboards with no manual reporting.",
                ],
                example:
                  "Example: B2B SaaS – AI scored leads to boost conversion while cutting acquisition cost.[web:224]",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(15,23,42,0.96)",
                  borderRadius: 18,
                  border: "1px solid rgba(75,85,99,0.9)",
                  padding: 20,
                }}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>{card.icon}</div>
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
                  {card.what}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    margin: 0,
                    fontSize: "0.88rem",
                    color: "#9ca3af",
                    marginBottom: 8,
                  }}
                >
                  {card.outcomes.map((o, i) => (
                    <li key={i}>• {o}</li>
                  ))}
                </ul>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#6b7280",
                    marginTop: 4,
                  }}
                >
                  {card.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        style={{
          padding: "70px 20px 70px",
          background: "#020617",
          borderTop: "1px solid rgba(31,41,55,0.9)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: 10,
              color: "#38bdf8",
            }}
          >
            Industries AutonomIQ Serves
          </h2>
          <p
            style={{
              marginBottom: 32,
              color: "#9ca3af",
              maxWidth: 760,
              fontSize: "0.95rem",
            }}
          >
            Patterns learned from technology, banking, healthcare, retail and public
            sector MNC programs – delivered faster through AI agents instead of large
            teams.[web:213][web:275]
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 22,
            }}
          >
            {[
              {
                name: "Banking & Financial Services",
                usecases: [
                  "AIOps for payment systems and core banking.",
                  "AI‑run L1 support for branches and contact centers.",
                  "Regulatory reporting data pipelines.",
                ],
                metric: "15–30% infra cost reduction and fewer outages.[web:216][web:229]",
              },
              {
                name: "Healthcare & Life Sciences",
                usecases: [
                  "PACS, EMR and analytics platform operations.",
                  "AI scheduling and ops for hospitals.",
                  "Compliance logging across systems.",
                ],
                metric: "Faster rollouts with audit trails for each AI action.[web:229]",
              },
              {
                name: "Retail & E‑Commerce",
                usecases: [
                  "Site reliability and peak‑traffic scaling.",
                  "AI‑run marketing and recommendation ops.",
                  "Order and ticket automation.",
                ],
                metric: "Improved conversion and fewer cart‑loss incidents.[web:275]",
              },
              {
                name: "Telecom & Media",
                usecases: [
                  "Network monitoring and anomaly detection.",
                  "AI‑based issue triage for subscribers.",
                  "Automation of field ops workflows.",
                ],
                metric: "Better uptime with fewer manual interventions.[web:213]",
              },
              {
                name: "Manufacturing & Logistics",
                usecases: [
                  "Plant and warehouse system monitoring.",
                  "AI scheduling of jobs and maintenance.",
                  "Supply chain visibility dashboards.",
                ],
                metric: "Reduced downtime and more predictable throughput.[web:229]",
              },
              {
                name: "Public Sector & Utilities",
                usecases: [
                  "Citizen service portals and ticket flows.",
                  "Critical infra monitoring for utilities.",
                  "Regulator‑friendly logs and reports.",
                ],
                metric: "Better transparency with clear traceability for each change.[web:229]",
              },
            ].map((ind, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(15,23,42,0.96)",
                  borderRadius: 18,
                  border: "1px solid rgba(55,65,81,0.9)",
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginBottom: 6,
                    color: "#e5e7eb",
                  }}
                >
                  {ind.name}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    margin: 0,
                    color: "#9ca3af",
                    fontSize: "0.88rem",
                    marginBottom: 8,
                  }}
                >
                  {ind.usecases.map((u, i) => (
                    <li key={i}>• {u}</li>
                  ))}
                </ul>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#6b7280",
                    marginTop: 4,
                  }}
                >
                  {ind.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        id="pricing"
        style={{
          padding: "80px 20px 70px",
          background: "#030712",
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
            Pricing Designed for AI‑Run Operations
          </h2>
          <p
            style={{
              marginBottom: 32,
              color: "#9ca3af",
              maxWidth: 760,
              fontSize: "0.96rem",
            }}
          >
            Clear tiers plus usage metrics, so you always see the link between what you
            pay and the AI capacity you receive – unlike opaque T&M rate cards.[web:218][web:220][web:281]
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 22,
              marginBottom: 32,
            }}
          >
            {[
              {
                name: "AI Discovery Pilot",
                price: "₹0 – ₹49K",
                tag: "30–45 days",
                bestFor: "First‑time AI IT / AIOps / AI BPO exploration.",
                features: [
                  "Full assessment of IT, infra and BPO landscape.",
                  "Savings model with ranges for cost and FTE reduction.",
                  "Pilot runbook for AIOps or AI BPO.",
                ],
                why: "Low‑risk entry to understand value before long‑term commitment.[web:216][web:218]",
              },
              {
                name: "Run‑Ops Core",
                price: "From ₹1.5L / month",
                tag: "Mid‑market",
                bestFor: "Companies with 20–100 apps and structured IT teams.",
                features: [
                  "AIOps for core infra + critical apps.",
                  "Standard AI BPO workflows for IT helpdesk and simple ops.",
                  "Shared AI agent pool with governance by AutonomIQ.",
                ],
                why: "Replace traditional managed services at 50–70% lower cost.[web:218][web:224]",
              },
              {
                name: "AutonomIQ Full Stack",
                price: "From ₹6L / month",
                tag: "Enterprise",
                bestFor: "Enterprises wanting AI across consulting, ops, dev, infra and BPO.",
                features: [
                  "Everything in Run‑Ops plus AI‑native engineering and marketing ops.",
                  "Custom AI agent configurations dedicated to your environment.",
                  "Compliance reporting and executive dashboards.",
                ],
                why: "Single AI‑run partner instead of many siloed IT/BPO vendors.[web:213][web:219]",
              },
              {
                name: "Global / Fortune 500",
                price: "Custom",
                tag: "Multi‑region",
                bestFor: "Regulated, multi‑region enterprises with board‑level oversight.",
                features: [
                  "Multi‑cloud + multi‑region run with regulator‑ready logging.",
                  "Integration into existing GRC, SOC and SIEM tools.[web:229]",
                  "Direct governance from founder and AI governance council.",
                ],
                why: "Designed to sit beside or replace large SI/MNC relationships.",
              },
            ].map((plan, i) => (
              <div
                key={i}
                style={{
                  background:
                    i === 2
                      ? "linear-gradient(145deg,rgba(22,163,74,0.15),rgba(15,118,110,0.18))"
                      : "rgba(15,23,42,0.96)",
                  borderRadius: 20,
                  border:
                    i === 2
                      ? "1px solid rgba(34,197,94,0.9)"
                      : "1px solid rgba(55,65,81,0.9)",
                  padding: 24,
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#a5b4fc",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
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
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#22c55e",
                    marginBottom: 6,
                  }}
                >
                  {plan.price}
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    color: "#cbd5f5",
                    marginBottom: 10,
                  }}
                >
                  Best for: {plan.bestFor}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    margin: 0,
                    fontSize: "0.88rem",
                    color: "#9ca3af",
                    marginBottom: 10,
                  }}
                >
                  {plan.features.map((f, idx2) => (
                    <li key={idx2}>• {f}</li>
                  ))}
                </ul>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#fbbf24",
                    marginBottom: 10,
                  }}
                >
                  Why this vs traditional MNC: {plan.why}
                </div>
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
                    fontSize: "0.94rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  View Detailed Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTONOMIQ VS MNC TABLE */}
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
              marginBottom: 20,
              maxWidth: 780,
              fontSize: "0.95rem",
            }}
          >
            Modeled on how firms like Accenture, Deloitte and others deliver multi‑tower
            programs – but with AI as the engine instead of thousands of human
            consultants.[web:213][web:217]
          </p>

          <div
            style={{
              overflowX: "auto",
              borderRadius: 12,
              border: "1px solid rgba(55,65,81,0.9)",
              marginBottom: 10,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 760,
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
                      padding: 12,
                      borderBottom: "1px solid rgba(55,65,81,0.9)",
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: 12,
                      borderBottom: "1px solid rgba(55,65,81,0.9)",
                    }}
                  >
                    AutonomIQ Systems
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: 12,
                      borderBottom: "1px solid rgba(55,65,81,0.9)",
                    }}
                  >
                    Typical Global MNC
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dim: "Delivery model",
                    us: "100% AI agents deliver; founder governs and signs off.",
                    mnc: "Large human teams across consulting, delivery and BPO.[web:213]",
                  },
                  {
                    dim: "Speed to roadmap",
                    us: "1–3 weeks for a full IT transformation blueprint.",
                    mnc: "8–16 weeks for similar scope, with multiple rounds of workshops.[web:213]",
                  },
                  {
                    dim: "Pricing transparency",
                    us: "Clear tiers + usage metrics, published ranges on the site.[web:218]",
                    mnc: "Complex rate cards, T&M and hidden mark‑ups; pricing rarely visible publicly.[web:220]",
                  },
                  {
                    dim: "Operations cost",
                    us: "60–80% lower total run‑cost for AIOps + BPO.[web:216][web:218]",
                    mnc: "High FTE‑driven cost base with yearly rate increases.[web:213]",
                  },
                  {
                    dim: "Knowledge retention",
                    us: "Agents never resign; knowledge is encoded in prompts, policies and logs.",
                    mnc: "Key knowledge walks out with people moving projects or leaving.",
                  },
                  {
                    dim: "Scalability",
                    us: "Add more AI capacity instantly; clone agents and apply to new regions.",
                    mnc: "Scaling requires recruiting, onboarding and training new teams.",
                  },
                  {
                    dim: "AI governance visibility",
                    us: "Per‑action logs and dashboards showing what each agent did and why.[web:229]",
                    mnc: "Governance depends on project documentation and manual status reports.",
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: 12,
                        borderBottom: "1px solid rgba(31,41,55,0.9)",
                        color: "#e5e7eb",
                      }}
                    >
                      {row.dim}
                    </td>
                    <td
                      style={{
                        padding: 12,
                        borderBottom: "1px solid rgba(31,41,55,0.9)",
                        color: "#bbf7d0",
                      }}
                    >
                      {row.us}
                    </td>
                    <td
                      style={{
                        padding: 12,
                        borderBottom: "1px solid rgba(31,41,55,0.9)",
                        color: "#9ca3af",
                      }}
                    >
                      {row.mnc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              fontSize: "0.82rem",
              color: "#6b7280",
            }}
          >
            What this means: less time and money spent on coordinating people; more on
            outcomes, uptime and measurable savings.
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
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
            first‑cut transformation blueprint and savings model for review with the
            founder.[web:224]
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

      {/* FOOTER WITH COMPANY ADDRESS */}
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
            <div style={{ marginBottom: 4 }}>
              © {new Date().getFullYear()} AutonomIQ Systems Pvt. Ltd.
            </div>
            <div>Registered office (example):</div>
            <div>
              AutonomIQ Systems Pvt. Ltd., Rasapudipalem, Visakhapatnam, Andhra Pradesh,
              India.
            </div>
            <div style={{ marginTop: 4 }}>
              All recommendations are generated by AI; clients retain final decision
              responsibility.[web:224]
            </div>
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
