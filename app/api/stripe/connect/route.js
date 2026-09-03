import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET() {
	if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXT_PUBLIC_SITE_URL) {
		return NextResponse.json({ error: "Stripe onboarding is not configured." }, { status: 503 });
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
	const account = await stripe.accounts.create({
		controller: { requirement_collection: "stripe" },
		capabilities: { card_payments: { requested: true }, transfers: { requested: true } },
		business_type: "individual",
	});
	const link = await stripe.accountLinks.create({
		account: account.id,
		refresh_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
		return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
		type: "account_onboarding",
	});

	return NextResponse.redirect(link.url);
}
