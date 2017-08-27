const accessControl = require('./accessControl');
const auth = require('../services/authorization');
const index = require('../controllers/index'),
	users = require('../controllers/users'),
	recipes = require('../controllers/recipes');

module.exports = (app) => {
	app.use(accessControl);
	
	app.get('/', index.render);
	
	app.get('/recipes', recipes.getAll);
	app.get('/recipes/:id', recipes.getById);
	app.post('/recipes', auth.requiresLogin, recipes.addRecipe);
	app.put('/recipes', auth.requiresLogin, recipes.updateRecipe);
	app.delete('/recipes/:id', auth.requiresLogin, recipes.deleteRecipe);
	
	app.post('/signup', users.signup);
	app.post('/signin', users.signin);
	app.get('*', (req, res) => res.sendStatus(404));
};
