import express from 'express';
import * as dotenv from 'dotenv';
// initialize Express inside Typescript
const app = express();
// config setup
dotenv.config({ path: 'server/config/config.env' });
// set server port
const PORT = process.env.PORT || 8000;
// set endpoints/routes
app.get('/', (req, res) => {
    res.send('The server is functioning properly');
});
// listen to server port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});
