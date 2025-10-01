import { config as dotenvConfig } from "dotenv";
dotenvConfig();  // MUST be first

import express from "express";
import { connect } from "mongoose";
import app from "./app.js";
import { setupMiddlewares } from "./middlewares/index.js";

// Setup middlewares
setupMiddlewares(app);

// Connect DB
try {
  const conn = await connect(process.env.MONGO_URL);
  console.log(`MongoDb connected: ${conn.connection.host}`);
} catch (error) {
  console.log(error);
  process.exit(1);
}

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log("Email user:", process.env.EMAIL_USER);
  console.log("Email pass length:", process.env.EMAIL_PASS?.length);
});
