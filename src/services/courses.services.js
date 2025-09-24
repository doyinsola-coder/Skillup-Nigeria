import Course from "../models/course.js";


export const createNewCourse = async (title, description, instructor, price, category, duration) => {
    const newCourse = new Course ({
        title: title,
        description: description,
        instructor: instructor,
        price: price,
        category: category,
        duration: duration 
    })
    await newCourse.save();
    return newCourse

};

export const getAll = async () => {
    const newCourse = await Course.find()

    return newCourse
}

