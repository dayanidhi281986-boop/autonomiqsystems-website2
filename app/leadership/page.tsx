export const metadata = {
  title: "Leadership | AutonomIQ Systems",
};

export default function LeadershipPage() {
  return (
    <>
      <section
        className="hero"
        style={{
          background:
            'linear-gradient(180deg, rgba(7,10,18,.35), rgba(7,10,18,.92)), url("/bg-leadership.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <h1 className="h1">Leadership</h1>
          <p className="pLead">
            AutonomIQ Systems is led with an execution-first mindset: enterprise operations discipline,
            platform engineering, and governance-driven delivery.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card" style={{ gridColumn: "span 12" }}>
              <h3>Dayanidhi Dondapati — Founder & CEO</h3>
              <p>
                Dayanidhi Dondapati brings 15+ years of experience across enterprise IT operations,
                infrastructure, delivery leadership, and platform-oriented engineering. His focus is to
                build systems that enterprises can operate reliably—where automation reduces friction,
                AI improves decision quality, and governance is built-in.
              </p>
              <div style={{ marginTop: 14, color: "var(--muted)", lineHeight: 1.8, fontSize: 14 }}>
                <div>• Enterprise operations & service delivery leadership.</div>
                <div>• Cloud/DevOps execution: CI/CD, IaC, containers, platform reliability.</div>
                <div>• Automation-first mindset: reduce manual work, increase control and auditability.</div>
                <div>• Platform vision: internal portals, intelligence layers, governance frameworks.</div>
              </div>

              <div style={{ marginTop: 18, color: "var(--muted)", fontSize: 13 }}>
                Add your professional photo as: <b>public/founder.jpg</b> and <b>public/bg-leadership.jpg</b>.
                (We are using background images instead of icons.)
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

