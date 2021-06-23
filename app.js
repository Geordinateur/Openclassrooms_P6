const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const Sauce = require('./models/Sauce');
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');


/*const { connect, connection } = require('mongoose');
const { config } = require('dotenv');

module.exports = () => {
	config();
	const uri = process.env.DB_URI;
	connect(uri, {
		dbName: process.env.DB_NAME,
		user: process.env.DB_USER,
		pass: process.env.DB_PASS,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true })
		.then(() => {
			console.log('Connection réussie!');
		})
		.catch(error => console.error(error.message));
	}

/*mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.nnzle.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true,
		useUnifiedTopology: true })
	.then(() => console.log('Connexion à MongoDB réussie!'))
	.catch(() => console.error('Connexion à MongoDB échouée!'));
	*/

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' );
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes)

module.exports = app;
