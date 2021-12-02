import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send('hey yall');
});
app.listen(PORT, () => {
    console.log(`connected on port ${PORT}`);
});
export default app;
