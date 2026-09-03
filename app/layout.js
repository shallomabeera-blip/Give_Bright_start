import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "GiveBright — Small gestures, real impact",
  description: "Create and support fundraisers with GiveBright.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link className="brand" href="/">
            <span className="mark">G</span>
            <span>GiveBright</span>
          </Link>

          <nav>
            <Link href="/campaigns">Home</Link>
            <Link href="/signup?next=/create">Start a fundraiser</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link className="outline" href="/login">Log in</Link>
            <Link className="primary" href="/signup">Sign up</Link>
          </nav>
        </header>

        {children}

        <footer>
          <Link href="/">
            <b>GiveBright</b>
          </Link>

          <span>Small gestures, real impact</span>

          <div>
            <Link href="/trust-safety">Trust & Safety</Link>
            {" · "}
            <Link href="/terms">Terms</Link>
            {" · "}
            <Link href="/privacy">Privacy</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}