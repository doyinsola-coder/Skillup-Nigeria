import { createNewReview } from "../services/reviews.services.js";

export const createReview = async (req, res) => {
    const {user, course, rating} = req.body
    const newReview = await createNewReview (user, course, rating)

    if(!newReview) {
        return res.status(400).json ({message: "Review not created"})
    }
    res.status(201).json(newReview)
}