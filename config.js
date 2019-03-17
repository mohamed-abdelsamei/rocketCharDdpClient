module.exports = {
    "rocket": [{
        // All properties optional, defaults shown
        "host": "localhost",
        "port": 3050,
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
        // "email": "admin@admin.com",
        "email": "admin@admin.com",
        "password": "admin"
    },
    {
        // All properties optional, defaults shown
        "host": "localhost",
        "port": 3050,
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
