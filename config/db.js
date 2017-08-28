const mongoose = require('mongoose');

// Use native promises
mongoose.Promise = global.Promise;

// const uri = 'mongodb://heroku_hjjmv3kf:a1n171ufgrglhgt2ihdfjgg5c7@ds145263.mlab.com:45263/heroku_hjjmv3kf';
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/gamee-cookbook';

const db = mongoose.connect(url, { useMongoClient: true })
	.then(() => {
		console.log('Connected to database');
	})
	.catch((err) => {
		console.error('Database connection error', err);
	});

module.exports = db;