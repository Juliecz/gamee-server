const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
	name: String,
	ingredients: Array,
	categories: Array,
	directions: String,
	time: Number,
	authorId: Number,
	image: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);