"use client";

import { useState } from "react";

export default function Dashboard() {
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const startOnboarding = async () => {
		setLoading(true);
		setMessage("");
		try {
			const response = await fetch("/api/stripe/connect");
			if (response.redirected) {
				window.location.assign(response.url);
				return;
			}
			const result = await response.json();
			setMessage(result.error || "Stripe onboarding could not be started.");
		} catch {
			setMessage("Stripe onboarding is unavailable. Check your Stripe settings and try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="container">
			<h1>Dashboard</h1>
			<div className="grid">
				<div className="card"><small>CAMPAIGNS</small><h2>0</h2></div>
				<div className="card"><small>RAISED</small><h2>$0</h2></div>
				<div className="card"><small>SUPPORTERS</small><h2>0</h2></div>
			</div>
			<div className="card" style={{ marginTop: 20 }}>
				<h2>Stripe Connect</h2>
				<p>Connect Stripe to receive payouts from your fundraisers.</p>
				<button className="btn primary" type="button" onClick={startOnboarding} disabled={loading}>
					{loading ? "Opening Stripe..." : "Start Stripe onboarding"}
				</button>
				{message && <p role="alert" style={{ color: "#b42318", lineHeight: 1.5 }}>{message}</p>}
			</div>
		</main>
	);
}
