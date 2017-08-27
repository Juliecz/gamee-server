const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	ingredients: Array,
	categories: Array,
	directions: String,
	time: Number,
	authorId: {
		ref: 'User',
		type: mongoose.Schema.ObjectId
	},
	image: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);