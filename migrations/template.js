/**
 * Migration: {name}
 * Created at: {timestamp}
 */

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | Promise<void>}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  // Add your up migration here
  // Example:
  // pgm.sql`
  //   CREATE TABLE users (
  //     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  //     email VARCHAR(255) UNIQUE NOT NULL,
  //     name VARCHAR(255) NOT NULL,
  //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  //   );
  // `;
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | Promise<void>}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  // Add your down migration here (rollback)
  // Example:
  // pgm.sql`DROP TABLE IF EXISTS users;`;
};
