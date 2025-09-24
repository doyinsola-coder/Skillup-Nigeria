import { createNewLesson } from "../services/lessons.services.js";


export const createLesson = async (req, res) => {
    const {title, description, videoUrl, contentType, order } = req.body
    const newLesson = await createNewLesson (title, description, videoUrl, contentType, order)

    if(!newLesson) {
        return res.status(400).json ({message: "Lesson not created"})
    }
    res.status(201).json(newLesson)
}

