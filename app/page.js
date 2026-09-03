import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="container hero" style={{ paddingTop: 78, paddingBottom: 70 }}>
        <div>
          <small style={{ color: "#0b6ef3", fontWeight: 800, letterSpacing: 1.5 }}>A BRIGHTER WAY TO SHOW UP</small>
          <h1>Small gestures, real impact</h1>
          <p>Share what matters, gather the people who care, and turn community support into meaningful progress.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link className="btn primary" href="/signup?next=/create">Start a fundraiser</Link>
            <Link className="btn outline" href="/campaigns">Find a fundraiser</Link>
          </div>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap", marginTop: 30, color: "#60789a", fontSize: 14 }}>
            <span><b style={{ color: "#163456" }}>01</b> Tell your story</span>
            <span><b style={{ color: "#163456" }}>02</b> Invite support</span>
            <span><b style={{ color: "#163456" }}>03</b> Keep moving forward</span>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: 390 }}>
          <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=900&auto=format&fit=crop" alt="A doctor speaking with a patient" style={{ width: "72%", height: 320, objectFit: "cover", borderRadius: 18, position: "absolute", right: 0, top: 0, boxShadow: "0 18px 40px rgba(11,110,243,.16)" }} />
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop" alt="Children learning together" style={{ width: "46%", height: 190, objectFit: "cover", borderRadius: 18, position: "absolute", left: 0, bottom: 0, border: "8px solid #f4f9ff", boxShadow: "0 14px 30px rgba(22,52,86,.13)" }} />
          <div style={{ position: "absolute", right: 14, bottom: 28, background: "#fff", border: "1px solid #dfeafc", borderRadius: 14, padding: "14px 16px", boxShadow: "0 12px 28px rgba(11,110,243,.12)" }}>
            <strong style={{ display: "block", color: "#163456", fontSize: 20 }}>Together, we can.</strong>
            <span style={{ color: "#60789a", fontSize: 13 }}>Every story deserves a chance.</span>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid #dfeafc", borderBottom: "1px solid #dfeafc" }}>
        <div className="container" style={{ paddingTop: 58, paddingBottom: 58 }}>
          <div style={{ maxWidth: 650, marginBottom: 26 }}>
            <small style={{ color: "#0b6ef3", fontWeight: 800, letterSpacing: 1.5 }}>HOW GIVEBRIGHT WORKS</small>
            <h2 style={{ marginBottom: 10 }}>A simple path from need to possibility.</h2>
            <p style={{ color: "#60789a", lineHeight: 1.7, margin: 0 }}>Our tools help you move from your first idea to a shared effort without losing sight of the people behind the cause.</p>
          </div>
          <div className="grid">
            <div className="card"><b style={{ color: "#0b6ef3" }}>01</b><h3>Shape your story</h3><p>Set a goal, add the details that matter, and create a page people can understand.</p></div>
            <div className="card"><b style={{ color: "#0b6ef3" }}>02</b><h3>Bring people in</h3><p>Share your fundraiser with friends, family, and the wider community.</p></div>
            <div className="card"><b style={{ color: "#0b6ef3" }}>03</b><h3>Build momentum</h3><p>Track progress and receive support through a clear, protected experience.</p></div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 62, paddingBottom: 70 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, flexWrap: "wrap", marginBottom: 24 }}>
          <div><small style={{ color: "#0b6ef3", fontWeight: 800, letterSpacing: 1.5 }}>START WHERE IT MATTERS</small><h2 style={{ margin: "10px 0 0" }}>Support a cause close to home.</h2></div>
          <Link href="/campaigns" style={{ color: "#0b6ef3", fontWeight: 800 }}>Browse all fundraisers →</Link>
        </div>
        <div className="category-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 14 }}>
          {["Medical care", "Emergency help", "Education", "Family support"].map((category) => <Link key={category} href="/campaigns" className="card" style={{ textDecoration: "none", minHeight: 105, display: "flex", flexDirection: "column", justifyContent: "space-between" }}><strong>{category}</strong><span style={{ color: "#0b6ef3", fontSize: 13 }}>Explore stories →</span></Link>)}
        </div>
      </section>

      <section className="container" style={{ paddingTop: 0, paddingBottom: 82 }}>
        <div style={{ background: "#0b6ef3", color: "#fff", borderRadius: 20, padding: "34px 38px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div><h2 style={{ color: "#fff", margin: "0 0 8px" }}>Your next step can help someone.</h2><p style={{ margin: 0, opacity: .88 }}>Start a fundraiser or find a story worth standing behind.</p></div>
          <Link href="/signup?next=/create" style={{ background: "#fff", color: "#0b6ef3", padding: "12px 16px", borderRadius: 9, textDecoration: "none", fontWeight: 800 }}>Make an impact</Link>
        </div>
      </section>
    </main>
  );
}