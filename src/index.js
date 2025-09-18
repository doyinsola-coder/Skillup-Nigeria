import express from 'express';
import { setupMiddlewares } from './middlewares';

const app = express();

setupMiddlewares(app);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log("Listenting on port 3000");
});