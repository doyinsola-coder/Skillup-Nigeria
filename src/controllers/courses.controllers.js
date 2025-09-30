import Course from "../models/course.js";
import { createNewCourse, getAll } from "../services/courses.services.js";


export const createCourse = async (req, res) => {
    try {
    const { title, description, instructor, category } = req.body
    if (req.user.role !== 'instructor' && req.user.role !== 'admin') {
        return res.status(403).json({ message: "only instructors and admins can create courses" })
    }
    const newCourse = new Course ({
        title,
        description,
        category,
        instructor: req.user.id
    });

    await newCourse.save();
    res.status(201).json(newCourse);
} catch (err) {
    res.status(500).json({ msg: 'Server error' });
}
};

export const getAllCourses = async (req, res) => {
    try{
        const courses = await Course.find().populate('instructor', 'name email');
        res.json(courses);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('instructor', 'name email');
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }   
};