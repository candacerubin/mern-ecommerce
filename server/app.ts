import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv';

// initialize Express inside Typescript
const app: Application = express();

// config setup
dotenv.config({ path: 'server/config/config.env' });

// set server port
const PORT = process.env.PORT || 8000;

// set endpoints/routes
app.get('/', (req: Request, res: Response): void => {
	res.send('The server is functioning properly');
});

// listen to server port
app.listen(PORT, (): void => {
	console.log(
		`Server running at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
	);
});
