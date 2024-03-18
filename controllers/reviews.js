import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
        
    };
}
