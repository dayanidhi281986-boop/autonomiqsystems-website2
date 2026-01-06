export const metadata = {
  title: "Employee Portal | AutonomIQ Systems",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="section"
      style={{
        minHeight: "80vh",
        display: "flex",
        borderTop: "1px solid var(--line)",
      }}
    >
      <aside
        style={{
          width: 260,
          borderRight: "1px solid var(--line)",
          padding: 18,
          background: "rgba(7,10,18,.9)",
        }}
      >
        <div style={{ fontWeight: 650, marginBottom: 18, fontSize: 14 }}>
          AutonomIQ Employee Portal
        </div>
        <nav
          style={{
            display: "grid",
            gap: 6,
            fontSize: 13,
            color: "var(--muted)",
          }}
        >
          <a href="/portal">Overview</a>
          <a href="/portal/dashboard">My Dashboard</a>
          <a href="/portal/profile">My Profile</a>
          <a href="/portal/requests">Requests & Approvals</a>
        </nav>

        <div
          style={{
            marginTop: 18,
            paddingTop: 18,
            borderTop: "1px solid var(--line)",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          For internal use only. Do not share portal links or screenshots
          externally.
        </div>
      </aside>

      <div style={{ flex: 1 }}>
        <div className="wrap">{children}</div>
      </div>
    </section>
  );
}
