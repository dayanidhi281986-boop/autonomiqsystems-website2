export const metadata = {
  title: "Requests & Approvals | Employee Portal",
};

export default function PortalRequestsPage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 30 }}>
        Requests & Approvals
      </h1>
      <p className="pLead" style={{ maxWidth: 720 }}>
        Placeholder for an internal request system: access requests, equipment,
        leave workflows, or operations approvals.
      </p>

      <div className="card" style={{ marginTop: 24, padding: 24 }}>
        <h3>Request types (to support)</h3>
        <ul style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
          <li>System / access requests</li>
          <li>Hardware / asset requests</li>
          <li>Change / deployment approvals</li>
          <li>Other operations workflows</li>
        </ul>
        <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 13 }}>
          Next step: implement backend API routes and connect them to your ITSM
          / ticketing platform.
        </p>
      </div>
    </>
  );
}
