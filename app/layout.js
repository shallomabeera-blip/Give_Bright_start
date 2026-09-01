import "./globals.css";

export const metadata = {
  title: "GiveBright — Fundraising made human",
  description: "Create and support fundraisers with GiveBright.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <a className="brand" href="/">
            <span className="mark">G</span>
            <span>GiveBright</span>
          </a>

          <nav>
            <a href="/campaigns">Discover</a>
            <a href="/create">Start a fundraiser</a>
            <a href="/dashboard">Dashboard</a>
            <a className="outline" href="/login">Log in</a>
            <a className="primary" href="/signup">Sign up</a>
          </nav>
        </header>

        {children}

        <footer>
          <a href="/">
            <b>GiveBright</b>
          </a>

          <span>Fundraising made human.</span>

          <div>
            <a href="/trust-safety">Trust & Safety</a>
            {" · "}
            <a href="/terms">Terms</a>
            {" · "}
            <a href="/privacy">Privacy</a>
          </div>
        </footer>
      </body>
    </html>
  );
}