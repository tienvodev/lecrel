# 🗄️ Database Setup Guide - Neon PostgreSQL with Next.js

This guide explains how to connect your Next.js application to Neon PostgreSQL database using `@neondatabase/serverless`.

## 📋 Prerequisites

- [Neon account](https://neon.tech) with a database project
- Next.js project set up
- Environment variables configured

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm add @neondatabase/serverless
```

### 2. Environment Setup

Copy `.env.example` to `.env.local` and fill in your Neon database credentials:

```bash
cp .env.example .env.local
```

Required environment variables:

- `DATABASE_URL` - Your Neon database connection string
- `DATABASE_URL_UNPOOLED` - Unpooled connection (optional)
- `NEON_PROJECT_ID` - Your Neon project ID

### 3. Database Connection

The database connection is configured in `src/lib/database.ts`:

```typescript
import { neon } from "@neondatabase/serverless";
export const sql = neon(process.env.DATABASE_URL);
```

## 🔧 Usage Examples

### Basic Query

```typescript
import { sql } from "@/lib/database";

// Simple query
const users = await sql`SELECT * FROM users`;

// Parameterized query
const user = await sql`SELECT * FROM users WHERE id = ${userId}`;
```

### Using Database Class

```typescript
import { Database } from "@/lib/database";

// Test connection
const status = await Database.testConnection();

// Get database info
const info = await Database.getInfo();

// List tables
const tables = await Database.listTables();
```

### Using Services

```typescript
import { UserService } from "@/lib/services/user-service";

// Get all users
const users = await UserService.getAllUsers();

// Create user
const newUser = await UserService.createUser("test@example.com", "Test User");

// Update user
const updatedUser = await UserService.updateUser(1, { name: "New Name" });
```

## 🛠️ API Endpoints

### Test Database Connection

```
GET /api/test-db
```

### User Management

```
GET    /api/users          # Get all users
POST   /api/users          # Create user
GET    /api/users/[id]     # Get user by ID
PUT    /api/users/[id]     # Update user
DELETE /api/users/[id]     # Delete user
GET    /api/users?search=query  # Search users
```

## 🔍 Testing

Test your database connection:

```bash
curl http://localhost:3000/api/test-db
```

Expected response:

```json
{
  "success": true,
  "message": "Database connection successful",
  "connection": { "success": true, "timestamp": "..." },
  "database": { "database_name": "neondb", "current_user": "..." },
  "tables": ["users", "email_otps"]
}
```

## 📁 File Structure

```
src/
├── lib/
│   ├── database.ts           # Main database configuration
│   ├── db.ts                # Simple connection (legacy)
│   └── services/
│       └── user-service.ts   # User management service
└── app/
    └── api/
        ├── test-db/
        │   └── route.ts      # Database connection test
        └── users/
            ├── route.ts      # Users CRUD
            └── [id]/
                └── route.ts  # Individual user operations
```

## 🚀 Deployment on Vercel

1. **Environment Variables**: Add your environment variables in Vercel dashboard
2. **Auto-deployment**: Push to `main` branch triggers deployment
3. **Database Connection**: Uses connection pooling automatically

## 🔐 Security Best Practices

- ✅ Use parameterized queries (template literals)
- ✅ Validate input data
- ✅ Handle errors gracefully
- ✅ Use connection pooling (default with Neon)
- ✅ Keep credentials in environment variables
- ❌ Never commit `.env.local` to version control

## 🐛 Troubleshooting

### Common Issues

1. **Connection Error**: Check `DATABASE_URL` format
2. **SSL Issues**: Ensure `?sslmode=require` in connection string
3. **Environment Variables**: Verify `.env.local` is loaded

### Debug Connection

```typescript
// Test connection
try {
  const result = await sql`SELECT NOW()`;
  console.log("Connected:", result);
} catch (error) {
  console.error("Connection failed:", error);
}
```

## 📚 Resources

- [Neon Documentation](https://neon.tech/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [@neondatabase/serverless](https://github.com/neondatabase/serverless)

---

🎉 **Your Neon PostgreSQL database is now connected and ready to use!**
