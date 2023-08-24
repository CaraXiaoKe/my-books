const userModel = require('../model/user')
const fetch = require('node-fetch');
const crypto = require('crypto')
const config = require('../config.json')

module.exports.updateUser = async (request) => {
  const accessToken = request.headers['access-token']
  const body = request.body
  if(accessToken){
    try {
      const result = await userModel.updateOne({
        accessToken,
      }, body)
      return {
        ok: true,
        data: null,
      }
    }catch(err){  
      console.log(err)
      return { 
        ok: false,
        message: '操作失败'
      }
    }
  }
  return { 
    ok: false,
    message: '登录过期'
  }
}
module.exports.user = async (request) => {
  const accessToken = request.headers['access-token']
  if(accessToken){
    try {
      const userInfo = await userModel.findOne({
        accessToken,
      }, { 
        openid: 0, 
        accessToken: 0,
        sessionKey: 0,
        _id: 0,
        __v: 0,
      })
      return {
        ok: userInfo ? true : false,
        data: userInfo,
      }
    }catch(err){  
      console.log(err)
    }
  }
  return { 
    ok: false,
    data: null
  }
}

module.exports.login = async (request) => {
  const code = request.query.code
  const res = await fetch(`https://api.weixin.qq.com/sns/jscode2session?appid=${config.wxAppid}&secret=${config.wxAppSecret}&js_code=${code}&grant_type=authorization_code`)
  const result = await res.json()
  const nonce = crypto.randomBytes(16).toString('hex') + result.openid
  const accessToken = crypto.createHash('md5').update(nonce).digest('hex')
  try{
    const data = await userModel.findOneAndUpdate({
      openid: result.openid,
    },{
      openid: result.openid,
      accessToken,
      sessionKey: result.session_key,
    }, {
      upsert: true
    })
  } catch(err) {
    console.log(err)
  }
  return {
    ok: true,
    accessToken,
  }
}