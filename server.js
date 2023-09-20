// import { createServer } from 'node:http';

// const server = createServer((request, response) => {

// });

// server.listen(3333);

import { fastify } from 'fastify';

const server = fastify();

server.get('/', () => {
  return 'Hello World'
});

server.listen({
  port: 3333,
});