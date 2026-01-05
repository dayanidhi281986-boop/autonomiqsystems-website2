import Link from "next/link";

export default function PortalHome() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>Employee Portal</h1>
      <p>Select an option:</p>

      <ul>
        <li><Link href="/portal/login">Login</Link></li>
        <li><Link href="/portal/timesheet">Timesheet</Link></li>
        <li><Link href="/portal/trainings">Trainings</Link></li>
      </ul>
    </main>
  );
}
