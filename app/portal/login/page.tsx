export default function PortalLogin() {
  return (
    <>
      <h1 style={{ fontSize: 32 }}>Employee Login</h1>
      <p style={{ maxWidth: 640 }}>Use your work email.</p>
      <div className="card" style={{ marginTop: 24, maxWidth: 480, padding: 24 }}>
        <input placeholder="Work Email" style={{ width: "100%", padding: "12px", borderRadius: 12, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", color: "#E9EEF7", marginBottom: 12 }} />
        <input placeholder="Password" type="password" style={{ width: "100%", padding: "12px", borderRadius: 12, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", color: "#E9EEF7", marginBottom: 12 }} />
        <button className="btn btnPrimary" style={{ width: "100%" }}>Sign In</button>
        <p style={{ marginTop: 12, fontSize: 12, color: "var(--muted)" }}>Auth backend to be added.</p>
      </div>
    </>
  );
}
