# GiveBright — Production Starter

A deployable Next.js + Supabase + Stripe Connect starter for a crowdfunding platform.

## What is included
- GiveBright green responsive UI
- Supabase authentication helpers
- Campaign database schema + Row Level Security
- Campaign creation starter
- Public campaign route
- Donation checkout API using Stripe Checkout
- Stripe Connect onboarding API
- Stripe webhook starter
- Dashboard/admin route placeholders
- Vercel-ready deployment structure

## Important
This is a production starter, not a completed regulated crowdfunding business. Before accepting real money, configure Stripe Connect, verification/KYC, moderation, refunds/disputes, legal policies, fraud controls, email, and country-specific compliance.

## Launch
1. Create a Supabase project.
2. Run `supabase/schema.sql` in Supabase SQL Editor.
3. Create a Stripe platform/Connect setup and enable the payment methods you want.
4. Copy `.env.example` to `.env.local` and fill the values. Never put STRIPE_SECRET_KEY in client-side code.
5. Push this folder to a private GitHub repository.
6. Import the repository into Vercel and add the same environment variables.
7. Set the Supabase Auth Site URL and redirect URLs to the live domain.
8. Configure the Stripe webhook endpoint:
   `https://YOUR-DOMAIN.com/api/stripe/webhook`
9. Test with Stripe test mode before enabling live mode.

Stripe Connect is the intended architecture for a platform with many organizers receiving payouts.
