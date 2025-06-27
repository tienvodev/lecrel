import { NextResponse } from "next/server";
import { sql, testConnection } from "@/lib/db";

export async function GET() {
  try {
    // Test database connection
    await testConnection();

    // Get basic database info
    const dbInfo = await sql`
      SELECT 
        current_database() as database_name,
        current_user as current_user,
        version() as version
    `;

    // List existing tables
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `;

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      database: dbInfo[0],
      tables: tables.map((row) => row.table_name),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
