-- Run this on your Postgres (Neon) database to create schema for MyZeniApp (Zeni Vault).
-- Note: create bcrypt password hash for admin manually and insert for immediate admin access, or register and set is_admin=true.

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  email TEXT,
  password_hash TEXT NOT NULL,
  referral_code TEXT UNIQUE,
  referred_by INTEGER REFERENCES users(id),
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE investments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  package_key TEXT NOT NULL,
  deposit_amount NUMERIC NOT NULL,
  daily_return NUMERIC NOT NULL,
  duration_days INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending|active|closed
  start_date TIMESTAMP,
  proof_url TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE withdrawals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  amount NUMERIC NOT NULL,
  fee NUMERIC NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value TEXT
);

INSERT INTO settings (key,value) VALUES
('bank_name','Tyme Bank'),
('bank_account','53001355373'),
('bank_reference_instructions','Use the phone number you used to register as the reference')
ON CONFLICT DO NOTHING;