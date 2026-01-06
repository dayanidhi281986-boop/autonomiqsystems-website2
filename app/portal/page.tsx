export default function PortalHome() {
  return (
    <>
      <h1 style={{ fontSize: 32 }}>Employee Portal</h1>
      <p style={{ maxWidth: 720 }}>Central workspace for employees.</p>
      <div className="grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h3>Dashboard</h3>
          <p>Your work, tasks, updates.</p>
          <a className="btn btnPrimary" href="/portal/dashboard">Go</a>
        </div>
        <div className="card">
          <h3>Profile</h3>
          <p>Employee information.</p>
          <a className="btn" href="/portal/profile">View</a>
        </div>
        <div className="card">
          <h3>Requests</h3>
          <p>Internal requests & approvals.</p>
          <a className="btn" href="/portal/requests">Open</a>
        </div>
      </div>
    </>
  );
}
