import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
	if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
		return NextResponse.json({ error: "Stripe is not configured." }, { status: 503 });
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
	const body = await req.text();
	const signature = req.headers.get("stripe-signature");

	let event;
	try {
		event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
	} catch (error) {
		return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
	}

	switch (event.type) {
		case "checkout.session.completed":
		case "charge.refunded":
		case "charge.dispute.created":
			break;
		default:
			break;
	}

	return NextResponse.json({ received: true });
}
