import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutonomIQ Systems",
  description:
    "Autonomous Enterprise Intelligence — AI-first consulting, operations, and digital engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <header className="nav">
            <div className="navInner">
              <a className="brand" href="/">AutonomIQ Systems</a>
              <nav className="menu">
                <a href="/about">About</a>
                <a href="/services">What We Do</a>
                <a href="/leadership">Leadership</a>
                <a href="/careers">Careers</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>
          </header>

          {children}

          <footer className="footer">
            <div className="footerInner">
              <div className="footerCols">
                <div>
                  <div className="footerTitle">AutonomIQ Systems</div>
                  <div className="footerText">
                    Autonomous Enterprise Intelligence — built for resilience, scale, and governance.
                  </div>
                </div>
                <div>
                  <div className="footerTitle">Company</div>
                  <a href="/about">About</a>
                  <a href="/leadership">Leadership</a>
                  <a href="/careers">Careers</a>
                  <a href="/contact">Contact</a>
                </div>
                <div>
                  <div className="footerTitle">Legal</div>
                  <a href="/legal/privacy">Privacy</a>
                  <a href="/legal/terms">Terms</a>
                  <a href="/legal/cookies">Cookies</a>
                </div>
              </div>

              <div className="footerBottom">
                © {new Date().getFullYear()} AutonomIQ Systems. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
