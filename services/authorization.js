const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');
const secret = 'gamee-cookbook-secret';

const parseRequestToken = (req) => {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		return req.headers.authorization.split(' ')[1];
	}
	return null;
};

/* Validate JWT in request */
exports.requiresLogin = (req, res, next) => expressJWT({
	secret,
	getToken(req) {
		return parseRequestToken(req);
	},
})(req, res, next);

exports.createToken = (data) =>
	jwt.sign(data, secret);