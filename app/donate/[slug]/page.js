"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

const suggestedAmounts = [25, 50, 100, 250];

export default function DonatePage() {
  const { slug } = useParams();
  const [amount, setAmount] = useState(50);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const continueToDetails = () => {
    if (!amount || amount < 1) {
      setMessage("Please choose a donation amount.");
      return;
    }
    setMessage("");
    setStep(2);
  };

  const continueToStripe = async () => {
    if (!name.trim() || !email.trim()) {
      setMessage("Please enter your name and email address.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount), currency: "usd", campaignId: slug, donorName: name, donorEmail: email }),
      });
      const result = await response.json();
      if (!response.ok) {
        setMessage(result.error || "We could not start secure checkout.");
        return;
      }
      window.location.assign(result.url);
    } catch {
      setMessage("Checkout is unavailable right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container" style={{ paddingTop: 44, paddingBottom: 80 }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <div style={{ color: "#0b6ef3", fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>Support Zachary&apos;s fundraiser</div>
        <h1 style={{ margin: "10px 0 8px" }}>Make a meaningful contribution.</h1>
        <p style={{ color: "#60789a", lineHeight: 1.7 }}>Your donation helps Zachary continue treatment and spend more time with his son.</p>

        <div style={{ display: "flex", gap: 8, margin: "26px 0 18px", color: "#60789a", fontSize: 13, fontWeight: 700 }}>
          {["Choose amount", "Your details", "Secure payment"].map((label, index) => <div key={label} style={{ flex: 1, paddingBottom: 10, borderBottom: `3px solid ${step > index ? "#0b6ef3" : "#dfeafc"}`, color: step === index + 1 ? "#163456" : "#60789a" }}>{index + 1}. {label}</div>)}
        </div>

        <section className="card">
          {step === 1 && <>
            <h2>Choose a donation amount</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, margin: "20px 0" }}>
              {suggestedAmounts.map((suggestedAmount) => <button key={suggestedAmount} type="button" onClick={() => setAmount(suggestedAmount)} style={{ padding: "14px 10px", borderRadius: 10, border: amount === suggestedAmount ? "2px solid #0b6ef3" : "1px solid #c9d9f5", background: amount === suggestedAmount ? "#edf5ff" : "#fff", color: "#163456", fontWeight: 800, cursor: "pointer" }}>${suggestedAmount}</button>)}
            </div>
            <label className="field"><span style={{ display: "block", fontWeight: 700, marginBottom: 7 }}>Custom amount</span><input type="number" min="1" value={amount} onChange={(event) => setAmount(event.target.value)} /></label>
            <button type="button" className="btn primary" onClick={continueToDetails}>Continue</button>
          </>}

          {step === 2 && <>
            <h2>Tell us who is donating</h2>
            <p style={{ color: "#60789a", lineHeight: 1.6 }}>These details help us provide your payment receipt.</p>
            <div className="field"><label>Name</label><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></div>
            <div className="field"><label>Email</label><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></div>
            <button type="button" className="btn" onClick={() => setStep(1)}>Back</button>{" "}
            <button type="button" className="btn primary" onClick={() => { if (name.trim() && email.trim()) { setMessage(""); setStep(3); } else setMessage("Please enter your name and email address."); }}>Continue to payment</button>
          </>}

          {step === 3 && <>
            <h2>Review your donation</h2>
            <div style={{ background: "#f4f9ff", borderRadius: 12, padding: 18, margin: "18px 0", lineHeight: 1.8 }}><strong>${Number(amount).toFixed(2)}</strong><br />Donating as {name}<br /><span style={{ color: "#60789a" }}>You will complete payment securely with Stripe.</span></div>
            <button type="button" className="btn" onClick={() => setStep(2)}>Back</button>{" "}
            <button type="button" className="btn primary" onClick={continueToStripe} disabled={loading}>{loading ? "Opening Stripe..." : "Pay securely with Stripe"}</button>
          </>}

          {message && <p role="alert" style={{ color: "#b42318", lineHeight: 1.5, marginBottom: 0 }}>{message}</p>}
        </section>
      </div>
    </main>
  );
}
