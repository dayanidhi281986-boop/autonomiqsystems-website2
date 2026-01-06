export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ minHeight: "80vh", display: "flex", borderTop: "1px solid var(--line)" }}>
      <aside style={{ width: 260, borderRight: "1px solid var(--line)", padding: 18, background: "rgba(7,10,18,.9)" }}>
        <div style={{ fontWeight: 650, marginBottom: 18, fontSize: 14 }}>AutonomIQ Employee Portal</div>
        <nav style={{ display: "grid", gap: 6, fontSize: 13, color: "var(--muted)" }}>
          <a href="/portal">Overview</a>
          <a href="/portal/dashboard">Dashboard</a>
          <a href="/portal/profile">Profile</a>
          <a href="/portal/requests">Requests</a>
        </nav>
        <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--line)", fontSize: 12, color: "var(--muted)" }}>
          Internal use only
        </div>
      </aside>
      <div style={{ flex: 1 }}>
        <div className="wrap">{children}</div>
      </div>
    </section>
  );
}
