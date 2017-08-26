const mongoose = require('mongoose');

// const uri = 'mongodb://heroku_hjjmv3kf:a1n171ufgrglhgt2ihdfjgg5c7@ds145263.mlab.com:45263/heroku_hjjmv3kf';
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/gamee-cookbook';

const db = mongoose.connect(url, (err, db) => {
	if (err) {
		console.log('Db connection error', err);
	}
	console.log('Connected to database');
});

module.exports = db;