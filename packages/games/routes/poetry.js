const contriller = require('../controllers/poetry')

module.exports = function (fastify, opts, done) {
  fastify.get('/add', contriller.add)
  fastify.get('/list', contriller.getList)
  fastify.get('/detail', contriller.getOne)
  done()
}