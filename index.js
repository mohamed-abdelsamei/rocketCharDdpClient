const DDPClient = require('ddp')
const config = require('./config')

const ddpclient = new DDPClient(config.rocket)
const methods = require('./methods')

ddpclient.connect((error, wasReconnect) => {
  // If autoReconnect is true, this callback will be invoked each time
  // a server connection is re-established
  if (error) {
    console.log('DDP connection error!')
    return
  }

  if (wasReconnect) {
    console.log('Reestablishment of a connection.')
  }

  console.log('connected!')

  setTimeout(() => {
    /*
         * Call a Meteor Method
         */
    methods.login(ddpclient)
      .then((data) => {
        console.log('authenticated', data)
      })
      .catch((err) => { console.error('login error', err) })
  }, 3000)
})

/*
 * Useful for debugging and learning the ddp protocol
 */
ddpclient.on('message', (msg) => {
  console.log(`ddp message: ${msg}`)
})
