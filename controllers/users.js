const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../services/authorization');

exports.signin = (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (!user) {
				throw new Error('User not found');
			}
			return Promise.all([bcrypt.compare(req.body.password, user.hashedPassword), user]);
		})
		.then(([result, user]) => {
			if (result) {
				res.send(auth.createToken({name: user.name, email: user.email, _id: user._id}));
			}
			else {
				res.sendStatus(401);
			}
		})
		.catch(next);
};

exports.signup = (req, res, next) => {
	const saltRounds = 10;
	bcrypt.hash(req.body.password, saltRounds)
		.then((hash) => {
			let user = new User(req.body);
			user.hashedPassword = hash;
			return user.save();
		})
		.then((user) => {
			res.send(auth.createToken({name: user.name, email: user.email, _id: user._id}));
		})
		.catch(next);
};

