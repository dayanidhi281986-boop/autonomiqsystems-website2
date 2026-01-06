export const metadata = {
  title: "Portal Login | AutonomIQ Systems",
};

export default function PortalLoginPage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 32 }}>
        Employee Login
      </h1>
      <p className="pLead" style={{ maxWidth: 640 }}>
        Restricted access. Use your official AutonomIQ email address to sign in.
        Do not use personal email IDs.
      </p>

      <div
        className="card"
        style={{ marginTop: 24, maxWidth: 480, padding: 24 }}
      >
        <form style={{ display: "grid", gap: 10 }}>
          <input
            placeholder="Work Email"
            type="email"
            style={{
              width: "100%",
              padding: "12px 12px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(255,255,255,.04)",
              color: "#E9EEF7",
              outline: "none",
            }}
          />
          <input
            placeholder="Password"
            type="password"
            style={{
              width: "100%",
              padding: "12px 12px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.12)",
              background: "rgba(255,255,255,.04)",
              color: "#E9EEF7",
              outline: "none",
            }}
          />
          <button className="btn btnPrimary" type="button">
            Sign in (wire auth later)
          </button>
        </form>

        <div
          style={{
            marginTop: 12,
            fontSize: 12,
            color: "var(--muted)",
            lineHeight: 1.6,
          }}
        >
          Authentication is not connected yet. Next step: integrate with your
          identity provider (e.g., Azure AD, Cognito, custom JWT) and protect
          all /portal routes.
        </div>
      </div>
    </>
  );
}
