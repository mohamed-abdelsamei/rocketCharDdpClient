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
		ddpclient.call("sendMessage", [{ "rid": "GENERAL", "msg": "hello" }], (err, result) => {
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
		ddpclient.call("createPrivateGroup", ["dfdf tttttt", ["eng.shark_x@yahoo.com"], "ooolll", false ,{ image: "ggggg" }], (err, result) => {
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
	"readMessages": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("readMessages", ["s9TicfeLdKSeB47YS"], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"setReaction": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("setReaction", ['seen',"ecaoemy6opWgSoayP"], (err, result) => {
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
		ddpclient.call("getRoomRoles", ["s9TicfeLdKSeB47YS",true], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
};
