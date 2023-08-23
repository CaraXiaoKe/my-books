const crypto = require('crypto');

const key = '0132456789abcdef'
const iv = 'fedcba9876543210'

module.exports.encrypt = function encrypt(str){ 
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    return cipher.update(str, 'utf8', 'hex') + cipher.final('hex');
}

module.exports.decrypt = function decrypt(str){
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  return decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
}

