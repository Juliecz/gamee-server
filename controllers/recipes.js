const Recipe = require('../models/Recipe');

exports.getAll = (req, res, next) => {
	Recipe.find()
		.then((recipes) => res.json(recipes))
		.catch(next);
};

exports.getById = (req, res, next) => {
	const id = req.params.id;
	Recipe.findOne({ _id: id })
		.then((recipe) => res.json(recipe))
		.catch(next);
};

exports.getByAuthorId = (req, res, next) => {
	console.log(req.params);
	res.send(recipes[0]);
};

exports.addRecipe = (req, res, next) => {
	const recipe = new Recipe(req.body);
	recipe.save()
		.then((recipe) => res.json(recipe))
		.catch(next);
};

exports.updateRecipe = (req, res, next) => {
	Recipe.findOneAndUpdate({ _id: req.body._id }, req.body, {new: true}, (err, recipe) => {
		res.json(recipe);
	});
};

exports.deleteRecipe = (req, res, next) => {
	Recipe.findByIdAndRemove({ _id: req.params.id }, (err) => {
		if (err) { console.log(err); res.sendStatus(500); }
		res.sendStatus(200);
	});
};