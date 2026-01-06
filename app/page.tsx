export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1 className="h1">Autonomous Enterprise Intelligence.</h1>
          <p className="pLead">
            AutonomIQ Systems designs AI-first operating models and builds secure,
            scalable digital systems that reduce operational noise, accelerate delivery,
            and strengthen governance—so enterprises can run with confidence at global scale.
          </p>

          <div className="ctaRow">
  <a className="btn btnPrimary" href="/services">Explore capabilities</a>
  <a className="btn" href="/contact">Talk to our strategy team</a>
  <a className="btn" href="/portal">Employee portal</a>
</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card">
              <h3>Why enterprises change now</h3>
              <p>
                Complexity, security pressure, and delivery velocity have outpaced manual IT.
                AutonomIQ builds autonomous, policy-driven systems where reliability is engineered,
                not chased.
              </p>
            </div>
            <div className="card">
              <h3>What makes AutonomIQ different</h3>
              <p>
                We treat governance, auditability, and security as core product features.
                Our solutions are designed to be explainable, traceable, and enterprise-ready—
                not experimental.
              </p>
            </div>
            <div className="card">
              <h3>Operating philosophy</h3>
              <p>
                Autonomy by design. Intelligence at every layer. Governance as code.
                Scale without fragility.
              </p>
            </div>
            <div className="card">
              <h3>Leadership</h3>
              <p>
                Built with real operations discipline: 15+ years of enterprise technology,
                delivery, and systems leadership.
              </p>
              <div style={{ marginTop: 12 }}>
                <a className="btn" href="/leadership">Meet the Founder & CEO</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
