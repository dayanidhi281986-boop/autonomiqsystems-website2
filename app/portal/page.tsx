export default function PortalHomePage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 32 }}>
        Employee Portal
      </h1>
      <p className="pLead" style={{ maxWidth: 720 }}>
        Central workspace for AutonomIQ Systems employees: access your dashboard,
        profile, internal requests, and operations tools in a single place.
      </p>

      <div className="grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h3>My Dashboard</h3>
          <p>
            View assigned work, requests, and updates relevant to your role.
          </p>
          <div style={{ marginTop: 12 }}>
            <a className="btn btnPrimary" href="/portal/dashboard">
              Go to Dashboard
            </a>
          </div>
        </div>

        <div className="card">
          <h3>My Profile</h3>
          <p>
            View and maintain your basic employee information, contact details,
            and role information.
          </p>
          <div style={{ marginTop: 12 }}>
            <a className="btn" href="/portal/profile">
              View Profile
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Requests & Approvals</h3>
          <p>
            Track internal requests such as access, assets, or operations
            changes. Approval flows can be plugged in later.
          </p>
          <div style={{ marginTop: 12 }}>
            <a className="btn" href="/portal/requests">
              Open Requests
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
