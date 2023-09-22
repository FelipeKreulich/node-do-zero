// Criando servidor HTTP nativo com NodeJS
// import { createServer } from 'node:http';

// const server = createServer((request, response) => {

// });

// server.listen(3333);

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.get('/videos', () => {
  const videos = database.list()

  return videos
});

server.post('/videos', (request, reply) => {
  const { title, description, duration } = request.body

  database.create({
    title,
    description,
    duration,
  })

  return reply.status(201).send()
})

server.put('/videos/:id', () => {
  
})

server.delete('/videos/:id', () => {
  
})

server.listen({
  port: 3333,
})