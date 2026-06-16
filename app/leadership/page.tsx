export const metadata = {
  title: "Leadership | AutonomIQ Systems",
};

export default function LeadershipPage() {
  return (
    <>
      <section
        className="hero"
        style={{
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <h1 className="h1">Leadership</h1>
          <p className="pLead">
            AutonomIQ Systems is led with an execution-first mindset: enterprise
            operations discipline, platform engineering, and governance-driven
            delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card" style={{ gridColumn: "span 12" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 24,
                  flexWrap: "wrap",
                }}
              >
                <img
                  src="/founder-dayanidhi.png"
                  alt="Dayanidhi Dondapati — Founder & CEO"
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 12,
                    objectFit: "cover",
                    border: "1px solid rgba(255,255,255,.12)",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3>Dayanidhi Dondapati — Founder &amp; CEO</h3>
                  <p style={{ marginTop: 8 }}>
                    Dayanidhi Dondapati brings 14+ years of experience across
                    enterprise IT operations, infrastructure, delivery
                    leadership, and platform-oriented engineering. His focus is
                    building systems that enterprises can operate reliably —
                    where automation reduces friction, AI improves decision
                    quality, and governance is built in.
                  </p>
                  <div
                    style={{
                      marginTop: 14,
                      color: "var(--muted)",
                      lineHeight: 1.8,
                      fontSize: 14,
                    }}
                  >
                    <div>
                      • Enterprise operations &amp; service delivery leadership
                    </div>
                    <div>
                      • Cloud / DevOps execution: CI/CD, containers, platform
                      reliability
                    </div>
                    <div>
                      • Automation-first mindset: reduce manual work, increase
                      control and auditability
                    </div>
                    <div>
                      • Platform vision: internal portals, intelligence layers,
                      governance frameworks
                    </div>
                    <div>
                      • Founder of DAYONIQ AI — autonomous SDLC intelligence
                      platform
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Company Founded</h3>
              <p>
                AutonomIQ Systems &amp; Solutions Pvt. Ltd. was incorporated in
                December 2024, headquartered in Hyderabad, Telangana, India.
                The company is focused on delivering AI-first enterprise
                technology to international markets.
              </p>
            </div>

            <div className="card">
              <h3>Vision</h3>
              <p>
                Enable enterprises to operate intelligently and autonomously —
                where AI augments decisions, operations self-correct, and
                governance is embedded in the system from day one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
