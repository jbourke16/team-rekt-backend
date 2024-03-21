import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getGameReviews = async (req, res) => {
  try {
    const { gameId } = req.params
    const gameReviews = await Review.find({gameId});
    res.json(gameReviews)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

export const getUserReviews = async (req, res) => {
  try {
    const { userId } = req.params
    const userReviews = await Review.find({userId});
    res.json(userReviews)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

export const getReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    if (review) {
      return res.json(review);
    }
    res.status(404).json({ message: "Review not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(review);
};

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Review deleted");
    }
    throw new Error("Review not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
