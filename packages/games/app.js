
const db = require('./db')

const fastify = require('fastify')({ logger: process.env.NODE_ENV === 'development' })

fastify.register(require('@fastify/cors'), {
  origin:'*',
});

fastify.register(require('./routes/users'), { prefix: '/api/user' })
fastify.register(require('./routes/poetry'), { prefix: '/api/poetry' })

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await db().catch(err => console.log(err))
    await fastify.listen({
      port: 3000,
      host: '0.0.0.0',
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()