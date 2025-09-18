import express from "express";
import UserRouter from "./routes/users.routes.js"
import CourseRouter from "./routes/courses.routes.js"
import { setupMiddlewares } from "./middlewares/index.js"
const app = express();


setupMiddlewares(app);

app.use("/api/users", UserRouter);
app.use("/api/courses", CourseRouter)





app.get('/', (req, res) => {
    res.send('Welcome to SkillUp Nigeria');
});

export default app;