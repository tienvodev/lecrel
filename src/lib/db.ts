import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set");
}

// Create a connection to the Neon database
export const sql = neon(process.env.DATABASE_URL);

// Example usage function
export async function testConnection() {
  try {
    const result = await sql`SELECT version()`;
    console.log("Database connected successfully:", result[0]);
    return result;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}
