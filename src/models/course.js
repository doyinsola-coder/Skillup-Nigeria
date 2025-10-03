import {Schema, model} from 'mongoose';

const courseSchema =    new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Technology', 'Business', 'Design', 'Creative']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Course = model('Course', courseSchema);

export default Course;