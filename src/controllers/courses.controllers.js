import { createNewCourse } from "../services/courses.services.js";


export const createCourse = async (req, res) => {
    const { title, description, instructor, price, category, duration } = req.body
    const newCourse = await createNewCourse ( title, description, instructor, price, category, duration)

    if(!newCourse) {
        return res.status(400).json ({message: "course not created"})
    }
    res.status(201).json(newCourse)
}