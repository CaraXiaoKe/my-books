const mongoose = require('mongoose');
const config = require('./config.json')
module.exports = async function main() {
  await mongoose.connect(`mongodb://poetry:${config.mongodb.password}@${config.mongodb.address}:27017/poetry`)
  mongoose.connection.once("open",function(){
    console.log("数据库连接成功~~~");
  });
}