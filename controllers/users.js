const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = 'gamee-cookbook-secret';

const users = [
	{
		_id: 1,
		name: 'Yuliya',
		surname: 'Ovchinnikova',
		username: 'yuliya'
	}
];

exports.users = (req, res, next) => {
	res.send(users);
};

exports.signin = (req, res, next) => {
	console.log(req.body);
	res.send('sfd0dfsdsd923jnflk032');
};

exports.signup = (req, res, next) => {
	const user = new User(req.body);
	return user.save()
		.then((user) => {
			const token = jwt.sign({ name: user.name, email: user.email, _id: user._id }, secret);
			res.send(token);
		})
		.catch(next);
	// res.sendStatus(200);
};

