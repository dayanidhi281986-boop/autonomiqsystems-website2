export const metadata = {
  title: "Privacy Policy | AutonomIQ Systems",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="hero pageHero">
        <div className="wrap">
          <h1 className="h1">Privacy Policy</h1>
          <p className="pLead">
            This policy explains how AutonomIQ Systems collects, uses, stores, and protects personal information.
            (Website policy — can be expanded with legal counsel as the company scales.)
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card" style={{ gridColumn: "span 12" }}>
              <h3>1. Information we collect</h3>
              <p>
                We may collect information you submit via forms (name, email, organization, message) and
                basic technical data (browser type, device, pages visited) for analytics and security.
              </p>

              <h3 style={{ marginTop: 16 }}>2. How we use information</h3>
              <p>
                We use the information to respond to inquiries, provide requested information,
                improve website performance, and maintain security.
              </p>

              <h3 style={{ marginTop: 16 }}>3. Data retention</h3>
              <p>
                We retain form submissions for the minimum time required to respond and for operational records,
                unless a longer retention is required for legal/compliance reasons.
              </p>

              <h3 style={{ marginTop: 16 }}>4. Data sharing</h3>
              <p>
                We do not sell personal data. We may share limited data with service providers (hosting, email,
                analytics) strictly to operate the website, subject to confidentiality and security controls.
              </p>

              <h3 style={{ marginTop: 16 }}>5. Security</h3>
              <p>
                We apply reasonable security measures to protect information. However, no online system is 100% secure.
              </p>

              <h3 style={{ marginTop: 16 }}>6. Contact</h3>
              <p>
                For privacy queries, contact us via the Contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

