const userController = require('../controllers/user')

module.exports = function (fastify, opts, done) {
  fastify.post('/update', userController.updateUser)
  fastify.get('/info', userController.user)
  fastify.get('/login', userController.login)
  done()
}