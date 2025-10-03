import { createNewEnrollment, getUserEnrollments } from "../services/enrollments.services.js";

export const createEnrollment = async (req, res) => {
  const { user, course } = req.body;

  const newEnrollment = await createNewEnrollment(user, course);

  if (!newEnrollment) {
    return res.status(400).json({ message: "Enrollment not created or already exists" });
  }

  res.status(201).json(newEnrollment);
};

export const getEnrollmentsByUser = async (req, res) => {
  const { userId } = req.params;

  const enrollments = await getUserEnrollments(userId);

  res.status(200).json(enrollments);
};
