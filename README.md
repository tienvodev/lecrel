# 📚 Lecrel — Fullstack Webnovel Publishing SaaS

---

## ✨ Overview

**Lecrel** is a modern web application that enables users to write, publish, discover, and monetize web novels. Inspired by platforms like Webnovel and Wattpad, it focuses on empowering independent authors while providing a rich reading experience for a younger, English-speaking audience (ages 18–30).

Users can:

- 📖 Read novels with free and locked chapters
- ✍️ Write and publish their own stories
- 💬 Leave and discover standalone reviews
- 💰 Monetize their content with transparent revenue sharing

---

## 🔍 Key Features

### 🏠 Home (Novels)

- Showcases the most popular novels by default
- Users can **search**, and **filter** by:

  - Genre
  - Content rating (MPAA-style)
  - Price (free/paid)
  - Status (Ongoing / Completed)

### 📝 Reviews

- Reviews are treated as **independent content**
- Users can **browse, filter, and search reviews**
- Each review shows the novel being reviewed as a card preview
- Encourages community engagement through content

### 🧑‍💻 Writers

- Directory of authors
- Search and filter writers by activity, popularity, or genres

### 🙋‍♂️ You (User Dashboard)

- Personal space with the following subpages:

  - **Library**: purchased novels & reading progress
  - **Works**: manage own novels and reviews
  - **Earnings**: track revenue, connect Stripe, withdraw
  - **Settings**: profile, email verification, account details

---

## 🔐 Authentication & Security

- Stateless JWT-based auth using **jose**
- Email verification with **6-digit OTP codes** (via Resend)
- Critical actions require OTP confirmation
- Smart redirects on protected routes with search param memory

---

## 💸 Monetization

- Authors can set a **price per novel**
- Minimum **3 free chapters** required
- Locked chapters show **first 5 paragraphs** as a preview
- Platform takes **15% cut** (includes Stripe fees)
- Authors can withdraw after reaching **\$10** via **Stripe Connect**

---

## 🧱 Tech Stack

| Layer         | Technology                            |
| ------------- | ------------------------------------- |
| Framework     | Next.js (App Router)                  |
| Styling       | Tailwind CSS + shadcn/ui              |
| UI Components | shadcn/ui                             |
| Forms         | useActionState + zod                  |
| Editor        | Tiptap                                |
| Auth          | jose (JWT), bcryptjs                  |
| Email         | Resend                                |
| DB            | Neon Serverless PostgreSQL            |
| Migrations    | node-pg-migrate (`pgm.sql\` template) |
| Env Loader    | dotenv-cli                            |
| Media Storage | Vercel Blob                           |
| Deployment    | Vercel                                |

---

## 📁 App Pages Structure

```
app/
  you/
    layout.tsx             # Dashboard layout
    page.tsx               # Overview
    library/page.tsx       # Purchased novels & reading progress
    works/novels/page.tsx  # User-authored novels
    works/reviews/page.tsx # User reviews
    earnings/page.tsx      # Stripe connect, withdrawal
    settings/page.tsx      # Account and profile management

    (auth)/
      layout.tsx           # Shared layout for auth pages
      login/page.tsx
      register/page.tsx
      forgot-password/page.tsx
      reset-password/page.tsx
```

---

## 🛠 Setup Instructions

```bash
git clone <repo-url>
cd novel-platform
pnpm install
cp .env.example .env.local
# Fill in DATABASE_URL, JWT_SECRET, RESEND_API_KEY etc.
dotenv -e .env.local -- node-pg-migrate up
pnpm dev
```

---

## 🚀 Deployment

- Deploy on [**Vercel**](https://vercel.com)
- Database hosted on [**Neon**](https://neon.tech)

---

## 📌 Roadmap (In Progress)

- [ ] Init project, style setup (Tailwind + shadcn), GitHub repo
- [ ] Authentication + Email OTP Flow
- [ ] User Dashboard Pages
- [ ] Novel CRUD + Reading Experience
- [ ] Reviews as Content
- [ ] Search, Filter, and Explore Features
- [ ] Payments via Stripe
- [ ] Admin Tools (Post-launch)

---

## 📝 License

Private SaaS project. All rights reserved.
