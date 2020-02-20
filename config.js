module.exports = {
  "rocket": [{
    // All properties optional, defaults shown
    "host": "localhost",
    "port": 3050,
    // "ssl": true,
    "autoReconnect": true,
    "autoReconnectTimer": 500,
    "maintainCollections": true,
    "ddpVersion": "1", // ['1', 'pre2', 'pre1'] available
    // uses the SockJs protocol to create the connection
    // this still uses websockets, but allows to get the benefits
    // from projects like meteorhacks:cluster
    // (for load balancing and service discovery)
    // do not use `path` option when you are using useSockJs
    // "useSockJs": true,
    // Use a full url instead of a set of `host`, `port` and `ssl`
    // do not set `useSockJs` option if `url` is used
    // "url": "wss://rc.konnectus.me/websocket",
    // "url": "wss://localhost:3050/websocket",
    // "email": "admin@admin.com",
    // "email": "admin@konnectus.me",
    // // "email": "ffdfe@klkl.com",
    // // "email": "jhjh@hjhjhj.com",
    // // "email": "hjhj@ghgh.c8",
    "email": "ffdfe@klkl.com",
    // "password": "admin1"
    // email: 'acl@codilec.com',
    password: 'admin1'
  },
  {
    // All properties optional, defaults shown
    // "host": "localhost",
    // "port": 3050,
    "ssl": false,
    "autoReconnect": true,
    "autoReconnectTimer": 500,
    "maintainCollections": true,
    "ddpVersion": "1", // ['1', 'pre2', 'pre1'] available
    // uses the SockJs protocol to create the connection
    // this still uses websockets, but allows to get the benefits
    // from projects like meteorhacks:cluster
    // (for load balancing and service discovery)
    // do not use `path` option when you are using useSockJs
    "useSockJs": true,
    // Use a full url instead of a set of `host`, `port` and `ssl`
    // do not set `useSockJs` option if `url` is used
    "url": "wss://example.com/websocket",
    "email": "hospitalxca1@h1.com",
    "password": "admin"
  },
  ]
};
