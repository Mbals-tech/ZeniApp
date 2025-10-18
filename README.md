# MyZeniApp (Zeni Vault) - Full Project

This project contains the full Next.js (Pages Router) app for Zeni Vault — frontend, serverless API routes, and migrations — ready to deploy to Vercel + Neon Postgres.

## What to do after download
1. Create a GitHub repo (name: MyZeniApp) and push this project.
2. Create Neon Postgres, SendGrid, Cloudinary accounts (Cloudinary optional).
3. In Vercel dashboard, import the GitHub repo and set environment variables (see .env.example).
4. Deploy — Vercel will build and publish your app.

## Dev notes
- Default admin: phone 0824238988, password admin123 (created in migrations SQL as a comment — you must create a bcrypt hash and insert manually or run a setup script).
- Cloudinary uploads work only if CLOUDINARY_URL is set.
- SendGrid emails require SENDGRID_API_KEY.