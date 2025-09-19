import Review from "../models/review.js";


export const createNewReview = async (user, course, rating ) => {
      const newReview = new Review ({
        user: user,
        course: course,
        rating: rating
      })
      await newReview.save();

      return newReview
}

