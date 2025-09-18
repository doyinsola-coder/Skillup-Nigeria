import {Schema, model} from 'mongoose';


const lessonSchema = new Schema({
    title: {
        type: string,
        required: true,
    },
    description: {
        type: string,
        required: true,
    },
    videoUrl: {
        type: string,
        required: true,
    },
    contentType: {
        type: string,
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