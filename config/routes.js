const accessControl = require('./accessControl');

const index = require('../controllers/index'),
	users = require('../controllers/users'),
	recipes = require('../controllers/recipes');

module.exports = (app) => {
	app.use(accessControl);
	
	app.get('/', index.render);
	
	app.get('/recipes', recipes.getAll);
	app.get('/recipes/:id', recipes.getById);
	app.post('/recipes', recipes.addRecipe);
	app.put('/recipes', recipes.updateRecipe);
	
	app.get('/users', users.users);
	app.get('*', (req, res) => res.sendStatus(404));
};
