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
  fontSize: 14,
};

export default function ContactPage() {
  return (
    <>
      <section className="hero pageHero">
        <div className="wrap">
          <h1 className="h1">Contact</h1>
          <p className="pLead">
            For enterprise engagements, partnerships, or hiring — reach out
            with context. Our team responds within 24 hours on business days.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card">
              <h3>Business Inquiry</h3>
              <p>
                Use a business email and include your objective — AIOps,
                platform build, AI strategy, or security governance.
              </p>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                style={{ marginTop: 14, display: "grid", gap: 10 }}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="5ae0b97e-fa3b-4979-a01b-1552729325d4"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Business Inquiry — AutonomIQ Systems"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://autonomiqsystems.com/contact"
                />

                <input
                  name="name"
                  placeholder="Full Name"
                  style={inputStyle}
                  required
                />
                <input
                  name="company"
                  placeholder="Company / Organisation"
                  style={inputStyle}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Business Email"
                  style={inputStyle}
                  required
                />
                <select
                  name="topic"
                  style={inputStyle as React.CSSProperties}
                  defaultValue="General"
                >
                  <option value="General">General</option>
                  <option value="Platform / Portals">Platform / Portals</option>
                  <option value="Autonomous Operations (AIOps)">
                    Autonomous Operations (AIOps)
                  </option>
                  <option value="AI Strategy & Architecture">
                    AI Strategy &amp; Architecture
                  </option>
                  <option value="Security & Governance">
                    Security &amp; Governance
                  </option>
                  <option value="DAYONIQ AI Product">DAYONIQ AI Product</option>
                  <option value="Careers">Careers</option>
                  <option value="Partnerships">Partnerships</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirement"
                  rows={5}
                  style={inputStyle}
                  required
                />
                <button className="btn btnPrimary" type="submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="card">
              <h3>Direct Contact</h3>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@autonomiqsystems.com"
                  style={{ color: "var(--accent)" }}
                >
                  contact@autonomiqsystems.com
                </a>
              </p>
              <p style={{ marginTop: 10 }}>
                Location: Hyderabad, Telangana, India
              </p>
              <p style={{ marginTop: 6 }}>
                Serving: United Kingdom · UAE · Australia · New Zealand
              </p>
              <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 13, lineHeight: 1.7 }}>
                We respond to all business inquiries within 24 hours on
                business days. Please use a business email for faster routing.
              </p>
              <div style={{ marginTop: 20 }}>
                <h3>Response Time</h3>
                <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8, marginTop: 8 }}>
                  General inquiries: Within 24 hours<br />
                  Enterprise engagements: Within 4 hours<br />
                  Partnerships: Within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
