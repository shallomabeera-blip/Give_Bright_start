import Stripe from "stripe"; import {NextResponse} from "next/server";
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);
export async function POST(req){const body=await req.text();const sig=req.headers.get("stripe-signature");let event;try{event=stripe.webhooks.constructEvent(body,sig,process.env.STRIPE_WEBHOOK_SECRET)}catch(e){return new NextResponse(`Webhook Error: ${e.message}`,{status:400})}
switch(event.type){case "checkout.session.completed": /* record donation in Supabase here */ break; case "charge.refunded": /* mark donation refunded */ break; case "charge.dispute.created": /* flag donation/campaign */ break;}return NextResponse.json({received:true})}
