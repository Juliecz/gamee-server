const User = require('../models/User');
const auth = require('../services/authorization');

exports.signin = (req, res, next) => {
	console.log(req.body);
	res.send('sfd0dfsdsd923jnflk032');
};

exports.signup = (req, res, next) => {
	const user = new User(req.body);
	return user.save()
		.then((user) => {
			const token = auth.createToken({ name: user.name, email: user.email, _id: user._id });
			res.send(token);
		})
		.catch(next);
	// res.sendStatus(200);
};

