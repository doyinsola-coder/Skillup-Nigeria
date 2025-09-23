import { createNewCourse, getAll } from "../services/courses.services.js";


export const createCourse = async (req, res) => {
    const { title, description, instructor, price, category, duration } = req.body
    const newCourse = await createNewCourse ( title, description, instructor, price, category, duration)


}

export const getAllCourses = async (req, res) => {
    const newCourse = await getAll()

   if (!newCourse) {
    return res.status(400).json({message: "could not get all courses"})
   } 
   res.status(200).json (newCourse)
}