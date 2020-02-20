const DDPClient = require("ddp"),
  config = require("./config"),

  ddpclient = new DDPClient(config.rocket[0]),
  methods = require("./methods");

ddpclient.connect((error, wasReconnect) => {
  // If autoReconnect is true, this callback will be invoked each time
  // a server connection is re-established
  if (error) {
    console.log("DDP connection error!");
    return;
  }

  if (wasReconnect) {
    console.log("Reestablishment of a connection.");
  }

  console.log("connected!");

  setTimeout(() => {
    /*
         * Call a Meteor Method
         */
    methods.login(ddpclient)
      .then((data) => {
        console.log("authenticated", data);
        // methods['sendMessageReply'](ddpclient)
        // methods['sentMessgeWithCritical'](ddpclient)
        methods['sendMessage'](ddpclient)
          // methods['createPrivateGroup'](ddpclient)
          // methods['getDeliveryReceipts'](ddpclient)
          // methods['deliverMessages'](ddpclient)
          .then((messageSent) => {
            console.log(messageSent);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.error("login error", err);
      });

  }, 3000);


});

/*
 * Useful for debugging and learning the ddp protocol
 */
let ts = new Date(Date.now());



ddpclient.on("message", (msg) => {
  console.log(`${ts.toLocaleString()} ddp message: ${msg}`);
});


// ddpclient.on(
//   '5d4168c2e39a0d66defa4adf/user-changed',                 // name of Meteor Publish function to subscribe to
//   function (data) {             // callback when the subscription is complete
//     console.log('posts complete:');
//     console.log(data);
//   }
// );
