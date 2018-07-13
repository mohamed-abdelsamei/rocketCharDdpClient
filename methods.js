const config = require('./config')
var Random = require('ddp-random')

var random = Random.createWithSeeds('randomSeed')

const loginCreds = {
  user: { email: config.rocket.email },
  password: config.rocket.password
}
module.exports = {
  login: ddpclient => new Promise((resolve, reject) => {
    ddpclient.call('login', [loginCreds], (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  }),
  sendMessage: ddpclient => new Promise((resolve, reject) => {
    ddpclient.callWithRandomSeed('sendMessage', [{ '_id': random.id, 'rid': 'GENERAL', 'msg': 'hello' }], 'randomSeed', (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}
