export default function HomePage() {
  return (
    <section style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      
      <h1 style={{
        fontSize: "48px",
        marginBottom: "20px",
        color: "#60a5fa"
      }}>
        AutonomIQ Systems Pvt. Ltd.
      </h1>

      <p style={{
        fontSize: "22px",
        lineHeight: "1.6",
        color: "#e5e7eb",
        maxWidth: "900px"
      }}>
        AutonomIQ Systems is an AI-only IT services company delivering
        consulting, operations, and software development through
        fully autonomous artificial intelligence systems.
        <br /><br />
        No human dependency. No delays. Enterprise-grade outcomes.
      </p>

      <hr style={{
        margin: "50px 0",
        borderColor: "#1f2937"
      }} />

      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Our Core Services
      </h2>

      <ul style={{
        fontSize: "18px",
        lineHeight: "2",
        color: "#d1d5db"
      }}>
        <li><strong>AI IT Consulting</strong> — Architecture, strategy, transformation roadmaps</li>
        <li><strong>AIOps & IT Operations</strong> — Monitoring, automation, cost optimization</li>
        <li><strong>AI-Driven Development</strong> — Web platforms, APIs, enterprise automation</li>
        <li><strong>Autonomous Support</strong> — Self-healing systems & incident resolution</li>
      </ul>

      <div style={{
        marginTop: "60px",
        padding: "30px",
        backgroundColor: "#020617",
        border: "1px solid #1f2937",
        borderRadius: "12px"
      }}>
        <h3 style={{ color: "#93c5fd", marginBottom: "10px" }}>
          Operating Model
        </h3>
        <p style={{ fontSize: "16px", color: "#cbd5f5" }}>
          AutonomIQ Systems operates without traditional employees.
          All consulting, delivery, monitoring, and support functions
          are executed using advanced AI agents and automation workflows.
        </p>
      </div>

    </section>
  );
}
