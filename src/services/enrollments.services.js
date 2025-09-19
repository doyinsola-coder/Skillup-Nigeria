import Enrollment from "../models/enrollment.js";

export const createNewEnrollment = async (user, course) => {
  const newEnrollment = new Enrollment({
    user,
    course,
  });

  await newEnrollment.save(); 
  return newEnrollment;
};
