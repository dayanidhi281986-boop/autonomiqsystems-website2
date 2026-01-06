export const metadata = {
  title: "My Profile | Employee Portal",
};

export default function PortalProfilePage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 30 }}>
        My Profile
      </h1>
      <p className="pLead" style={{ maxWidth: 720 }}>
        Static placeholder for now. Later this should load employee data after
        authentication.
      </p>

      <div
        className="card"
        style={{ marginTop: 24, maxWidth: 640, padding: 24 }}
      >
        <h3>Profile Details</h3>
        <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
          Example fields to support:
        </p>
        <ul style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
          <li>Full Name, Employee ID</li>
          <li>Role, Department, Reporting Manager</li>
          <li>Location, Contact details</li>
          <li>Join date, Employment type</li>
        </ul>
      </div>
    </>
  );
}
