"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setMessage("");
    const nextPath = new URLSearchParams(window.location.search).get("next") || "/dashboard";
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
      setMessage("Demo sign-in successful. Add Supabase settings for live authentication.");
      setTimeout(() => router.push(nextPath), 500);
      setLoading(false);
      return;
    }
    try {
      const { error } = await supabase().auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        router.push(nextPath);
      }
    } catch {
      setMessage("Authentication is not configured yet. Add your Supabase values to .env.local.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail) {
      setMessage("Please enter your email to reset your password.");
      return;
    }
    setMessage("");
    try {
      const { error } = await supabase().auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/login`,
      });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage(`Password reset link sent to ${resetEmail}.`);
        setShowReset(false);
        setResetEmail("");
      }
    } catch {
      setMessage("Password reset needs your Supabase project settings to be configured.");
    }
  };

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: 520, margin: "auto" }}>
        <h1>Welcome back</h1>

        <div className="field">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="field">
          <label>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: 52 }}
            />
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

        <div style={{ marginBottom: 16, textAlign: "right" }}>
          <button
            type="button"
            onClick={() => setShowReset(!showReset)}
            style={{
              border: "none",
              background: "transparent",
              color: "#0b6ef3",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Forgot password?
          </button>
        </div>

        {showReset && (
          <div className="field" style={{ marginTop: 0 }}>
            <label>Reset email</label>
            <input
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button className="btn" type="button" onClick={handleResetPassword} style={{ marginTop: 8 }}>
              Send reset link
            </button>
          </div>
        )}

        {message && <p role="status" style={{ color: "#60789a", lineHeight: 1.5 }}>{message}</p>}

        <button className="btn primary" type="button" onClick={handleLogin} disabled={loading}>
          {loading ? "Signing in..." : "Log in"}
        </button>
      </div>
    </main>
  );
}
