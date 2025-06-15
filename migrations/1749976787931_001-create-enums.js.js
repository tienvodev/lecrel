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
  pgm.sql(`
        CREATE TYPE user_role AS ENUM ('user', 'admin');
        CREATE TYPE content_rating AS ENUM ('G', 'PG', 'PG-13', 'R', 'NC-17');
        CREATE TYPE novel_status AS ENUM ('draft', 'published', 'unpublished', 'ongoing');
        CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
        `);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.sql(`
            DROP TYPE IF EXISTS user_role;
            DROP TYPE IF EXISTS content_rating;
            DROP TYPE IF EXISTS novel_status;
            DROP TYPE IF EXISTS payment_status;
        `);
};
