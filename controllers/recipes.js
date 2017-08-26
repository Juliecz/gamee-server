const Recipe = require('../models/Recipe');
const User = require('../models/User');

const recipes = [
	{
		_id: 1,
		name: 'Svatomartinská husa',
		ingredients: ['1 husa', '3 jablka', 'dlouhy knedlik'],
		categories: ['husa', 'maso'],
		directions: 'Husu ze všech stran - i zevnitř - nasolte, pokmínujte a zevnitř potřete majoránkou. \n Dovnitř vožte jednu housku. Husu položte prsy dolů do pekáče (ideálně na mřížku) a podlijte 200 ml vody. Pečte ji asi 30 minut v troubě předehřáté na 180°C, pak teplotu stáhnětě na 160°C a pečte další asi 3 hodiny dorůžova. Zhruba po první 1,5 hodině pečení otočte husu prsíčky nahoru.',
		time: 15,
		authorId: 1,
		image: 'https://ms1.ostium.cz/instance/web-recepty/jq4hs1AT/h389w574t.jpg'
	},
	{
		_id: 2,
		name: 'Koláčky',
		ingredients: ['1kg maku', '1kg polohladke mouky', 'cukr'],
		categories: ['pecivo', 'sladke'],
		directions: 'Z teplého mléka cukru a droždí se udělá kvásek. Pak se přidají žloutky, olej, špetka soli a hladká mouka. \n Těsto se pořádně vypracuje a ihned se z nich můžou dělat koláčky. Na vál lžíci dáváme bochánky, které vytvarujeme do kruhu, kde do středu dáme náplň nebo ovoce. Koláčky necháme na plechu ještě chvilku vykynout.',
		time: 30,
		authorId: 1,
		image: 'https://ms2.ostium.cz/instance/web-recepty/jU2q0hrd/h389w574t.jpg'
	},
	{
		_id: 3,
		name: 'Svatomartinská husa',
		ingredients: ['1 husa', '3 jablka', 'dlouhy knedlik'],
		categories: ['husa', 'maso'],
		directions: 'Husu ze všech stran - i zevnitř - nasolte, pokmínujte a zevnitř potřete majoránkou. \n Dovnitř vožte jednu housku. Husu položte prsy dolů do pekáče (ideálně na mřížku) a podlijte 200 ml vody. Pečte ji asi 30 minut v troubě předehřáté na 180°C, pak teplotu stáhnětě na 160°C a pečte další asi 3 hodiny dorůžova. Zhruba po první 1,5 hodině pečení otočte husu prsíčky nahoru.',
		time: 15,
		authorId: 1,
		image: 'https://lh3.googleusercontent.com/S8lncVa0k_bAZfxvlkeVIFE-3R637KKXrmDnj2SktkvfioyZc9hKy0JhQuGVLcRYRA=h900'
	},
	{
		_id: 4,
		name: 'Koláčky',
		ingredients: ['1kg maku', '1kg polohladke mouky', 'cukr'],
		categories: ['pecivo', 'sladke'],
		directions: 'Z teplého mléka cukru a droždí se udělá kvásek. Pak se přidají žloutky, olej, špetka soli a hladká mouka. \n Těsto se pořádně vypracuje a ihned se z nich můžou dělat koláčky. Na vál lžíci dáváme bochánky, které vytvarujeme do kruhu, kde do středu dáme náplň nebo ovoce. Koláčky necháme na plechu ještě chvilku vykynout.',
		time: 30,
		authorId: 1,
		image: 'https://ms2.ostium.cz/instance/web-recepty/jU2q0hrd/h389w574t.jpg'
	},
	{
		_id: 5,
		name: 'Svatomartinská husa',
		ingredients: ['1 husa', '3 jablka', 'dlouhy knedlik'],
		categories: ['husa', 'maso'],
		directions: 'Husu ze všech stran - i zevnitř - nasolte, pokmínujte a zevnitř potřete majoránkou. \n Dovnitř vožte jednu housku. Husu položte prsy dolů do pekáče (ideálně na mřížku) a podlijte 200 ml vody. Pečte ji asi 30 minut v troubě předehřáté na 180°C, pak teplotu stáhnětě na 160°C a pečte další asi 3 hodiny dorůžova. Zhruba po první 1,5 hodině pečení otočte husu prsíčky nahoru.',
		time: 15,
		authorId: 1,
		image: 'https://ms1.ostium.cz/instance/web-recepty/jq4hs1AT/h389w574t.jpg'
	},
	{
		_id: 6,
		name: 'Koláčky',
		ingredients: ['1kg maku', '1kg polohladke mouky', 'cukr'],
		categories: ['pecivo', 'sladke'],
		directions: 'Z teplého mléka cukru a droždí se udělá kvásek. Pak se přidají žloutky, olej, špetka soli a hladká mouka. \n Těsto se pořádně vypracuje a ihned se z nich můžou dělat koláčky. Na vál lžíci dáváme bochánky, které vytvarujeme do kruhu, kde do středu dáme náplň nebo ovoce. Koláčky necháme na plechu ještě chvilku vykynout.',
		time: 30,
		authorId: 1,
		image: null
	},
	{
		_id: 7,
		name: 'Svatomartinská husa',
		ingredients: ['1 husa', '3 jablka', 'dlouhy knedlik'],
		categories: ['husa', 'maso'],
		directions: 'Husu ze všech stran - i zevnitř - nasolte, pokmínujte a zevnitř potřete majoránkou. \n Dovnitř vožte jednu housku. Husu položte prsy dolů do pekáče (ideálně na mřížku) a podlijte 200 ml vody. Pečte ji asi 30 minut v troubě předehřáté na 180°C, pak teplotu stáhnětě na 160°C a pečte další asi 3 hodiny dorůžova. Zhruba po první 1,5 hodině pečení otočte husu prsíčky nahoru.',
		time: 15,
		authorId: 1,
		image: 'https://lh3.googleusercontent.com/S8lncVa0k_bAZfxvlkeVIFE-3R637KKXrmDnj2SktkvfioyZc9hKy0JhQuGVLcRYRA=h900'
	},
	{
		_id: 8,
		name: 'Koláčky',
		ingredients: ['1kg maku', '1kg polohladke mouky', 'cukr'],
		categories: ['pecivo', 'sladke'],
		directions: 'Z teplého mléka cukru a droždí se udělá kvásek. Pak se přidají žloutky, olej, špetka soli a hladká mouka. \n Těsto se pořádně vypracuje a ihned se z nich můžou dělat koláčky. Na vál lžíci dáváme bochánky, které vytvarujeme do kruhu, kde do středu dáme náplň nebo ovoce. Koláčky necháme na plechu ještě chvilku vykynout.',
		time: 30,
		authorId: 1,
		image: null
	},
	{
		_id: 9,
		name: 'Svatomartinská husa',
		ingredients: ['1 husa', '3 jablka', 'dlouhy knedlik'],
		categories: ['husa', 'maso'],
		directions: 'Husu ze všech stran - i zevnitř - nasolte, pokmínujte a zevnitř potřete majoránkou. \n Dovnitř vožte jednu housku. Husu položte prsy dolů do pekáče (ideálně na mřížku) a podlijte 200 ml vody. Pečte ji asi 30 minut v troubě předehřáté na 180°C, pak teplotu stáhnětě na 160°C a pečte další asi 3 hodiny dorůžova. Zhruba po první 1,5 hodině pečení otočte husu prsíčky nahoru.',
		time: 15,
		authorId: 1,
		image: 'https://ms1.ostium.cz/instance/web-recepty/jq4hs1AT/h389w574t.jpg'
	},
	{
		_id: 10,
		name: 'Koláčky',
		ingredients: ['1kg maku', '1kg polohladke mouky', 'cukr'],
		categories: ['pecivo', 'sladke'],
		directions: 'Z teplého mléka cukru a droždí se udělá kvásek. Pak se přidají žloutky, olej, špetka soli a hladká mouka. \n Těsto se pořádně vypracuje a ihned se z nich můžou dělat koláčky. Na vál lžíci dáváme bochánky, které vytvarujeme do kruhu, kde do středu dáme náplň nebo ovoce. Koláčky necháme na plechu ještě chvilku vykynout.',
		time: 30,
		authorId: 1,
		image: 'https://lh3.googleusercontent.com/S8lncVa0k_bAZfxvlkeVIFE-3R637KKXrmDnj2SktkvfioyZc9hKy0JhQuGVLcRYRA=h900'
	}
];

const categories = ['appetizer', 'salad', 'soup', 'main', 'dessert'];

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