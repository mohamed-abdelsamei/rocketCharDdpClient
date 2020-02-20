const config = require("./config"),
  // var Random = require('ddp-random')

  // var random = Random.createWithSeeds('randomSeed')

  loginCreds = {
    "user": { "email": config.rocket[0].email },
    "password": config.rocket[0].password
  },
  userLoginCreds = {
    "user": { "email": config.rocket[1].email },
    "password": config.rocket[1].password
  };

const NOTIFICATION = {
  sender: 'Konnectus',
  userId: "Wejh2dokQNgFSuaqa",
  message: "hi"
};


module.exports = {
  "login": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("login", [loginCreds], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "userLogin": (ddpclient) => new Promise((resolve, reject) => {
    console.log(userLoginCreds);
    ddpclient.call("login", [userLoginCreds], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "sendMessage": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("sendMessage", [{ "rid": "BTJrojeFwjyhC5z4v", "msg": "Hi test again" }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "sendMessageReply": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("sendMessage", [{ "rid": "BTJrojeFwjyhC5z4v", "msg": "[](http://localhost:3050/direct/5d47ec6af0c559159c8ddcb8%2540role.com?msg=pZtwdhNDShBLim9iy &reply=iiillliiiii" }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "sendMessageWithMention": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("sendMessage", [{ "rid": "TYC6z79Rn37vipPH5", "msg": "@ahmed@codiles.com test" }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "sentMessgeWithCritical": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("sendMessage", [{ "rid": "BTJrojeFwjyhC5z4v", "msg": "llkkkk", "criticals": ['jHHrkzLLNwECyLStZ'] }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "createPrivateGroup": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("createPrivateGroup", ["rrryyyyyy", ["acl@codilec.com"], , false, { hid: "5d679666986f07426a7b3ca4" }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "loadHistory": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("loadHistory", ["GENERAL", null, 50, { "$date": 1480377601 }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);

    });
  }),
  "removeMessage": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("removeMessage", ["4yfp8DBm82DdiG3Sg"], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "readMessages": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("readMessages", ["7p6FWiPC9LDLrdRQu"], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "readMessagesForMultiUsers": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("readMessagesForMultiUsers", ["vnvYsrqSPmaLtRgLT", ["n5Yth6LqA5RZ2pdAv", "5xJpbHTXckrvJCqck"]], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "deliverMessages": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("deliverMessages", ["ixuqeDecsnxSiNgCF"], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "getReadReceipts": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("getReadReceipts", [{ "messageId": "Q4PxuWtmcig5C3eyH" }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "getDeliveryReceipts": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("getDeliveryReceipts", [{ "messageId": "Q4PxuWtmcig5C3eyH" }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "recallMessage": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("recallMessage", ["DyPcTcJrrhjzsKP62"], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "setReaction": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("setReaction", ['ack', "isjSdaCDoekbkp9fK"], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "createDirectMessage": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("createDirectMessage", ["gsfgsd@ggg.vbf", [], { hid: "5c90b030760efa28b7a734ff" }], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "leaveRoom": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("leaveRoom", ["ZXkcs3j8nCEQqtCsv"], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "getUsersOfRoom": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("getUsersOfRoom", ["ZXkcs3j8nCEQqtCsv"], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "getRoomRoles": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("getRoomRoles", ["s9TicfeLdKSeB47YS", true], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),

  "subscriptionsGet": (ddpclient) => new Promise((resolve, reject) => {
    let d = new Date('2019-06-30T09:33:26.543Z');
    ddpclient.call("subscriptions/get", [d], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "sendPushNotification": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("sendPushNotification", [NOTIFICATION], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "getUsersFromBackEnd": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("getUsersFromBackEnd", [], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "removeRoomHistory": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("removeRoomHistory", ['pGSWGCxFMSGwftRDez8CFzJM4wiCDxjt8p'], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "saveRoomSettings": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("saveRoomSettings", ['i3u77dnp9o6kg7ak2', 'roomImage', "4444444"], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "deleteRoomForUser": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("deleteRoomForUser", ['34ANtosMBaWAzbiuz5yP5yijPefZskMigd'], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "rooms/get": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("rooms/get", [], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  "archiveOldRoomMessages": (ddpclient) => new Promise((resolve, reject) => {
    ddpclient.call("archiveOldRoomMessages", [], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  })
};
