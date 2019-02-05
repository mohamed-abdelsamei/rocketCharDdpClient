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
	sender: 'konnectus',
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
		ddpclient.call("sendMessage", [{ "rid": "GENERAL", "msg": "[ ](http://localhost:3050/channel/general?msg=11111111) kkkkkk" }], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"sentMessgeWithCritical": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("sendMessage", [{ "rid": "GENERAL", "msg": "hello", "criticals": ["s9TicfeLdKSeB47YS"] }], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"createPrivateGroup": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("createPrivateGroup", ["dfdf mmmmmmmmmmmmmm", ["eng.shark_x@yahoo.com", "5bfbd40f22fc3f3d8df5b790@role.com"], "fffff", false, { image: "ggggg" }], (err, result) => {
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
		ddpclient.call("readMessages", ["GENERAL"], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"deliverMessage": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("deliverMessage", ["GENERAL"], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"getReadReceipts": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("getReadReceipts", [{ "messageId": "vBo5sZPDd4xwowoCG" }], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"getDeliveryReceipts": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("getDeliveryReceipts", [{ "messageId": "vBo5sZPDd4xwowoCG" }], (err, result) => {
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
		ddpclient.call("setReaction", ['seen', "ecaoemy6opWgSoayP"], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"createDirectMessage": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("createDirectMessage", ["eng.shark_x@yahoo.com"], (err, result) => {
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
		ddpclient.call("subscriptions/get", [{ "messageId": "FbmAM4TLRfKLgQ49t" }], (err, result) => {
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
	"saveRoomSettings": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("saveRoomSettings", ['oZRd6pxnNALpKMxFi','roomImage','http://localhost'], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
};
