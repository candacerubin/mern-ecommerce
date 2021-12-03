const express = require('express');
// import productRouter from './routes/products';

// initialize Express
const app = express();

// middleware that parses incoming requests and returns JSON
app.use(express.json());

// set endpoints/routes
app.get('/', (req, res) => {
	res.send('The server is still functioning properly');
});
// app.use('/api/products', productRouter);

module.exports = app;
