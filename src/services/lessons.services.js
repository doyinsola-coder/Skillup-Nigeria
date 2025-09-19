import Lesson from "../models/lesson.js";

export const createNewLesson = async (title, description, videoUrl, contentType, order) => {
    const newLesson = new Lesson ({
        title: title,
        description: description,
        videoUrl: videoUrl,
        contentType: contentType,
        order: order
    })
    await newLesson.save();

    return newLesson
}