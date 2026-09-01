import Stripe from "stripe"; import {NextResponse} from "next/server";
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);
export async function GET(){const account=await stripe.accounts.create({controller:{requirement_collection:"stripe"},capabilities:{card_payments:{requested:true},transfers:{requested:true}},business_type:"individual"});const link=await stripe.accountLinks.create({account:account.id,refresh_url:`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,return_url:`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,type:"account_onboarding"});return NextResponse.redirect(link.url)}
