const recipes = [
	{
		id: 1,
		name: 'First',
		description: ['One', 'Two', 'Three'],
		category: 'main',
		image: null
	},
	{
		id: 2,
		name: 'Second',
		description: ['One', 'Two', 'Three'],
		category: 'main',
		image: null
	}
];

const categories = ['appetizer', 'salad', 'soup', 'main', 'dessert'];

exports.getAll = (req, res, next) => {
	res.send(recipes);
};

exports.getById = (req, res, next) => {
	console.log(req.params);
	res.send(recipes[0]);
};

exports.addRecipe = (req, res, next) => {
	res.send(req.body);
};

exports.updateRecipe = (req, res, next) => {
	res.send(req.body);
};