const mongoose = require('mongoose');

const uri = 'mongodb://heroku_hjjmv3kf:a1n171ufgrglhgt2ihdfjgg5c7@ds145263.mlab.com:45263/heroku_hjjmv3kf';

const db = mongoose.createConnection(uri);

db.on('error', console.error);
db.once('open', () => {
	console.log('Connected to database');
});

module.exports = db;