export const metadata = {
  title: "Careers | AutonomIQ Systems",
};

export default function CareersPage() {
  return (
    <>
      <section className="hero pageHero">
        <div className="wrap">
          <h1 className="h1">Careers</h1>
          <p className="pLead">
            Build systems that enterprises depend on: autonomous operations, secure platforms,
            and AI-enabled governance. We value execution, clarity, and ownership.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card">
              <h3>What you’ll work on</h3>
              <p>
                Enterprise portals, platform services, operational intelligence, automation frameworks,
                and governance-driven engineering.
              </p>
              <div style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.8, fontSize: 14 }}>
                <div>• Next.js enterprise UI systems (App Router, performance, SEO).</div>
                <div>• Platform reliability & DevSecOps automation.</div>
                <div>• AI-assisted operations with traceable, controlled outcomes.</div>
                <div>• Security-by-design patterns and evidence-based compliance.</div>
              </div>
            </div>

            <div className="card">
              <h3>Hiring tracks</h3>
              <p>We hire for capability depth and operational maturity.</p>
              <div style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.8, fontSize: 14 }}>
                <div>• Full-Stack / Frontend (Next.js, React, UI systems).</div>
                <div>• Cloud / DevOps / SRE (CI/CD, Kubernetes, observability).</div>
                <div>• Platform / IT Operations (ITSM automation, AIOps).</div>
                <div>• Enterprise Architecture / Security governance.</div>
              </div>
            </div>

            <div className="card">
              <h3>Equal opportunity</h3>
              <p>
                AutonomIQ Systems is an equal opportunity organization. We are committed to fair hiring,
                inclusive work practices, and merit-based growth.
              </p>
            </div>

            <div className="card">
              <h3>Apply</h3>
              <p>
                Send your profile with a short note describing what you can build and operate at scale.
              </p>
              <div style={{ marginTop: 12 }}>
                <a className="btn btnPrimary" href="/contact">Contact for opportunities</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

