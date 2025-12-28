import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";

function clamp(min, preferred, max) {
  return `clamp(${min}, ${preferred}, ${max})`;
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      {eyebrow ? (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 16px",
            borderRadius: 999,
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.25)",
            color: "#bfdbfe",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: 12,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#22c55e",
              boxShadow: "0 0 12px rgba(34,197,94,0.8)",
            }}
          />
          {eyebrow}
        </div>
      ) : null}

      <h2
        style={{
          margin: 0,
          fontSize: clamp("2rem", "4vw", "3.25rem"),
          fontWeight: 900,
          letterSpacing: "-0.03em",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 40%, #93c5fd 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          style={{
            margin: "14px auto 0",
            maxWidth: 920,
            color: "#cbd5e1",
            fontSize: 16,
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Modal({ open, onClose, title, meta, children, footer }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus for accessibility
    setTimeout(() => panelRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onMouseDown={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 18,
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          width: "min(980px, 100%)",
          maxHeight: "82vh",
          overflow: "auto",
          borderRadius: 20,
          border: "1px solid rgba(148,163,184,0.25)",
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.92) 0%, rgba(15,23,42,0.92) 100%)",
          boxShadow: "0 60px 160px rgba(0,0,0,0.75)",
          padding: 28,
          outline: "none",
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 12,
                color: "#94a3b8",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              {meta}
            </div>
            <h3
              style={{
                margin: 0,
                fontSize: clamp("1.35rem", "2.2vw", "1.9rem"),
                fontWeight: 900,
                color: "#f8fafc",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              border: "1px solid rgba(148,163,184,0.25)",
              background: "rgba(15,23,42,0.6)",
              color: "#e2e8f0",
              borderRadius: 12,
              padding: "10px 12px",
              cursor: "pointer",
              fontWeight: 800,
            }}
          >
            Close
          </button>
        </div>

        <div
          style={{
            marginTop: 18,
            paddingTop: 18,
            borderTop: "1px solid rgba(148,163,184,0.18)",
            color: "#cbd5e1",
            lineHeight: 1.75,
            fontSize: 15,
          }}
        >
          {children}
        </div>

        {footer ? (
          <div
            style={{
              marginTop: 22,
              paddingTop: 18,
              borderTop: "1px solid rgba(148,163,184,0.18)",
              display: "flex",
              gap: 12,
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Card({ bgUrl, title, desc, kpis = [], tag, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left",
        cursor: "pointer",
        width: "100%",
        borderRadius: 18,
        border: "1px solid rgba(148,163,184,0.22)",
        background:
          `linear-gradient(180deg, rgba(2,6,23,0.20) 0%, rgba(2,6,23,0.78) 70%), ` +
          `linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(168,85,247,0.12) 40%, rgba(16,185,129,0.10) 100%), ` +
          (bgUrl ? `url(${bgUrl})` : "none"),
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 20,
        color: "#e2e8f0",
        outline: "none",
        transition: "transform 160ms ease, border-color 160ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "rgba(96,165,250,0.55)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(148,163,184,0.22)";
      }}
    >
      {tag ? (
        <div
          style={{
            display: "inline-flex",
            padding: "6px 10px",
            borderRadius: 999,
            background: "rgba(15,23,42,0.75)",
            border: "1px solid rgba(148,163,184,0.25)",
            color: "#93c5fd",
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {tag}
        </div>
      ) : null}

      <div
        style={{
          fontSize: 18,
          fontWeight: 900,
          color: "#f8fafc",
          letterSpacing: "-0.02em",
          marginBottom: 8,
        }}
      >
        {title}
      </div>

      <div style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.6 }}>
        {desc}
      </div>

      {kpis?.length ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
          {kpis.map((k) => (
            <div
              key={k}
              style={{
                padding: "8px 10px",
                borderRadius: 12,
                background: "rgba(2,6,23,0.60)",
                border: "1px solid rgba(148,163,184,0.18)",
                color: "#e2e8f0",
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              {k}
            </div>
          ))}
        </div>
      ) : null}

      <div style={{ marginTop: 14, fontSize: 13, color: "#93c5fd", fontWeight: 800 }}>
        View details →
      </div>
    </button>
  );
}

export default function Home() {
  const [activeModal, setActiveModal] = useState(null); // { type, item }
  const [exitIntentOpen, setExitIntentOpen] = useState(false);

  const services = useMemo(
    () => [
      {
        key: "consulting",
        tag: "Service",
        title: "AI Consulting & Transformation",
        bg: "/bg/consulting.jpg",
        desc:
          "Enterprise strategy, cloud architecture, security programs, modernization plans and operating-model redesign.",
        kpis: ["4x faster roadmaps", "Decision log + governance", "Vendor-neutral"],
        modal: {
          meta: "Core + advanced delivery",
          sections: [
            {
              h: "Core deliverables",
              bullets: [
                "Target architecture (current-state vs future-state) with transition stages.",
                "Cloud landing-zone blueprint (identity, network, security, logging, DR).",
                "Modernization plan: monolith → services, data platform, integration patterns.",
                "Security program: zero-trust baseline, IAM, secrets, audit readiness.",
              ],
            },
            {
              h: "Advanced features (AutonomIQ-grade)",
              bullets: [
                "AI Architecture Copilot: generates 3 alternative designs with trade-off matrices.",
                "10-year TCO simulation with sensitivity analysis (growth, region, license, downtime).",
                "Policy-as-code mapping: controls → evidence → automated checks.",
                "Outcome Ledger: every recommendation is traceable to assumptions + constraints.",
              ],
            },
            {
              h: "KPIs",
              bullets: [
                "Roadmap cycle time: weeks → days.",
                "Decision turnaround: faster approvals using evidence packs.",
                "Reduced rework through architecture constraints and standards.",
              ],
            },
          ],
        },
      },
      {
        key: "aiops",
        tag: "Service",
        title: "AIOps War Room (Self-Healing Ops)",
        bg: "/bg/aiops.jpg",
        desc:
          "Predictive monitoring, automated remediation, observability engineering, SLOs/SLIs, incident automation.",
        kpis: ["MTTR down", "Auto-remediation", "Cost optimization"],
        modal: {
          meta: "Core + advanced operations",
          sections: [
            {
              h: "Core capabilities",
              bullets: [
                "Observability: logs/metrics/traces baseline, service maps, golden signals.",
                "SLO framework: error budgets, burn-rate alerts, reliability reporting.",
                "Incident automation: runbooks, enrichment, correlation, routing.",
                "Change safety: deployment guardrails, automated rollback triggers.",
              ],
            },
            {
              h: "Advanced features (AutonomIQ-grade)",
              bullets: [
                "Digital Twin of IT Estate: simulate changes before production rollout.",
                "Auto-RCA graph: dependency + telemetry correlation to isolate root cause.",
                "Remediation sandbox: validate fixes in a safe environment, then promote.",
                "Continuous capacity planner: predicts scaling and pre-warms capacity.",
              ],
            },
            {
              h: "KPIs",
              bullets: [
                "Lower incident volume through prevention.",
                "Reduced MTTR through automation and correlation.",
                "Lower cloud spend through right-sizing and schedule-based scaling.",
              ],
            },
          ],
        },
      },
      {
        key: "development",
        tag: "Service",
        title: "AI Engineering & Product Delivery",
        bg: "/bg/development.jpg",
        desc:
          "Full-stack apps, APIs, platforms, data engineering and automation shipped with enterprise standards.",
        kpis: ["10x velocity", "Secure SDLC", "Release confidence"],
        modal: {
          meta: "Core + advanced engineering",
          sections: [
            {
              h: "Core deliverables",
              bullets: [
                "Solution architecture + backlog + sprint plan.",
                "Secure SDLC: reviews, scanning, SBOM, secrets control.",
                "Automated tests (unit/integration/e2e) and release gates.",
                "Deployment pipeline: CI/CD, environments, monitoring hooks.",
              ],
            },
            {
              h: "Advanced features (AutonomIQ-grade)",
              bullets: [
                "Autonomous backlog grooming: story slicing + acceptance criteria generation.",
                "Release quality scoring: stability + security + performance scorecards.",
                "Change impact prediction: which services/users will be affected.",
                "Always-on documentation: runbooks and diagrams stay synchronized.",
              ],
            },
            {
              h: "KPIs",
              bullets: [
                "Faster cycle time (idea → production).",
                "Lower defects via automated quality gates.",
                "Better reliability via observability-by-default.",
              ],
            },
          ],
        },
      },
      {
        key: "infrastructure",
        tag: "Service",
        title: "Cloud & Infrastructure Operations",
        bg: "/bg/infrastructure.jpg",
        desc:
          "Multi-cloud operations, Kubernetes, networking, DR, compliance monitoring, security hardening, backup strategy.",
        kpis: ["99.99% uptime", "Drift control", "Compliance-by-default"],
        modal: {
          meta: "Core + advanced infrastructure",
          sections: [
            {
              h: "Core deliverables",
              bullets: [
                "Landing-zone build: accounts/subscriptions, networking, IAM, logging.",
                "Kubernetes platform: cluster standards, ingress, policies, secrets, backups.",
                "DR blueprint: RPO/RTO, runbooks, testing schedule.",
                "Cost governance: tagging, budgets, alerts, reserved capacity strategy.",
              ],
            },
            {
              h: "Advanced features (AutonomIQ-grade)",
              bullets: [
                "Drift autopilot: detects and corrects config drift (with approvals).",
                "Compliance autopatching windows: safe automated updates with rollback plan.",
                "Predictive outage avoidance: capacity + dependency risk detection.",
                "Cross-cloud failover playbooks with periodic automated drills.",
              ],
            },
            {
              h: "KPIs",
              bullets: [
                "Lower downtime via proactive remediation.",
                "Lower spend via right-sizing + governance.",
                "Higher audit readiness through automated evidence.",
              ],
            },
          ],
        },
      },
      {
        key: "bpo",
        tag: "Service",
        title: "AI BPO & Service Desk",
        bg: "/bg/bpo.jpg",
        desc:
          "L1–L3 IT support workflows, ticket automation, knowledge management, SOPs, and operational reporting.",
        kpis: ["Faster resolution", "Higher deflection", "Standardized SOPs"],
        modal: {
          meta: "Core + advanced service delivery",
          sections: [
            {
              h: "Core deliverables",
              bullets: [
                "Ticket taxonomy + routing + priority rules.",
                "Knowledge base: SOPs, troubleshooting trees, runbooks.",
                "Service analytics: SLA/OLA reports, backlog health, repeat-issue heatmaps.",
                "Self-service portal patterns and deflection strategy.",
              ],
            },
            {
              h: "Advanced features (AutonomIQ-grade)",
              bullets: [
                "AI triage with confidence scoring and escalation rules.",
                "Auto-generated KB articles after resolution (human approval optional).",
                "Pattern discovery: repeated issues → permanent fixes backlog.",
                "Quality guardrails: hallucination checks + policy filters for responses.",
              ],
            },
            {
              h: "KPIs",
              bullets: [
                "Higher first-contact resolution.",
                "Lower time-to-assign and time-to-resolve.",
                "Better customer experience through consistent answers.",
              ],
            },
          ],
        },
      },
      {
        key: "security",
        tag: "Service",
        title: "Security, Risk & Compliance Automation",
        bg: "/bg/security.jpg",
        desc:
          "Zero-trust security, identity governance, automated evidence collection, audit readiness and continuous controls monitoring.",
        kpis: ["Audit-ready", "Zero-trust baseline", "Continuous controls"],
        modal: {
          meta: "Core + advanced security",
          sections: [
            {
              h: "Core deliverables",
              bullets: [
                "Security baseline: IAM hardening, MFA, least privilege, secrets hygiene.",
                "Logging and monitoring: detection rules, alert routing, incident playbooks.",
                "Compliance evidence plan: what evidence, where it comes from, how it’s stored.",
                "Secure vendor integration: access boundaries, data controls, logging.",
              ],
            },
            {
              h: "Advanced features (AutonomIQ-grade)",
              bullets: [
                "Controls-to-evidence automation: continuous evidence capture and indexing.",
                "Policy-as-code checks in CI/CD and runtime (prevent non-compliance).",
                "Blast-radius reduction design: segmentation + just-in-time access.",
                "Security posture scorecards per app/team with trending and actions.",
              ],
            },
            {
              h: "KPIs",
              bullets: [
                "Faster audits with fewer manual cycles.",
                "Reduced security incidents via baseline enforcement.",
                "Improved mean time to detect/respond through automation.",
              ],
            },
          ],
        },
      },
    ],
    []
  );

  const industries = useMemo(
    () => [
      {
        key: "bfs",
        title: "Banking & Financial Services",
        bg: "/bg/industry-bfs.jpg",
        desc: "Risk, uptime, security, compliance, payments reliability, fraud & monitoring automation.",
        modal: {
          meta: "Industry playbook",
          sections: [
            {
              h: "Core use-cases",
              bullets: [
                "High-availability operations and DR drills.",
                "Continuous compliance evidence collection.",
                "AIOps for transaction systems, batch, payments gateways.",
              ],
            },
            {
              h: "Advanced differentiator",
              bullets: [
                "Digital twin change simulation for core banking dependencies.",
                "Reliability scorecards per critical service with executive reporting.",
              ],
            },
          ],
        },
      },
      {
        key: "health",
        title: "Healthcare & Life Sciences",
        bg: "/bg/industry-health.jpg",
        desc: "Availability, data governance, secure integrations, performance and automation of operations.",
        modal: {
          meta: "Industry playbook",
          sections: [
            {
              h: "Core use-cases",
              bullets: [
                "Observability for clinical systems and patient-facing apps.",
                "Secure identity + access for staff and systems.",
                "Incident automation + standardized runbooks.",
              ],
            },
            {
              h: "Advanced differentiator",
              bullets: [
                "Evidence pipelines for audits and compliance reporting.",
                "Automated knowledge base from resolved incidents.",
              ],
            },
          ],
        },
      },
      {
        key: "retail",
        title: "Retail & E‑Commerce",
        bg: "/bg/industry-retail.jpg",
        desc: "Peak readiness, scaling, performance monitoring, cost governance and fast releases.",
        modal: {
          meta: "Industry playbook",
          sections: [
            {
              h: "Core use-cases",
              bullets: [
                "Auto-scaling and cost optimization for traffic spikes.",
                "SLOs for checkout and payments flows.",
                "Release guardrails to reduce peak outages.",
              ],
            },
            {
              h: "Advanced differentiator",
              bullets: [
                "Capacity pre-warming with predictive demand signals.",
                "Blast-radius controls for promotions and feature rollouts.",
              ],
            },
          ],
        },
      },
      {
        key: "mfg",
        title: "Manufacturing & Logistics",
        bg: "/bg/industry-manufacturing.jpg",
        desc: "Hybrid IT/OT monitoring patterns, reliability, DR, and continuous improvement automation.",
        modal: {
          meta: "Industry playbook",
          sections: [
            {
              h: "Core use-cases",
              bullets: [
                "Observability for supply chain and plant systems.",
                "Runbooks and SLA operations for critical workflows.",
                "Cost governance and infrastructure standardization.",
              ],
            },
            {
              h: "Advanced differentiator",
              bullets: [
                "Dependency mapping to minimize production downtime.",
                "Auto-RCA graphs for multi-system outages.",
              ],
            },
          ],
        },
      },
      {
        key: "telco",
        title: "Telecom & Media",
        bg: "/bg/industry-telco.jpg",
        desc: "High volume ops, monitoring, event correlation, performance and incident automation.",
        modal: {
          meta: "Industry playbook",
          sections: [
            {
              h: "Core use-cases",
              bullets: [
                "Telemetry correlation at scale.",
                "Automated ticket routing and incident response.",
                "Performance engineering and SLO governance.",
              ],
            },
            {
              h: "Advanced differentiator",
              bullets: [
                "Continuous capacity planning for high-throughput workloads.",
                "Predictive prevention with automated remediation workflows.",
              ],
            },
          ],
        },
      },
      {
        key: "public",
        title: "Public Sector & Smart Cities",
        bg: "/bg/industry-public.jpg",
        desc: "Governance, compliance, audit readiness, reliability and secure delivery at scale.",
        modal: {
          meta: "Industry playbook",
          sections: [
            {
              h: "Core use-cases",
              bullets: [
                "Audit-ready operations with evidence trails.",
                "Security baseline and identity governance.",
                "Reliability programs with SLA reporting.",
              ],
            },
            {
              h: "Advanced differentiator",
              bullets: [
                "Controls-to-evidence automation across services.",
                "Policy-as-code enforcement to prevent drift.",
              ],
            },
          ],
        },
      },
    ],
    []
  );

  // Exit intent (desktop)
  useEffect(() => {
    const onMouseOut = (e) => {
      // user moves cursor towards browser top bar
      if (e.clientY <= 0) setExitIntentOpen(true);
    };
    window.addEventListener("mouseout", onMouseOut);
    return () => window.removeEventListener("mouseout", onMouseOut);
  }, []);

  const openService = (item) => setActiveModal({ type: "service", item });
  const openIndustry = (item) => setActiveModal({ type: "industry", item });
  const closeModal = () => setActiveModal(null);

  const modalItem = activeModal?.item;
  const modalSections = modalItem?.modal?.sections ?? [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.28) 0%, transparent 45%), " +
          "radial-gradient(circle at 85% 75%, rgba(16,185,129,0.20) 0%, transparent 45%), " +
          "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.18) 0%, transparent 50%), " +
          "linear-gradient(180deg, #020617 0%, #020617 50%, #000000 100%)",
        color: "#f8fafc",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        lineHeight: 1.65,
        overflowX: "hidden",
      }}
    >
      <Head>
        <title>AutonomIQ Systems Pvt. Ltd. — AI-Operated Enterprise IT</title>
        <meta
          name="description"
          content="AutonomIQ Systems delivers AI-Operated Enterprise IT: consulting, AIOps, engineering, infrastructure and AI BPO—built for enterprise governance and outcomes."
        />
      </Head>

      {/* Top nav */}
      <header
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 1200,
          background: "rgba(2,6,23,0.78)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(148,163,184,0.20)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "inherit",
              minWidth: 240,
            }}
          >
            <img
              src="/autonomiq-logo.png"
              alt="AutonomIQ Systems logo"
              style={{
                width: 44,
                height: 44,
                objectFit: "contain",
                borderRadius: 12,
                background: "rgba(15,23,42,0.35)",
                border: "1px solid rgba(148,163,184,0.22)",
                padding: 6,
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div style={{ lineHeight: 1.15 }}>
              <div
                style={{
                  fontWeight: 900,
                  letterSpacing: "0.10em",
                  fontSize: 12,
                  textTransform: "uppercase",
                }}
              >
                AutonomIQ Systems
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 700 }}>
                AI‑Operated Enterprise IT
              </div>
            </div>
          </a>

          <nav
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "flex-end",
              alignItems: "center",
              fontSize: 13,
              color: "#cbd5e1",
              fontWeight: 800,
            }}
          >
            <a className="navLink" href="#services">
              Services
            </a>
            <a className="navLink" href="#industries">
              Industries
            </a>
            <a className="navLink" href="#operating-model">
              Operating model
            </a>
            <a className="navLink" href="#pricing">
              Pricing
            </a>
            <a className="navLink" href="#leadership">
              Leadership
            </a>
            <a className="navLink" href="#contact">
              Contact
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "#0b1220",
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #22c55e 50%, #a78bfa 100%)",
                padding: "10px 14px",
                borderRadius: 999,
                fontWeight: 900,
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 18px 40px rgba(34,197,94,0.20)",
              }}
            >
              Start assessment
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        style={{
          padding: "124px 18px 70px",
          borderBottom: "1px solid rgba(148,163,184,0.12)",
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.00) 0%, rgba(2,6,23,0.75) 60%, rgba(2,6,23,1) 100%), " +
            "linear-gradient(135deg, rgba(59,130,246,0.16) 0%, rgba(168,85,247,0.12) 40%, rgba(16,185,129,0.10) 100%), " +
            "url(/bg/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.9fr) minmax(0, 1.1fr)",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(15,23,42,0.78)",
                border: "1px solid rgba(96,165,250,0.45)",
                boxShadow: "0 0 40px rgba(59,130,246,0.18)",
                color: "#e2e8f0",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#22c55e",
                  boxShadow: "0 0 14px rgba(34,197,94,0.9)",
                }}
              />
              AI‑operated delivery • enterprise governance • measurable outcomes
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: clamp("2.6rem", "5.5vw", "4.4rem"),
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                fontWeight: 950,
                background:
                  "linear-gradient(135deg, #ffffff 0%, #e2e8f0 45%, #93c5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 70px rgba(255,255,255,0.12)",
              }}
            >
              AutonomIQ Systems Pvt. Ltd.
            </h1>

            <p
              style={{
                margin: "14px 0 0",
                maxWidth: 820,
                fontSize: 16,
                color: "#cbd5e1",
                lineHeight: 1.75,
              }}
            >
              Build, run and continuously optimize your enterprise IT with an AI‑operated model:
              consulting, AIOps, engineering, infrastructure and AI BPO—designed for reliability,
              security and predictable delivery.
            </p>

            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#0b1220",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #a78bfa 100%)",
                  padding: "14px 18px",
                  borderRadius: 999,
                  fontWeight: 950,
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 22px 60px rgba(59,130,246,0.22)",
                }}
              >
                Request a free assessment
              </a>

              <a
                href="#services"
                style={{
                  textDecoration: "none",
                  color: "#e2e8f0",
                  background: "rgba(2,6,23,0.55)",
                  padding: "14px 18px",
                  borderRadius: 999,
                  fontWeight: 900,
                  border: "1px solid rgba(148,163,184,0.18)",
                }}
              >
                Explore services
              </a>

              <a
                href="#comparison"
                style={{
                  textDecoration: "none",
                  color: "#93c5fd",
                  fontWeight: 900,
                  padding: "10px 8px",
                }}
              >
                See AutonomIQ vs MNC →
              </a>
            </div>

            <div
              style={{
                marginTop: 26,
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 10,
              }}
            >
              {[
                { k: "24/7", v: "Operations coverage" },
                { k: "SLO", v: "Reliability governance" },
                { k: "Auto", v: "Remediation playbooks" },
                { k: "Audit", v: "Evidence automation" },
              ].map((s) => (
                <div
                  key={s.k}
                  style={{
                    padding: 14,
                    borderRadius: 16,
                    background: "rgba(2,6,23,0.55)",
                    border: "1px solid rgba(148,163,184,0.18)",
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 950, color: "#f8fafc" }}>
                    {s.k}
                  </div>
                  <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 800 }}>
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder card */}
          <div
            style={{
              borderRadius: 20,
              border: "1px solid rgba(148,163,184,0.22)",
              background:
                "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(15,23,42,0.70) 100%)",
              padding: 18,
              boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 74,
                  height: 74,
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(148,163,184,0.22)",
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(168,85,247,0.18) 50%, rgba(16,185,129,0.12) 100%)",
                }}
              >
                <img
                  src="/founder-dayanidhi.png"
                  alt="Dayanidhi Dondapati — Founder & CEO"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    // If missing, show a clean fallback
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 950,
                    fontSize: 16,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Dayanidhi Dondapati
                </div>
                <div style={{ color: "#94a3b8", fontWeight: 800, fontSize: 12 }}>
                  Founder & CEO
                </div>
              </div>
            </div>

            <div style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.7 }}>
              Founder-led delivery model with strong governance: reliability, security, audit readiness and
              outcome accountability built into every engagement.
            </div>

            <div
              style={{
                marginTop: 14,
                padding: 14,
                borderRadius: 16,
                border: "1px solid rgba(148,163,184,0.18)",
                background: "rgba(2,6,23,0.45)",
              }}
            >
              <div style={{ fontSize: 12, color: "#93c5fd", fontWeight: 900 }}>
                Leadership priority
              </div>
              <div style={{ color: "#e2e8f0", fontWeight: 800, fontSize: 13 }}>
                “Enterprise-grade automation without compromising compliance.”
              </div>
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href="#leadership"
                style={{
                  textDecoration: "none",
                  color: "#e2e8f0",
                  background: "rgba(148,163,184,0.10)",
                  border: "1px solid rgba(148,163,184,0.18)",
                  padding: "10px 12px",
                  borderRadius: 12,
                  fontWeight: 900,
                  fontSize: 13,
                }}
              >
                View leadership
              </a>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#0b1220",
                  background:
                    "linear-gradient(135deg, #22c55e 0%, #60a5fa 60%, #a78bfa 100%)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: "10px 12px",
                  borderRadius: 12,
                  fontWeight: 950,
                  fontSize: 13,
                }}
              >
                Contact now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "70px 18px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="Core services"
            title="Enterprise services with deep delivery content"
            subtitle="Click any service for a full core-level + advanced-level breakdown (deliverables, operating model, KPIs and governance controls)."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {services.map((s) => (
              <Card
                key={s.key}
                title={s.title}
                desc={s.desc}
                kpis={s.kpis}
                tag={s.tag}
                bgUrl={s.bg}
                onClick={() => openService(s)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        style={{
          padding: "70px 18px",
          borderTop: "1px solid rgba(148,163,184,0.12)",
          borderBottom: "1px solid rgba(148,163,184,0.12)",
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.00) 0%, rgba(15,23,42,0.45) 40%, rgba(2,6,23,0.00) 100%)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="Industries"
            title="Industry-ready playbooks"
            subtitle="Click an industry to open the playbook: use-cases, reliability patterns, compliance posture and operating outcomes."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {industries.map((i) => (
              <Card
                key={i.key}
                title={i.title}
                desc={i.desc}
                tag="Industry"
                bgUrl={i.bg}
                onClick={() => openIndustry(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section id="operating-model" style={{ padding: "70px 18px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="How it works"
            title="AI-operated delivery model"
            subtitle="A simple, enterprise-safe operating model: discover → design → deliver → run/optimize, with governance checkpoints and decision logs."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                t: "Discover",
                d: "Rapid current-state mapping: architecture, ops telemetry, compliance posture, cost baselines, risks.",
                k: ["Intake + constraints", "Asset inventory", "Baseline KPIs"],
              },
              {
                t: "Design",
                d: "Blueprints + trade-offs: target architecture, controls mapping, delivery plan and measurable outcomes.",
                k: ["Options matrix", "Controls mapping", "Roadmap"],
              },
              {
                t: "Deliver",
                d: "Implementation with guardrails: CI/CD, testing, change safety, rollout strategy and readiness.",
                k: ["Release gates", "Rollback strategy", "SLO hooks"],
              },
              {
                t: "Run & Optimize",
                d: "Continuous operations: AIOps, cost governance, reliability reviews, evidence automation and improvements backlog.",
                k: ["SLO reporting", "Auto-remediation", "Evidence trail"],
              },
            ].map((x) => (
              <div
                key={x.t}
                style={{
                  borderRadius: 18,
                  border: "1px solid rgba(148,163,184,0.22)",
                  background:
                    "linear-gradient(180deg, rgba(2,6,23,0.45) 0%, rgba(15,23,42,0.55) 100%)",
                  padding: 18,
                }}
              >
                <div style={{ fontWeight: 950, fontSize: 16, marginBottom: 8 }}>
                  {x.t}
                </div>
                <div style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.65 }}>
                  {x.d}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
                  {x.k.map((k) => (
                    <div
                      key={k}
                      style={{
                        padding: "8px 10px",
                        borderRadius: 12,
                        background: "rgba(2,6,23,0.55)",
                        border: "1px solid rgba(148,163,184,0.18)",
                        fontWeight: 800,
                        fontSize: 12,
                        color: "#e2e8f0",
                      }}
                    >
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 18,
              borderRadius: 18,
              border: "1px solid rgba(148,163,184,0.18)",
              background: "rgba(2,6,23,0.45)",
              padding: 18,
            }}
          >
            <div style={{ fontWeight: 950, marginBottom: 10 }}>Advanced differentiator</div>
            <div style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.75 }}>
              AutonomIQ adds an “Outcome Ledger” layer: every recommendation, remediation and change
              is recorded with assumptions, constraints, impact metrics and governance checkpoints—so
              enterprise stakeholders can approve changes with traceable evidence.
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section
        id="comparison"
        style={{
          padding: "70px 18px",
          borderTop: "1px solid rgba(148,163,184,0.12)",
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.40) 0%, rgba(2,6,23,0.00) 100%)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="Why AutonomIQ"
            title="AutonomIQ vs typical MNC delivery"
            subtitle="Positioning table with operational truths: governance, speed, evidence, and reliability—not just marketing."
          />

          <div
            style={{
              overflowX: "auto",
              borderRadius: 18,
              border: "1px solid rgba(148,163,184,0.18)",
              background: "rgba(2,6,23,0.45)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 820 }}>
              <thead>
                <tr>
                  {["Dimension", "AutonomIQ Systems", "Typical MNC model", "Outcome"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "14px 14px",
                        fontSize: 12,
                        color: "#93c5fd",
                        letterSpacing: "0.10em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid rgba(148,163,184,0.18)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Delivery model",
                    "Automation-first with governance checkpoints",
                    "Human-heavy delivery towers",
                    "Higher consistency and speed",
                  ],
                  [
                    "Reliability",
                    "SLOs, error budgets, auto-remediation",
                    "Manual runbooks and reactive support",
                    "Lower MTTR and fewer repeats",
                  ],
                  [
                    "Compliance evidence",
                    "Automated evidence capture + indexing",
                    "Manual evidence collection for audits",
                    "Faster audits, fewer gaps",
                  ],
                  [
                    "Change safety",
                    "Release gates + rollback triggers + drift controls",
                    "Process-heavy, slower change cycles",
                    "Safer releases with faster cadence",
                  ],
                  [
                    "Cost governance",
                    "Built-in FinOps controls and optimization loops",
                    "Cost reviews and periodic optimization",
                    "Predictable spend reduction",
                  ],
                ].map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "14px 14px",
                          borderBottom:
                            idx === 4 ? "none" : "1px solid rgba(148,163,184,0.12)",
                          color: j === 0 ? "#e2e8f0" : "#cbd5e1",
                          fontWeight: j === 0 ? 900 : 600,
                          fontSize: 14,
                          lineHeight: 1.6,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "#0b1220",
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #22c55e 50%, #a78bfa 100%)",
                padding: "14px 18px",
                borderRadius: 999,
                fontWeight: 950,
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Get an assessment plan
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "70px 18px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="Pricing"
            title="Transparent, outcome-aligned pricing"
            subtitle="This is a starting point; final pricing depends on scope (apps, infra size, ticket volume, compliance needs and SLA)."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                name: "Assessment (Free)",
                price: "₹0",
                bestFor: "Discovery + roadmap + baseline KPIs",
                bullets: [
                  "Current-state mapping (infra/app/ops)",
                  "Risk + compliance posture summary",
                  "Quick-win cost opportunities",
                  "Delivery plan + next steps",
                ],
                highlight: false,
              },
              {
                name: "Ops Essential",
                price: "From ₹99,000 / month",
                bestFor: "AIOps + monitoring + automation",
                bullets: [
                  "Observability + SLO reporting",
                  "Incident automation + runbooks",
                  "Cost governance baseline",
                  "Release safety guardrails",
                ],
                highlight: true,
              },
              {
                name: "Enterprise Complete",
                price: "Custom (scope-based)",
                bestFor: "Consulting + AIOps + engineering + governance",
                bullets: [
                  "Architecture + transformation delivery",
                  "AIOps war room + reliability program",
                  "Security + compliance evidence automation",
                  "Operating-model and governance packs",
                ],
                highlight: false,
              },
            ].map((p) => (
              <div
                key={p.name}
                style={{
                  borderRadius: 18,
                  border: p.highlight
                    ? "1px solid rgba(34,197,94,0.55)"
                    : "1px solid rgba(148,163,184,0.22)",
                  background:
                    "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(15,23,42,0.62) 100%)",
                  padding: 18,
                  boxShadow: p.highlight ? "0 24px 80px rgba(34,197,94,0.14)" : "none",
                  position: "relative",
                }}
              >
                {p.highlight ? (
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(34,197,94,0.16)",
                      border: "1px solid rgba(34,197,94,0.35)",
                      color: "#86efac",
                      fontWeight: 950,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Popular
                  </div>
                ) : null}

                <div style={{ fontWeight: 950, fontSize: 16, marginBottom: 8 }}>
                  {p.name}
                </div>
                <div style={{ fontWeight: 950, fontSize: 20, color: "#f8fafc" }}>
                  {p.price}
                </div>
                <div style={{ marginTop: 6, color: "#94a3b8", fontWeight: 800, fontSize: 13 }}>
                  {p.bestFor}
                </div>

                <ul style={{ margin: "12px 0 0", paddingLeft: 18, color: "#cbd5e1" }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ margin: "8px 0", fontSize: 14, lineHeight: 1.6 }}>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 14 }}>
                  <a
                    href="#contact"
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      color: "#0b1220",
                      background:
                        "linear-gradient(135deg, #60a5fa 0%, #22c55e 70%, #a78bfa 100%)",
                      padding: "12px 14px",
                      borderRadius: 12,
                      fontWeight: 950,
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    Request pricing for my scope
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        style={{
          padding: "70px 18px",
          borderTop: "1px solid rgba(148,163,184,0.12)",
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.45) 0%, rgba(2,6,23,0.00) 100%)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="Leadership"
            title="Founder-led governance"
            subtitle="Leadership section is explicit (as requested): name, title, governance approach, and how AI-operated delivery stays enterprise-safe."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: 14,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(148,163,184,0.22)",
                background:
                  "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(15,23,42,0.62) 100%)",
                padding: 18,
              }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "1px solid rgba(148,163,184,0.22)",
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(168,85,247,0.18) 50%, rgba(16,185,129,0.12) 100%)",
                  }}
                >
                  <img
                    src="/founder-dayanidhi.png"
                    alt="Dayanidhi Dondapati — Founder & CEO"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 950, fontSize: 18 }}>
                    Dayanidhi Dondapati
                  </div>
                  <div style={{ color: "#94a3b8", fontWeight: 800, fontSize: 13 }}>
                    Founder & CEO
                  </div>
                  <div style={{ marginTop: 8, color: "#cbd5e1", fontSize: 14 }}>
                    Enterprise IT leadership • Reliability • Governance • Automation-first operations
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 14, color: "#cbd5e1", fontSize: 14, lineHeight: 1.8 }}>
                AutonomIQ’s AI-operated model is designed with a strict governance approach: every
                change has constraints, evidence, rollback plans, and audit-ready trails. The goal is
                to deliver enterprise outcomes without delivery risk and without unmanaged automation.
              </div>
            </div>

            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(148,163,184,0.22)",
                background:
                  "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(15,23,42,0.62) 100%)",
                padding: 18,
              }}
            >
              <div style={{ fontWeight: 950, fontSize: 16, marginBottom: 10 }}>
                Leadership governance commitments
              </div>

              <ul style={{ margin: 0, paddingLeft: 18, color: "#cbd5e1" }}>
                {[
                  "Outcome Ledger: decisions and assumptions are traceable.",
                  "Change safety: release gates + rollback triggers + approvals.",
                  "Reliability governance: SLOs, error budgets, executive reporting.",
                  "Evidence automation: continuous capture and searchable audit packs.",
                  "Security baseline: least privilege, monitoring, incident playbooks.",
                ].map((b) => (
                  <li key={b} style={{ margin: "10px 0", fontSize: 14, lineHeight: 1.7 }}>
                    {b}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 14 }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    color: "#0b1220",
                    background:
                      "linear-gradient(135deg, #60a5fa 0%, #22c55e 60%, #a78bfa 100%)",
                    padding: "12px 14px",
                    borderRadius: 12,
                    fontWeight: 950,
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  Talk to leadership
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "70px 18px 86px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="Contact"
            title="Request a free AI assessment"
            subtitle="Submit your current challenge. A structured assessment plan will be prepared (architecture, operations, security, cost and governance)."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: 14,
              alignItems: "start",
            }}
          >
            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(148,163,184,0.22)",
                background:
                  "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(15,23,42,0.62) 100%)",
                padding: 18,
              }}
            >
              <div style={{ fontWeight: 950, fontSize: 16, marginBottom: 10 }}>
                What you’ll get
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#cbd5e1" }}>
                {[
                  "Current-state analysis (infra/app/ops).",
                  "Reliability posture + top risks.",
                  "Cost baseline + quick-win opportunities.",
                  "Security/compliance posture and evidence gaps.",
                  "Recommended engagement plan with milestones.",
                ].map((b) => (
                  <li key={b} style={{ margin: "10px 0", fontSize: 14, lineHeight: 1.7 }}>
                    {b}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: 14,
                  padding: 14,
                  borderRadius: 16,
                  background: "rgba(2,6,23,0.45)",
                  border: "1px solid rgba(148,163,184,0.18)",
                }}
              >
                <div style={{ fontSize: 12, color: "#93c5fd", fontWeight: 950 }}>
                  Tip to get a faster response
                </div>
                <div style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.7 }}>
                  Share your cloud stack (AWS/Azure/GCP), current incident pain, and your target SLA/SLO.
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(148,163,184,0.22)",
                background:
                  "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(15,23,42,0.62) 100%)",
                padding: 18,
              }}
            >
              <form
                action="https://formsubmit.co/contact@autonomiqsystems.com"
                method="POST"
                style={{ display: "grid", gap: 12 }}
              >
                <input type="hidden" name="_subject" value="New Assessment Lead — AutonomIQ Systems" />
                <input type="hidden" name="_captcha" value="false" />

                {[
                  { label: "Company", name: "company", type: "text", placeholder: "Your company name" },
                  { label: "Role", name: "role", type: "text", placeholder: "CTO / CIO / IT Head / Founder" },
                  { label: "Email", name: "email", type: "email", placeholder: "name@company.com" },
                ].map((f) => (
                  <label key={f.name} style={{ display: "grid", gap: 6 }}>
                    <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {f.label}
                    </span>
                    <input
                      required
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      style={{
                        width: "100%",
                        padding: "12px 12px",
                        borderRadius: 14,
                        border: "1px solid rgba(148,163,184,0.22)",
                        background: "rgba(2,6,23,0.55)",
                        color: "#e2e8f0",
                        outline: "none",
                      }}
                    />
                  </label>
                ))}

                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Your challenge
                  </span>
                  <textarea
                    required
                    name="challenge"
                    rows={5}
                    placeholder="Example: High cloud costs, frequent incidents, slow releases, audit gaps, need SLO reporting..."
                    style={{
                      width: "100%",
                      padding: "12px 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(148,163,184,0.22)",
                      background: "rgba(2,6,23,0.55)",
                      color: "#e2e8f0",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </label>

                <button
                  type="submit"
                  style={{
                    marginTop: 6,
                    padding: "14px 14px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.18)",
                    cursor: "pointer",
                    fontWeight: 950,
                    background:
                      "linear-gradient(135deg, #60a5fa 0%, #22c55e 55%, #a78bfa 100%)",
                    color: "#0b1220",
                  }}
                >
                  Submit assessment request
                </button>

                <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>
                  Note: Submitting this form sends an email to contact@autonomiqsystems.com via FormSubmit.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(148,163,184,0.12)",
          background: "rgba(2,6,23,0.85)",
          padding: "26px 18px",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
            color: "#94a3b8",
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          <div>© {new Date().getFullYear()} AutonomIQ Systems Pvt. Ltd. All rights reserved.</div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="navLink" href="#top">
              Top
            </a>
            <a className="navLink" href="#services">
              Services
            </a>
            <a className="navLink" href="#industries">
              Industries
            </a>
            <a className="navLink" href="#pricing">
              Pricing
            </a>
            <a className="navLink" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Feature / Industry modal */}
      <Modal
        open={!!activeModal}
        onClose={closeModal}
        title={modalItem?.title || ""}
        meta={activeModal?.type === "service" ? "Service details" : "Industry playbook"}
        footer={
          <>
            <a
              href="#contact"
              onClick={closeModal}
              style={{
                textDecoration: "none",
                color: "#0b1220",
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #22c55e 60%, #a78bfa 100%)",
                padding: "12px 14px",
                borderRadius: 12,
                fontWeight: 950,
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Start assessment
            </a>
          </>
        }
      >
        {modalSections.map((s) => (
          <div key={s.h} style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 950, color: "#f8fafc", marginBottom: 8 }}>
              {s.h}
            </div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {s.bullets.map((b) => (
                <li key={b} style={{ margin: "8px 0" }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Modal>

      {/* Exit-intent popup */}
      <Modal
        open={exitIntentOpen}
        onClose={() => setExitIntentOpen(false)}
        title="Before you leave — get a free assessment plan"
        meta="Quick action"
        footer={
          <>
            <a
              href="#contact"
              onClick={() => setExitIntentOpen(false)}
              style={{
                textDecoration: "none",
                color: "#0b1220",
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #22c55e 60%, #a78bfa 100%)",
                padding: "12px 14px",
                borderRadius: 12,
                fontWeight: 950,
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Go to contact
            </a>
          </>
        }
      >
        <div style={{ marginBottom: 10 }}>
          Share your stack and constraints (cloud, SLA, compliance). An initial plan will be prepared:
        </div>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Current-state mapping + top reliability risks</li>
          <li>Cost baseline + quick wins</li>
          <li>Controls-to-evidence plan for audits</li>
          <li>Recommended delivery milestones</li>
        </ul>
      </Modal>

      {/* Floating button */}
      <a
        href="#contact"
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 1400,
          textDecoration: "none",
          color: "#0b1220",
          background:
            "linear-gradient(135deg, #60a5fa 0%, #22c55e 55%, #a78bfa 100%)",
          padding: "12px 14px",
          borderRadius: 999,
          fontWeight: 950,
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 18px 60px rgba(59,130,246,0.20)",
        }}
      >
        Start assessment
      </a>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        * {
          box-sizing: border-box;
        }
        .navLink {
          color: inherit;
          text-decoration: none;
          opacity: 0.9;
        }
        .navLink:hover {
          opacity: 1;
          color: #93c5fd;
        }
        @media (max-width: 920px) {
          section#top > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
