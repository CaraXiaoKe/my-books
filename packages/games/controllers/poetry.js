const model = require('../model/poetry')
const { poetryList } = require('../mock')

module.exports.add = async (request, reply) => {
  const result = await model.insertMany(poetryList)
  console.log(result)
  return { ok: true }
}

module.exports.getList = async (request, reply) => {
  const data = await model.find({})
  return { ok: true, data }
}

module.exports.getOne = async (request, reply) => {
  const data = await model.findOne({
    name: request.query.name
  })
  return { ok: true, data }
}
