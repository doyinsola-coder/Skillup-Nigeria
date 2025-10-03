import Enrollment from "../models/enrollment.js";

export const createNewEnrollment = async (user, course) => {
  try {
    // Check if enrollment already exists
    const existing = await Enrollment.findOne({ userId: user, courseId: course });
    if (existing) {
      return null;
    }

    const newEnrollment = new Enrollment({ userId: user, courseId: course });
    await newEnrollment.save();

    return newEnrollment;
  } catch (error) {
    console.error("Error creating enrollment:", error);
    return null;
  }
};

// ✅ Get all enrollments for a user
export const getUserEnrollments = async (userId) => {
  try {
    return await Enrollment.find({ userId }).populate("courseId"); 
    // populate brings full course details
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    return [];
  }
};
