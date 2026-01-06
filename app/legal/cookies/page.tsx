export const metadata = {
  title: "Cookie Policy | AutonomIQ Systems",
};

export default function CookiesPage() {
  return (
    <>
      <section className="hero pageHero">
        <div className="wrap">
          <h1 className="h1">Cookie Policy</h1>
          <p className="pLead">
            Cookies help improve website performance and user experience. This page explains how cookies may be used.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid">
            <div className="card" style={{ gridColumn: "span 12" }}>
              <h3>1. What are cookies?</h3>
              <p>
                Cookies are small text files stored by your browser to remember preferences and support analytics.
              </p>

              <h3 style={{ marginTop: 16 }}>2. How we use cookies</h3>
              <p>
                We may use cookies for essential site operation, performance analytics, and security monitoring.
              </p>

              <h3 style={{ marginTop: 16 }}>3. Managing cookies</h3>
              <p>
                You can control cookies through browser settings. Disabling cookies may impact site functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

