import express from "express";
import UserRouter from "./routes/users.routes.js"
import CourseRouter from "./routes/courses.routes.js"
import { setupMiddlewares } from "./middlewares/index.js"
import EnrollmentRouter from "./routes/enrollments.routes.js"
import LessonRouter from "./routes/lessons.routes.js"
import ReviewRouter from "./routes/reviews.routes.js"
const app = express();


setupMiddlewares(app);

app.use("/api/users", UserRouter);
app.use("/api/courses", CourseRouter);
app.use("/api/enrollments", EnrollmentRouter);
app.use("/api/lessons", LessonRouter);
app.use("/api/reviews", ReviewRouter);





app.get('/', (req, res) => {
    res.send('Welcome to SkillUp Nigeria');
});

export default app;