import "./globals.css";

export const metadata = {
  title: "AutonomIQ Systems Pvt. Ltd.",
  description: "AI-only IT Consulting, Operations & Development"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
