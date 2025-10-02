import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["admin", "learner", "instructor"],
    default: "learner",
  },

  // 🔑 Enrolled Courses
  courses: [
    {
      course: { type: Schema.Types.ObjectId, ref: "Course" },
      progress: { type: Number, default: 0 }, // % completed
      completed: { type: Boolean, default: false },
    },
  ],

  // 🔑 Certificates
  certificates: [
    {
      course: { type: Schema.Types.ObjectId, ref: "Course" },
      issuedAt: { type: Date, default: Date.now },
    },
  ],
});

const User = model("User", userSchema);

export default User;
