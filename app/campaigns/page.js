"use client";

import Link from "next/link";

export default function Campaigns() {
  return (
    <main style={{ background: "#f4f9ff", minHeight: "100vh", padding: "34px 20px 72px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ color: "#0b6ef3", fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>Featured fundraiser</div>
          <h1 style={{ margin: "10px 0 8px", color: "#163456", fontSize: "clamp(2.2rem, 5vw, 4.4rem)", lineHeight: 1, letterSpacing: -3 }}>Help Zachary stay here for his son.</h1>
          <p style={{ maxWidth: 690, margin: 0, color: "#60789a", fontSize: 18, lineHeight: 1.65 }}>A single father is fighting throat cancer. Your support can help him continue treatment and make more time with his son possible.</p>
        </div>

        <section style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.35fr) minmax(300px, .65fr)", gap: 24, alignItems: "start" }}>
          <article style={{ background: "#fff", border: "1px solid #dfeafc", borderRadius: 22, overflow: "hidden", boxShadow: "0 10px 30px rgba(11,110,243,.08)" }}>
            <img src="/zachary-gulini.png" alt="Zachary Gulini holding his son" style={{ width: "100%", height: 390, objectFit: "cover" }} />
            <div style={{ padding: "28px 30px 34px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#60789a", fontSize: 14 }}>
                <span style={{ width: 42, height: 42, display: "grid", placeItems: "center", borderRadius: "50%", background: "#eaf3ff", color: "#0b6ef3", fontWeight: 800 }}>ZG</span>
                <div><strong style={{ color: "#163456" }}>Zachary Gulini</strong> is organizing this fundraiser.<br />Created September 1, 2026</div>
              </div>
              <div style={{ display: "inline-block", marginTop: 16, padding: "7px 11px", borderRadius: 999, background: "#edf5ff", color: "#0b6ef3", fontSize: 12, fontWeight: 800 }}>✓ Verified organizer</div>

              <div style={{ marginTop: 26, color: "#304d6e", fontSize: 16, lineHeight: 1.8 }}>
                <p style={{ margin: "0 0 16px" }}>My name is Zachary Gulini, and I am a single father fighting throat cancer. Before my illness, I was simply trying to live my life, take care of my family, and be there for my son. Then my life changed, and I found myself facing challenges I never expected.</p>
                <p style={{ margin: "0 0 16px" }}>Today, I am fighting to continue my treatment and, most importantly, to have more time with my son. He is my reason to keep going. I want to watch him grow, support him through life, and be there for the moments a father should be there for.</p>
                <p style={{ margin: "0 0 16px" }}>This journey has been physically, emotionally, and financially difficult. The cost of treatment and other essential needs has become more than I can manage on my own. That is why I am humbly asking for your help.</p>
                <p style={{ margin: "0 0 16px" }}>If you can donate, please consider supporting us today. Whether it is $5, $10, $20, $50, or any amount you can genuinely afford, every contribution matters. If you cannot donate, sharing this fundraiser can also help us reach someone who can.</p>
                <p style={{ margin: 0 }}>I am not asking for a perfect life. I am asking for a chance to continue treatment, keep fighting, and stay here for my son. Please stand with us. Your kindness could make a real difference in our journey.</p>
              </div>
              <Link href="/campaigns/zachary-gulini" style={{ display: "inline-block", marginTop: 24, color: "#0b6ef3", fontWeight: 800, textDecoration: "none" }}>Learn more about Zachary&apos;s fundraiser →</Link>
            </div>
          </article>

          <aside style={{ position: "sticky", top: 96, background: "#fff", border: "1px solid #dfeafc", borderRadius: 22, padding: 24, boxShadow: "0 10px 30px rgba(11,110,243,.08)" }}>
            <div style={{ color: "#60789a", marginBottom: 12 }}><strong style={{ color: "#163456", fontSize: 24 }}>$0.00</strong> raised of $30,000.00 goal</div>
            <div className="bar"><i style={{ width: "0%" }} /></div>
            <Link href="/campaigns/zachary-gulini" style={{ display: "block", marginTop: 20, padding: "14px 18px", borderRadius: 11, background: "#0b6ef3", color: "#fff", textAlign: "center", fontWeight: 800, textDecoration: "none" }}>Donate now</Link>
            <button type="button" onClick={() => navigator.clipboard?.writeText(window.location.href)} style={{ width: "100%", marginTop: 10, padding: "12px 18px", border: "1px solid #d7e8ff", borderRadius: 11, background: "#edf5ff", color: "#0b6ef3", fontWeight: 800, cursor: "pointer" }}>Share fundraiser</button>

            <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid #edf3ff", color: "#60789a", lineHeight: 1.6 }}><strong style={{ color: "#163456" }}>Your donation is protected.</strong><br />If something isn&apos;t right, we will refund your donation.</div>
          </aside>
        </section>
      </div>
    </main>
  );
}