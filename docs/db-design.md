# 🗃 Database Design (Draft) — Lecrel

This document outlines the initial database design for **Lecrel**. It is subject to change as the application evolves.

---

## 📋 Tables Overview

### 🧑 users

Stores registered user accounts.

| Column            | Type      | Description               |
| ----------------- | --------- | ------------------------- |
| id                | UUID (PK) | Unique user ID            |
| email             | TEXT      | Unique, required          |
| email_verified_at | TIMESTAMP | Null until verified       |
| hashed_password   | TEXT      | bcrypt hashed password    |
| role              | TEXT      | 'user' (default), 'admin' |
| created_at        | TIMESTAMP | Default to now()          |

---

### 🔐 email_otps

Stores one-time passwords for email verification and critical actions.

| Column       | Type      | Description                            |
| ------------ | --------- | -------------------------------------- |
| id           | UUID (PK) | Unique OTP entry                       |
| email        | TEXT      | Target email address                   |
| otp_code     | TEXT      | 6-digit numeric code                   |
| attempt_type | TEXT      | e.g., 'verify_email', 'reset_password' |
| created_at   | TIMESTAMP | For expiration logic                   |

---

### 📚 novels

User-created novels.

| Column       | Type      | Description                        |
| ------------ | --------- | ---------------------------------- |
| id           | UUID (PK) | Unique ID                          |
| user_id      | UUID (FK) | Author                             |
| title        | TEXT      | Required                           |
| slug         | TEXT      | Unique per novel                   |
| description  | TEXT      | Summary                            |
| cover_url    | TEXT      | Vercel Blob URL                    |
| price_cents  | INTEGER   | Price in cents (e.g. 299 = \$2.99) |
| is_published | BOOLEAN   | Whether visible in explore         |
| is_completed | BOOLEAN   | Ongoing or Completed               |
| created_at   | TIMESTAMP |                                    |

---

### 📝 chapters

Serialized content of novels.

| Column     | Type      | Description                |
| ---------- | --------- | -------------------------- |
| id         | UUID (PK) |                            |
| novel_id   | UUID (FK) |                            |
| title      | TEXT      | Chapter title              |
| content    | JSONB     | Rich text content (Tiptap) |
| order      | INTEGER   | Chapter position           |
| is_locked  | BOOLEAN   | Lock status                |
| created_at | TIMESTAMP |                            |

---

### 💸 purchases

Tracks which users purchased which novels.

| Column      | Type      | Description     |
| ----------- | --------- | --------------- |
| id          | UUID (PK) |                 |
| user_id     | UUID (FK) | Buyer           |
| novel_id    | UUID (FK) | Purchased novel |
| amount_paid | INTEGER   | In cents        |
| created_at  | TIMESTAMP |                 |

---

### 💬 reviews

Standalone user reviews (engagement content).

| Column     | Type      | Description    |
| ---------- | --------- | -------------- |
| id         | UUID (PK) |                |
| user_id    | UUID (FK) | Reviewer       |
| novel_id   | UUID (FK) | Reviewed novel |
| rating     | INTEGER   | 1–5 stars      |
| content    | TEXT      | Review body    |
| created_at | TIMESTAMP |                |

---

### 📈 earnings

Tracks each author's earnings.

| Column     | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| id         | UUID (PK) |                              |
| user_id    | UUID (FK) | Author                       |
| amount     | INTEGER   | Cumulative amount (in cents) |
| withdrawn  | INTEGER   | Amount already withdrawn     |
| updated_at | TIMESTAMP |                              |

---

### 📚 genres / 🔞 content_ratings

Static tables for metadata.

| Column | Type      | Description           |
| ------ | --------- | --------------------- |
| id     | UUID (PK) |                       |
| name   | TEXT      | Genre or rating label |

---

## 🛠 Migration Tool

We use [`node-pg-migrate`](https://github.com/salsita/node-pg-migrate) with **SQL template strings**:

```ts
pgm.sql`CREATE TABLE users (...);`;
```

Run with dotenv on Windows:

```bash
dotenv -e .env.local -- node-pg-migrate up
```

---

## 📁 Folder Location

This file should be placed at:

```txt
docs/db-design.md
```

---

## 📌 Status

This design is version 1 and **subject to change** during development.
