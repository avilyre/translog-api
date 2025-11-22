import fastify from 'fastify';
import { PORT, startedServerMessage } from './config.js';

const app = fastify();

app.get('/', () => {
  return 'Hello fastify!';
});

app.listen({ port: PORT }).then(() => startedServerMessage());