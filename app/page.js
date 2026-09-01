export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container hero">
        <div>
          <small>FUNDRAISING MADE HUMAN</small>

          <h1>Small acts can make a big difference.</h1>

          <p>
            Create a fundraiser, tell your story and bring people together
            around a cause that matters.
          </p>

          <a className="btn primary" href="/create">
            Start a fundraiser
          </a>
        </div>

        <div className="card">
          <div style={{ fontSize: 60, color: "#10a66a" }}>
            ✦
          </div>

          <h2>GiveBright</h2>

          <p>
            Discover fundraisers, support causes and manage your campaign
            in one place.
          </p>

          <p>
            <b>✓ Secure checkout</b>
            <br />
            <b>✓ Organizer verification</b>
            <br />
            <b>✓ Trust & Safety tools</b>
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container">
        <h2>How it works</h2>

        <div className="grid">
          <div className="card">
            <b>01</b>
            <h3>Create</h3>
            <p>Build your fundraiser.</p>
          </div>

          <div className="card">
            <b>02</b>
            <h3>Share</h3>
            <p>Share your campaign link.</p>
          </div>

          <div className="card">
            <b>03</b>
            <h3>Receive support</h3>
            <p>Donors pay through secure checkout.</p>
          </div>
        </div>
      </section>
    </main>
  );
}