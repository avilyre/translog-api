import fastify from 'fastify';
import { PORT, startedServerMessage } from './config.js';
import { knex } from './lib/knex.ts';

const app = fastify();

app.get('/', async () => {
  const tables = await knex('sqlite_schema').select('*');
  return tables;
});

app.listen({ port: PORT }).then(() => startedServerMessage());