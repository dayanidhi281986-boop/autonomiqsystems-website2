export const metadata = {
  title: "Dashboard | Employee Portal",
};

export default function PortalDashboardPage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 30 }}>
        My Dashboard
      </h1>
      <p className="pLead" style={{ maxWidth: 720 }}>
        High-level view of your work, requests, and operational signals. This
        is the starting point for your daily work.
      </p>

      <div className="grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h3>Open Items</h3>
          <p>
            Shows tasks, tickets, or operational actions assigned to you. To be
            wired to your real systems (Jira, ServiceNow, etc.).
          </p>
        </div>
        <div className="card">
          <h3>Requests you raised</h3>
          <p>
            Track approvals or internal requests you have submitted (access,
            hardware, operations changes).
          </p>
        </div>
        <div className="card">
          <h3>Announcements</h3>
          <p>
            Company-level or team-level announcements for employees. To be
            connected to an internal CMS or admin panel.
          </p>
        </div>
        <div className="card">
          <h3>Quick links</h3>
          <p>Links to critical tools and internal knowledge base.</p>
        </div>
      </div>
    </>
  );
}
