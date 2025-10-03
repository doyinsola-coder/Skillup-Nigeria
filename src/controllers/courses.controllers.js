import Course from "../models/course.js";
import { createNewCourse, getAll } from "../services/courses.services.js";


export const createCourse = async (req, res) => {
  try {
    const { title, description, instructor, category } = req.body;

    // TEMPORARILY removed req.user check for testing
    const newCourse = new Course({
      title,
      description,
      category,
      instructor
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    console.error("🔥 Error creating course:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};


export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find(); // no populate
    res.json(courses);
  } catch (err) {
    console.error("🔥 Error fetching courses:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id); // no populate
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    console.error("🔥 Error fetching course by ID:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
