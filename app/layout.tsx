export const metadata = {
  title: "AutonomIQ Systems Pvt. Ltd.",
  description: "AI-Only IT Consulting, Operations & Development"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0a0a0a",
        color: "#ffffff"
      }}>
        <header style={{
          padding: "20px 40px",
          borderBottom: "1px solid #222",
          background: "linear-gradient(90deg, #0f172a, #020617)"
        }}>
          <h1 style={{ margin: 0, color: "#60a5fa" }}>
            AutonomIQ Systems
          </h1>
          <p style={{ margin: 0, fontSize: "14px", color: "#cbd5f5" }}>
            AI-Only IT Consulting, Operations & Development
          </p>
        </header>

        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>

        <footer style={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #222",
          fontSize: "12px",
          color: "#9ca3af"
        }}>
          © 2025 AutonomIQ Systems Pvt. Ltd. • AI-Operated Company
        </footer>
      </body>
    </html>
  );
}
