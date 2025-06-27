/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  // Create users table
  pgm.sql`
    CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      username TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      email_verified_at TIMESTAMP NULL,
      hashed_password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'user',
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `;

  // Create email_otps table
  pgm.sql`
    CREATE TABLE email_otps (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL,
      otp_code TEXT NOT NULL,
      attempt_type TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `;

  // Create indexes for better performance
  pgm.sql`
    CREATE INDEX idx_users_email ON users(email);
    CREATE INDEX idx_users_username ON users(username);
    CREATE INDEX idx_email_otps_email ON email_otps(email);
    CREATE INDEX idx_email_otps_created_at ON email_otps(created_at);
  `;
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  // Drop indexes first
  pgm.sql`
    DROP INDEX IF EXISTS idx_email_otps_created_at;
    DROP INDEX IF EXISTS idx_email_otps_email;
    DROP INDEX IF EXISTS idx_users_username;
    DROP INDEX IF EXISTS idx_users_email;
  `;

  // Drop tables (in reverse order)
  pgm.sql`DROP TABLE IF EXISTS email_otps;`;
  pgm.sql`DROP TABLE IF EXISTS users;`;
};
