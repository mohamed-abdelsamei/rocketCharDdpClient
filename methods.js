const config = require('./config')

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
  sendMessage: () => {

  }
}
