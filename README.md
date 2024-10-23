# Lecrel
Lecrel is a modern online platform designed for writers and readers alike. It enables users to effortlessly create, publish, and share novels or short stories while keeping all content freely accessible. Readers can support their favorite authors through direct donations via Stripe, fostering a vibrant community of literary creators. With a rich text editor powered by Tiptap (or Novel.sh), secure authentication via Auth.js, and a sleek, user-friendly interface built with Tailwind CSS and Shadcn/UI, Lecrel aims to redefine the reading and writing experience in the digital age.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Setup](#project-setup)
4. [Environment Variables](#environment-variables)
5. [Running the Project](#running-the-project)
6. [Folder Structure](#folder-structure)
7. [License](#license)

---

## Features
- 📚 **Write and publish novels or short stories.**
- 💸 **Readers can support authors by donating through Stripe.**
- ✍️ **Rich text editor powered by Tiptap (or Novel.sh).**
- 🔒 **Secure authentication with Auth.js.**
- 🗃️ **Manage database interactions with Drizzle ORM and Vercel Postgres.**
- 💅 **Modern, accessible UI built with Shadcn/UI and Tailwind CSS.**

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **ORM:** Drizzle ORM
- **Database:** Vercel Postgres
- **Auth:** Auth.js
- **Payments:** Stripe
- **Rich Text Editor:** Tiptap (or Novel.sh)
- **Styling:** Tailwind CSS, Shadcn/UI
- **Package Manager:** pnpm

## Project Setup

1. **Create a new Next.js project using pnpm:**
   ```bash
   pnpm create next-app@latest lecrel --typescript --src-dir
   ```

2. **Navigate to your project directory:**
   ```bash
   cd lecrel
   ```

3. **Install necessary packages:**
   ```bash
   pnpm add drizzle-orm vercel-postgres @authjs/auth stripe @tiptap/react @tiptap/starter-kit tailwindcss shadcn/ui
   ```

4. **Set up Tailwind CSS:**
   - Run the following command to initialize Tailwind CSS:
     ```bash
     npx tailwindcss init -p
     ```

6. **Set up Drizzle ORM:**
   - Create a `.env` file in your project root with your database connection details. You can follow the [Drizzle documentation](https://orm.drizzle.team/docs/getting-started) for specific setup instructions.

## Environment Variables
You will need to configure the following environment variables in your `.env` file:

```plaintext
DATABASE_URL=your_database_url
STRIPE_SECRET_KEY=your_stripe_secret_key
AUTH_SECRET=your_auth_secret
```

## Running the Project
To run your project locally, use the following command:

```bash
pnpm dev
```

This will start your Next.js application on `http://localhost:3000`.

## Folder Structure
Here’s a suggested folder structure for your project using the `src` directory:

```
lecrel/
├── src/
│   ├── app/
│   ├── components/
│   └── styles/
├── public/
├── .env
├── tailwind.config.js
├── tsconfig.json
└── package.json
```
