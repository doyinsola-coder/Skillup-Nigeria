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
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Plumbing', 'Tailoring', 'Catering', 'Electrical', 'Fashion Design', 'Carpentry', 'Welding', 'Automobile Repair', 'Cosmetology', 'Information Technology']
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