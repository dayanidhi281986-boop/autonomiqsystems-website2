export default function Dashboard() {
  return (
    <>
      <h1 style={{ fontSize: 30 }}>My Dashboard</h1>
      <p style={{ maxWidth: 720 }}>Your work overview.</p>
      <div className="grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h3>Open Items</h3>
          <p>Tasks, tickets assigned to you.</p>
        </div>
        <div className="card">
          <h3>My Requests</h3>
          <p>Track your submissions.</p>
        </div>
        <div className="card">
          <h3>Announcements</h3>
          <p>Company updates.</p>
        </div>
      </div>
    </>
  );
}
