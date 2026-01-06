export const metadata = {
  title: "Terms of Use | AutonomIQ Systems",
};

export default function TermsPage() {
  return (
    <>
      <section className="hero pageHero">
        <div className="wrap">
          <h1 className="h1">Terms of Use</h1>
          <p className="pLead">
            These terms govern access to and use of the AutonomIQ Systems website.
            By using this site, you agree to these terms.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card" style={{ gridColumn: "span 12" }}>
              <h3>1. Website use</h3>
              <p>
                You may use this website for lawful purposes only. You must not attempt to disrupt,
                compromise, or misuse the website or its infrastructure.
              </p>

              <h3 style={{ marginTop: 16 }}>2. Intellectual property</h3>
              <p>
                Content on this website (text, designs, visuals) is owned by AutonomIQ Systems or used under permission.
                Unauthorized reproduction or commercial use is prohibited.
              </p>

              <h3 style={{ marginTop: 16 }}>3. No warranties</h3>
              <p>
                This website is provided “as is”. We do not warrant that the website will be uninterrupted
                or error-free at all times.
              </p>

              <h3 style={{ marginTop: 16 }}>4. Limitation of liability</h3>
              <p>
                AutonomIQ Systems is not liable for indirect or consequential damages arising from use of this website.
              </p>

              <h3 style={{ marginTop: 16 }}>5. Updates</h3>
              <p>
                We may update these terms from time to time. Continued use of the website indicates acceptance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

