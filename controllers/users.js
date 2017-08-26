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

