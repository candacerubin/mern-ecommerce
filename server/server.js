const app = require('./app');
const dotenv = require('dotenv');

// set server port
const PORT = process.env.PORT || 8000;

// config setup
dotenv.config({ path: 'server/config/config.env' });

// listen to server port
app.listen(PORT, () => {
	console.log(
		`Server running at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
	);
});
