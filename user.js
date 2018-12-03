const DDPClient = require("ddp"),
  config = require("./config"),

  ddpclient = new DDPClient(config.rocket[1]),
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
    methods.userLogin(ddpclient)
      .then((data) => {
        console.log("authenticated", data);

        // methods.createPrivateGroup(ddpclient)
        //   .then((messageSent) => {
        //     console.log(messageSent);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        ddpclient.subscribe('5befc78bf20c81294063e6ba/team-changed',                  // name of Meteor Publish function to subscribe to
          [],                       // any parameters used by the Publish function
          function () {             // callback when the subscription is complete
            console.log("Subscription Complete.\n");
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
