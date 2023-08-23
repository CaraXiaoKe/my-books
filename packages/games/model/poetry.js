const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  answer: [String],
  answerLength: Number,
  options: [String],
  tips: [String],
});

module.exports = mongoose.model('poetry', schema)