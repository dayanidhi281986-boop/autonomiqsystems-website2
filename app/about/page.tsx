export const metadata = {
  title: "About | AutonomIQ Systems",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero pageHero">
        <div className="wrap">
          <h1 className="h1">About AutonomIQ Systems</h1>
          <p className="pLead">
            AutonomIQ Systems is built to help enterprises transition from manual,
            reactive IT to autonomous, policy-governed digital operations—without
            compromising security, auditability, or reliability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card">
              <h3>What we are</h3>
              <p>
                An AI-first enterprise technology firm focused on autonomous operations,
                secure digital engineering, and governance-by-design. We deliver systems
                that can be operated, audited, and scaled like a real enterprise platform.
              </p>
            </div>
            <div className="card">
              <h3>What we are not</h3>
              <p>
                Not a template agency, not “buzzword AI”, and not fragile prototypes.
                Every solution is designed with controls: identity, policy, logs, and
                traceability.
              </p>
            </div>
            <div className="card">
              <h3>Vision</h3>
              <p>
                Enable enterprises to operate intelligently and autonomously—where AI augments
                decisions, operations self-correct, and governance is embedded in the system.
              </p>
            </div>
            <div className="card">
              <h3>Operating principles</h3>
              <p>
                Autonomy by design. Intelligence at every layer. Governance as code. Scale
                without fragility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
