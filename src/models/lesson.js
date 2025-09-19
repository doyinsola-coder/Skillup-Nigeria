import {Schema, model} from 'mongoose';


const lessonSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    contentType: {
        type: String,
        enum: ['video', 'pdf','quiz'],
        required: true,

    },
      textContent: {
        type: String,
      },
      quiz: [
        {
          question: { type: String },
          options: [{ type: String }],
          correctAnswer: { type: String },
        },
      ],
      order: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  
    
);

const Lesson = model('Lesson', lessonSchema);

export default Lesson;