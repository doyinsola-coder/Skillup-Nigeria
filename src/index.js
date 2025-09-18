import express from 'express';
import app from './app.js'
import { setupMiddlewares } from './middlewares/index.js';
import { configDotenv } from 'dotenv';
import { connect } from 'mongoose';



setupMiddlewares(app);

configDotenv();
try {
    const conn = await connect(process.env.MONGO_URL);
    console.log(`MongoDb connected: ${conn.connection.host}`);
} catch (error) {
    console.log(error);
    process.exit(1);
}




    const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port 3000");
});