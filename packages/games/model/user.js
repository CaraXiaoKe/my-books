const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  openid: {
    type: String,
    required: true,
    unique: true,
  },
  sessionKey: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
    unique: true,
  },
  name: String, // 用户名
  avatar: String,
  currentIndex: String,
  currentStatus: String,
});
const useModel = mongoose.model('user', userSchema);

module.exports = useModel