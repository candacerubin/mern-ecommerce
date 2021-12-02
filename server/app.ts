import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response): void => {
	res.send('hey yall');
});

app.listen(PORT, (): void => {
	console.log(`connected on port ${PORT}`);
});

export default app;
