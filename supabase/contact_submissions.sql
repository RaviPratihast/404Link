create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  country text not null,
  country_code text not null,
  phone text not null,
  company text null,
  service text not null,
  message text not null,
  source text not null default 'website_contact_form'
);

create index if not exists idx_contact_submissions_email_created_at
  on public.contact_submissions (email, created_at desc);
