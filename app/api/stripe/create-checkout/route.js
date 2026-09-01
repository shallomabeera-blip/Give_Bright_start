import Stripe from "stripe"; import {NextResponse} from "next/server";
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);
export async function POST(req){const {amount,currency="usd",campaignId}=await req.json(); if(!amount||amount<1)return NextResponse.json({error:"Invalid amount"},{status:400});
const session=await stripe.checkout.sessions.create({mode:"payment",line_items:[{price_data:{currency,product_data:{name:"GiveBright donation"} ,unit_amount:Math.round(amount*100)},quantity:1}],metadata:{campaignId:String(campaignId||"")},success_url:`${process.env.NEXT_PUBLIC_SITE_URL}/?donated=1`,cancel_url:`${process.env.NEXT_PUBLIC_SITE_URL}/?cancelled=1`});
return NextResponse.json({url:session.url});}
