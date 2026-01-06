export const metadata = {
  title: "What We Do | AutonomIQ Systems",
};

function ServiceBlock({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.8, fontSize: 14 }}>
        {bullets.map((b) => (
          <div key={b}>• {b}</div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="hero pageHero">
        <div className="wrap">
          <h1 className="h1">What We Do</h1>
          <p className="pLead">
            We build enterprise systems that reduce operational chaos, improve security posture,
            and accelerate delivery—using AI where it creates measurable control, speed, and resilience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <ServiceBlock
              title="Autonomous Operations (AIOps)"
              desc="Design and implementation of intelligent operations: detect early, triage fast, remediate safely."
              bullets={[
                "Predictive monitoring & anomaly detection (signal quality over noise).",
                "Incident triage automation with controlled playbooks.",
                "SLA risk forecasting + root-cause mapping.",
                "Cost/performance optimization with policy controls.",
              ]}
            />

            <ServiceBlock
              title="Enterprise Digital Engineering"
              desc="Cloud-native platforms and portals engineered for governance, observability, and scale."
              bullets={[
                "Next.js enterprise portals, internal platforms, and executive dashboards.",
                "API-first integration, event-driven patterns, secure data flows.",
                "DevSecOps CI/CD, release governance, environment controls.",
                "Reliability engineering, logging, and operational runbooks.",
              ]}
            />

            <ServiceBlock
              title="AI Strategy & Architecture"
              desc="Responsible AI adoption that survives real audits and enterprise constraints."
              bullets={[
                "AI use-case portfolio and prioritization with business value models.",
                "Reference architectures: identity, data, model, and policy layers.",
                "AI governance: auditability, traceability, access control, risk controls.",
                "Enablement for Copilot-style internal assistants (controlled, sourced answers).",
              ]}
            />

            <ServiceBlock
              title="Security & Governance-by-Design"
              desc="Security and compliance are treated as product requirements, not checklists."
              bullets={[
                "Zero-trust patterns, role/attribute access control, session risk thinking.",
                "Audit logging strategy: who did what, when, from where, and why.",
                "Policy-driven workflows (approvals, access reviews, evidence capture).",
                "Operational readiness: incident response & security reporting workflows.",
              ]}
            />
          </div>

          <div style={{ marginTop: 26 }}>
            <a className="btn btnPrimary" href="/contact">Engage with our team</a>
          </div>
        </div>
      </section>
    </>
  );
}

