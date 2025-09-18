import express from 'express';
import { setupMiddlewares } from './middlewares/index.js';

const app = express();

setupMiddlewares(app);

app.get('/', (req, res) => {
    res.send('Welcome to SkillUp Nigeria');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});