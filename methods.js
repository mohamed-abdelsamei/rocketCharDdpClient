const config = require("./config"),
	// var Random = require('ddp-random')

	// var random = Random.createWithSeeds('randomSeed')

	loginCreds = {
		"user": { "email": config.rocket.email },
		"password": config.rocket.password
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
	})
};
