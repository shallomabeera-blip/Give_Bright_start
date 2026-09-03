"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoogle = async () => {
    setMessage("");
    const nextPath = new URLSearchParams(window.location.search).get("next") || "/dashboard";
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
      setMessage("Demo sign-in enabled. Add Supabase settings for live Google authentication.");
      setTimeout(() => router.push(nextPath), 500);
      return;
    }
    try {
      const { error } = await supabase().auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}${nextPath}` },
      });
      if (error) setMessage(error.message);
    } catch {
      setMessage("Google sign-in needs your Supabase project settings to be configured.");
    }
  };

  const handleCreateAccount = async () => {
    if (!name || !email || !password) {
      setMessage("Please complete your name, email, and password.");
      return;
    }
    setLoading(true);
    setMessage("");
    const nextPath = new URLSearchParams(window.location.search).get("next") || "/login";
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
      setMessage("Demo account created. Add Supabase settings for live authentication.");
      setTimeout(() => router.push(`/login?next=${encodeURIComponent(nextPath)}`), 700);
      setLoading(false);
      return;
    }
    try {
      const { error } = await supabase().auth.signUp({
        email,
        password,
        options: { data: { full_name: name } },
      });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Account created. Check your email if confirmation is required.");
        setTimeout(() => router.push(`/login?next=${encodeURIComponent(nextPath)}`), 900);
      }
    } catch {
      setMessage("Authentication is not configured yet. Add your Supabase values to .env.local.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 520, margin: "auto" }}>
        <h1>Create your GiveBright account</h1>

        <button
          type="button"
          className="btn"
          onClick={handleGoogle}
          style={{ width: "100%", marginBottom: 16, background: "#fff", border: "1px solid #dfeafc", color: "#163456" }}
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" style={{ verticalAlign: "middle", marginRight: 10 }}>
            <path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.26Z" />
            <path fill="#34A853" d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.75 9.75 0 0 0 12 21.75Z" />
            <path fill="#FBBC05" d="M6.53 13.83A5.86 5.86 0 0 1 6.22 12c0-.64.11-1.26.31-1.83V7.64H3.29A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.36l3.24-2.53Z" />
            <path fill="#EA4335" d="M12 6.14c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.22 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.71 5.39l3.24 2.53C7.3 7.86 9.46 6.14 12 6.14Z" />
          </svg>
          Continue with Google
        </button>

        <div style={{ textAlign: "center", color: "#60789a", margin: "0 0 16px" }}>or</div>

        <div className="field">
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="field">
          <label>Password</label>
          <div style={{ position: "relative" }}>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} style={{ paddingRight: 42 }} />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#0b6ef3",
                fontWeight: 700,
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {message && <p role="status" style={{ color: "#60789a", lineHeight: 1.5 }}>{message}</p>}

        <button type="button" className="btn primary" onClick={handleCreateAccount} disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </button>
        <p style={{ marginBottom: 0, color: "#60789a", textAlign: "center" }}>
          Already have an account? <Link href={`/login?next=${encodeURIComponent(typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("next") || "/dashboard" : "/dashboard")}`} style={{ color: "#0b6ef3", fontWeight: 700 }}>Log in</Link>
        </p>
      </div>
    </main>
  );
}
