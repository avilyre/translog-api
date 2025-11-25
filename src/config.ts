import 'dotenv/config';
import type { Knex } from 'knex';
import { env } from './env/index.ts';

const consoleColor = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
};

export const PORT = 3333;

const { DATABASE_URL } = env;

export const databaseConfig: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: DATABASE_URL
  },
  migrations: {
    extension: 'ts',
    directory: './storage/migrations'
  }
};

export const startedServerMessage = () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server running on ' + consoleColor.green + `http://localhost:${PORT}` + consoleColor.reset);
};