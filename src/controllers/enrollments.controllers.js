import { createNewEnrollment } from "../services/enrollments.services.js";


export const createEnrollment = async (req, res) => {
    const {user, course} = req.body
    const newEnrollment = await createNewEnrollment (user, course )

    if(!newEnrollment) {
        return res.status(400).json ({message: "Enrollment not created"})
    }
    res.status(201).json(newEnrollment)
};