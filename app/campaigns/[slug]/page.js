"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Campaign({ params }) {
  const router = useRouter();
  const [shareMessage, setShareMessage] = useState("");
  const searchParams = useSearchParams();
  const { slug } = params;
  const donatedAmount = Number(searchParams.get("amount") || 0);

  const handleDonate = () => {
    router.push("/donate/" + slug);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareMessage("Link copied");
    } catch {
      setShareMessage("Copy the page address from your browser to share it.");
    }
  };

  const learnItems = [
    {
      title: "The fight",
      text: "Zachary Gulini is a single father facing throat cancer, and every treatment decision, every appointment, and every day of recovery carries a deeper weight because he is fighting for time with his son.",
    },
    {
      title: "Why it matters",
      text: "This fundraiser is not just about medical bills. It is about keeping a father in the room, supporting his son through childhood, and giving his family the breathing room they need during an impossible season.",
    },
    {
      title: "How support helps",
      text: "Funds raised will help cover treatment, recovery costs, home care, transportation, and essential day-to-day needs while Zachary focuses on healing and staying present for his child.",
    },
  ];

  return (
    <main style={{ background: "#f4f9ff", minHeight: "100vh", padding: "32px 20px 72px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 28 }}>
        {searchParams.get("donated") === "1" && <div role="status" style={{ gridColumn: "1 / -1", background: "#eaf7ef", border: "1px solid #b8e0c5", color: "#176b35", borderRadius: 14, padding: "14px 18px", fontWeight: 700 }}>Donation successful. Thank you for supporting Zachary and his son.</div>}
        <section style={{ background: "#fff", border: "1px solid #dfeafc", borderRadius: 22, overflow: "hidden", boxShadow: "0 10px 30px rgba(11,110,243,.08)" }}>
          <div style={{ position: "relative" }}>
            <img
              src="/zachary-gulini.png"
              alt="Zachary Gulini holding his son"
              style={{ width: "100%", height: 320, objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,86,201,0.05), rgba(8,86,201,0.35))" }} />
          </div>

          <div style={{ padding: "28px 28px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.6, color: "#0b6ef3", textTransform: "uppercase" }}>
                  Fundraiser
                </div>
                <h1 style={{ margin: "12px 0 8px", fontSize: "clamp(2rem, 3vw, 3.2rem)", lineHeight: 1.05, letterSpacing: -2, color: "#163456" }}>
                  Help a Single Dad Fight Throat Cancer and Stay Here for His Son
                </h1>
              </div>
            </div>

            <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 10, color: "#60789a", fontSize: 15 }}>
              <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#eaf3ff", color: "#0b6ef3", display: "grid", placeItems: "center", fontWeight: 800 }}>ZG</span>
              <div>
                <div style={{ fontWeight: 700, color: "#163456" }}>Zachary Gulini is organizing this fundraiser.</div>
                <div>Created September 1, 2026</div>
              </div>
            </div>

            <div style={{ marginTop: 14, display: "inline-flex", gap: 8, alignItems: "center", background: "#edf5ff", color: "#0b6ef3", borderRadius: 999, padding: "8px 12px", fontWeight: 800, fontSize: 13 }}>
              ✓ Verified organizer
            </div>

            <div style={{ marginTop: 26, color: "#304d6e", fontSize: 17, lineHeight: 1.8 }}>
              <p style={{ margin: "0 0 16px" }}>
                My name is <strong>Zachary Gulini</strong>, and I am a single father fighting throat cancer. Before my illness, I was simply trying to live my life, take care of my family, and be there for my son. Then my life changed, and I found myself facing challenges I never expected.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                Today, I am fighting to continue my treatment and, most importantly, to have more time with my son. He is my reason to keep going. I want to watch him grow, support him through life, and be there for the moments a father should be there for.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                This journey has been physically, emotionally, and financially difficult. The cost of treatment and other essential needs has become more than I can manage on my own. That is why I am humbly asking for your help.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                If you can donate, please consider supporting us today. Whether it is $5, $10, $20, $50, or any amount you can genuinely afford, every contribution matters. If you cannot donate, sharing this fundraiser can also help us reach someone who can.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                To everyone who has already supported me and my son—thank you from the bottom of my heart. ❤️🙏 Your donations, prayers, messages, and shares have given us strength during some of our hardest days.
              </p>

              <p style={{ margin: "0 0 16px" }}>
                I am not asking for a perfect life. I am asking for a chance to continue treatment, keep fighting, and stay here for my son.
              </p>

              <p style={{ margin: 0 }}>
                Please stand with us. Your kindness could make a real difference in our journey. ❤️🙏
              </p>
            </div>

            <div style={{ marginTop: 28, padding: "14px 0 0", borderTop: "1px solid #edf3ff" }}>
              <a href="https://givebright.org/report?id=2" target="_blank" rel="noreferrer" style={{ color: "#0b6ef3", fontWeight: 700, textDecoration: "none" }}>
                Report this fundraiser
              </a>
            </div>
          </div>
        </section>

        <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ background: "#fff", border: "1px solid #dfeafc", borderRadius: 22, padding: 22, boxShadow: "0 10px 30px rgba(11,110,243,.08)" }}>
            <div style={{ fontSize: 15, color: "#60789a", marginBottom: 10 }}>
              <strong style={{ color: "#163456", fontSize: 18 }}>${donatedAmount.toFixed(2)}</strong> raised of $30,000.00 goal
            </div>

            <div className="bar" style={{ height: 10, background: "#edf4ff", borderRadius: 999, overflow: "hidden" }}>
              <i style={{ display: "block", width: `${Math.min((donatedAmount / 30000) * 100, 100)}%`, height: "100%", background: "#0b6ef3", borderRadius: 999 }} />
            </div>

            <button type="button" onClick={handleDonate} style={{ width: "100%", background: "#0b6ef3", color: "#fff", border: "none", borderRadius: 12, padding: "14px 18px", fontSize: 16, fontWeight: 800, marginTop: 18, cursor: "pointer" }}>
              Donate now
            </button>

            <button type="button" onClick={handleShare} style={{ width: "100%", marginTop: 10, background: "#edf5ff", color: "#0b6ef3", border: "1px solid #d7e8ff", borderRadius: 12, padding: "12px 18px", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>
              Share fundraiser
            </button>
            {shareMessage && <div role="status" style={{ marginTop: 8, color: "#60789a", fontSize: 13 }}>{shareMessage}</div>}

          </div>

          <div style={{ background: "#fff", border: "1px solid #dfeafc", borderRadius: 22, padding: 22, boxShadow: "0 10px 30px rgba(11,110,243,.08)" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#163456" }}>Guarantee</div>
            <p style={{ margin: "12px 0 0", color: "#60789a", lineHeight: 1.7 }}>
              Your donation is protected. If something isn't right, we will refund your donation.
            </p>
          </div>

          <div style={{ background: "#fff", border: "1px solid #dfeafc", borderRadius: 20, padding: 18, boxShadow: "0 10px 30px rgba(11,110,243,.08)" }}>
            <div style={{ fontWeight: 800, fontSize: 18, color: "#163456" }}>GiveBright</div>
            <div style={{ marginTop: 6, color: "#60789a" }}>Small gestures, real impact</div>
          </div>
        </aside>
      </div>

      <section style={{ maxWidth: 1180, margin: "40px auto 0" }}>
        <div style={{ background: "#fff", border: "1px solid #dfeafc", borderRadius: 24, padding: "26px 24px", boxShadow: "0 10px 30px rgba(11,110,243,.08)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 18 }}>
            <h2 style={{ margin: 0, color: "#163456", fontSize: "clamp(1.8rem, 2vw, 2.4rem)", letterSpacing: -1 }}>Learn More</h2>
            <span style={{ background: "#edf5ff", color: "#0b6ef3", borderRadius: 999, padding: "8px 12px", fontWeight: 800, fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase" }}>
              Support the journey
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18 }}>
            {learnItems.map((item) => (
              <div key={item.title} style={{ background: "#f7fbff", border: "1px solid #e3efff", borderRadius: 18, padding: 20 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "#0b6ef3", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800, marginBottom: 14 }}>
                  {item.title.slice(0, 1)}
                </div>
                <h3 style={{ margin: "0 0 10px", color: "#163456", fontSize: 22 }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#60789a", lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
