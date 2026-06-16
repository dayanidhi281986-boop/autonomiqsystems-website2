export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1 className="h1">Autonomous Enterprise Intelligence.</h1>
          <p className="pLead">
            AutonomIQ Systems designs AI-first operating models and builds
            secure, scalable digital systems that reduce operational noise,
            accelerate delivery, and strengthen governance — so enterprises can
            run with confidence at global scale.
          </p>

          <div className="ctaRow">
            <a className="btn btnPrimary" href="/services">
              Explore Capabilities
            </a>
            <a className="btn" href="/dayoniq">
              DAYONIQ AI Platform
            </a>
            <a className="btn" href="/contact">
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card">
              <h3>Why enterprises act now</h3>
              <p>
                Complexity, security pressure, and delivery velocity have
                outpaced manual IT. AutonomIQ builds autonomous, policy-driven
                systems where reliability is engineered, not chased.
              </p>
            </div>
            <div className="card">
              <h3>What makes AutonomIQ different</h3>
              <p>
                We treat governance, auditability, and security as core product
                features. Our solutions are designed to be explainable,
                traceable, and enterprise-ready — not experimental.
              </p>
            </div>
            <div className="card">
              <h3>DAYONIQ AI</h3>
              <p>
                Our flagship AI platform — 57+ autonomous agents across 15
                SDLC phases. Transforms how software is planned, built,
                tested, and delivered. Built for IT services firms targeting
                global markets.
              </p>
              <div style={{ marginTop: 12 }}>
                <a className="btn" href="/dayoniq">
                  Learn More
                </a>
              </div>
            </div>
            <div className="card">
              <h3>Leadership</h3>
              <p>
                Built with real operations discipline: 14+ years of enterprise
                technology, delivery, and systems leadership from Hyderabad,
                serving UK, UAE, and ANZ markets.
              </p>
              <div style={{ marginTop: 12 }}>
                <a className="btn" href="/leadership">
                  Meet the Founder &amp; CEO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
