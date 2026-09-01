create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  role text not null default 'user' check (role in ('user','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.campaigns (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  slug text unique not null,
  category text not null,
  story text not null,
  goal_cents bigint not null check (goal_cents > 0),
  raised_cents bigint not null default 0,
  image_url text,
  status text not null default 'draft' check (status in ('draft','pending_review','active','paused','closed','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.donations (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  donor_id uuid references public.profiles(id) on delete set null,
  amount_cents bigint not null check (amount_cents > 0),
  currency text not null default 'usd',
  stripe_checkout_session_id text unique,
  status text not null default 'pending' check (status in ('pending','paid','refunded','disputed')),
  created_at timestamptz not null default now()
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  reporter_id uuid references public.profiles(id) on delete set null,
  reason text not null,
  details text,
  status text not null default 'open' check (status in ('open','reviewing','resolved','dismissed')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.campaigns enable row level security;
alter table public.donations enable row level security;
alter table public.reports enable row level security;

create policy "public active campaigns" on public.campaigns for select using (status='active' or owner_id=auth.uid());
create policy "owners create campaigns" on public.campaigns for insert with check (owner_id=auth.uid());
create policy "owners update campaigns" on public.campaigns for update using (owner_id=auth.uid());

create policy "users see own profile" on public.profiles for select using (id=auth.uid());
create policy "users create own profile" on public.profiles for insert with check (id=auth.uid());

create policy "donors see their donations" on public.donations for select using (donor_id=auth.uid());
create policy "users report campaigns" on public.reports for insert with check (reporter_id=auth.uid() or reporter_id is null);

-- In production, donation inserts/updates and admin policies should be performed
-- by trusted server-side code after Stripe webhook verification.
