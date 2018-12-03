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
		ddpclient.call("sendMessage", [{ "rid": "GENERAL", "msg": "hello", "criticals": ["vCgmWXdWRCaKWK4k8"] }], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"createPrivateGroup": (ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("createPrivateGroup", ["dfdf fdfd", []], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
	"loadHistory":(ddpclient) => new Promise((resolve, reject) => {
		ddpclient.call("loadHistory", [ "GENERAL", null, 50, { "$date": 1480377601 } ], (err, result) => {
			if (err) {
				return reject(err);
			}
			resolve(result);
		});
	}),
};
