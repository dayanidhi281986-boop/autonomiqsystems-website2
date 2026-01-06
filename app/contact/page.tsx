import React from "react";

export const metadata = {
  title: "Contact | AutonomIQ Systems",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(255,255,255,.04)",
  color: "#E9EEF7",
  outline: "none",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero pageHero">
        <div className="wrap">
          <h1 className="h1">Contact</h1>
          <p className="pLead">
            For enterprise engagements, partnerships, or hiring—reach out with context.
            Avoid sharing confidential client data through this form.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card">
              <h3>Business inquiry</h3>
              <p>
                Use a business email and include your objective (AIOps, platform build, security governance,
                transformation roadmap).
              </p>

              <form style={{ marginTop: 14, display: "grid", gap: 10 }}>
                <input placeholder="Full Name" style={inputStyle} />
                <input placeholder="Company / Organization" style={inputStyle} />
                <input placeholder="Business Email" style={inputStyle} />
                <select style={inputStyle as any} defaultValue="General">
                  <option>General</option>
                  <option>Platform / Portals</option>
                  <option>Autonomous Operations (AIOps)</option>
                  <option>AI Strategy & Architecture</option>
                  <option>Security & Governance</option>
                  <option>Careers</option>
                  <option>Partnerships</option>
                </select>
                <textarea placeholder="Message" rows={5} style={inputStyle} />
                <button className="btn btnPrimary" type="button">
                  Send (wire backend later)
                </button>
              </form>

              <div style={{ marginTop: 12, color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>
                Note: This is UI-only right now. Next step is to connect it to an email/API route
                without exposing credentials.
              </div>
            </div>

            <div className="card">
              <h3>Direct</h3>
              <p>Website: www.autonomiqsystems.com</p>
              <p style={{ marginTop: 10, color: "var(--muted)" }}>
                Recommended: create a domain email like <b>contact@autonomiqsystems.com</b> for
                enterprise credibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
